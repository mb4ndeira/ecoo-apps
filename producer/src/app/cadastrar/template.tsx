"use client";
import _ from "lodash";
import { FormEvent, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname, useRouter, redirect } from "next/navigation";
import { motion } from "framer-motion";
import { Form as AriaForm } from "react-aria-components";
import { z } from "zod";
import { toast } from "sonner";

import OldButton from "@shared/components/OldButton";
import { callServer } from "@shared/callServer";

import { createAccountAction } from "@shared/_actions/account/create-account/index";
import { registerAgribusinessAction } from "@shared/_actions/register-agribusiness";

import ProgressBar1 from "../../assets/progress-bar-1.png";
import ProgressBar2 from "../../assets/progress-bar-2.png";
import ProgressBar3 from "../../assets/progress-bar-3.png";

import {
  registerStep1FieldsSchema,
  registerStep2FieldsSchema,
  registerStep4FieldsSchema,
} from "./schemas";

const PROGRESS_BAR_PATH = {
  "1": ProgressBar1,
  "2": ProgressBar2,
  "3": null,
  "4": ProgressBar3,
};

const SUBMIT_ACTION = {
  "1": null,
  "2": callServer(createAccountAction).run,
  "3": null,
  "4": callServer(registerAgribusinessAction).run,
};

const FIELDS_VALIDATION_SCHEMA = {
  "1": registerStep1FieldsSchema,
  "2": registerStep2FieldsSchema,
  "3": null,
  "4": registerStep4FieldsSchema,
};

export default function RegisterTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const pathnameStep = pathname
    .split("/")
    .pop() as keyof typeof PROGRESS_BAR_PATH;

  const [assetsLoaded, setAssetsLoaded] = useState(
    PROGRESS_BAR_PATH[pathnameStep] === null ? true : false
  );

  const savedStep =
    typeof window !== "undefined"
      ? localStorage.getItem("register-form-step")
      : null;

  if (savedStep) {
    if (savedStep !== pathnameStep) redirect(`/cadastrar/${savedStep}`);
  }

  if (!savedStep) {
    if (pathnameStep !== "1") redirect(`/cadastrar/1`);
  }

  const onImageLoad = () => {
    setAssetsLoaded(true);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const fieldSchemas = FIELDS_VALIDATION_SCHEMA[pathnameStep];
    const data = JSON.parse(
      localStorage.getItem("register-form-data") as string
    );

    if (fieldSchemas) {
      const validationSchema = z
        .object(FIELDS_VALIDATION_SCHEMA[pathnameStep] as any)
        .strict();

      const isLikeSchema = validationSchema.safeParse(
        _.pick(data, Object.keys(fieldSchemas))
      );
      if (!isLikeSchema.success) {
        toast.error(
          JSON.parse(isLikeSchema.error as unknown as string)[0]["message"]
        );

        return;
      }
    }

    if (SUBMIT_ACTION[pathnameStep] !== null) {
      const result = await (
        SUBMIT_ACTION[pathnameStep] as (data: unknown) => unknown
      )(data);

      if (!result) return;
    }

    if (pathnameStep === "4") {
      localStorage.removeItem("register-form-data");
      localStorage.removeItem("register-form-step");

      return router.push(`/login`);
    }

    const nextStep = parseInt(pathnameStep) + 1;
    localStorage.setItem("register-form-step", JSON.stringify(nextStep));
    localStorage.setItem("register-form-data", JSON.stringify(data));

    router.push(`/cadastrar/${nextStep}`);
  };

  const navigateBack = () => {
    if (parseInt(pathnameStep) > 1)
      localStorage.setItem(
        "register-form-step",
        JSON.stringify(parseInt(pathnameStep) - 1)
      );
  };

  const Buttons = () => (
    <div className="flex justify-self-end gap-2 w-full ">
      <Link
        className="w-full"
        tabIndex={-1}
        href={
          pathnameStep === "1"
            ? "/inicio"
            : `/cadastrar/${parseInt(pathnameStep) - 1}`
        }
        onClick={navigateBack}
      >
        <OldButton
          className="py-[10px] border-2 rounded-[6px] inter-font text-base leading-[22px] tracking-tight font-semibold text-slate-gray border-slate-gray bg-white"
          type="button"
          title="Voltar"
        />
      </Link>
      <OldButton
        className=" w-1/2 py-[10px] border-2 rounded-[6px] inter-font text-base leading-[22px] tracking-tight font-semibold bg-slate-gray text-white border-slate-gray"
        type="submit"
        title="Avançar"
      />
    </div>
  );

  return (
    <motion.div
      className="w-full h-full pt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: assetsLoaded ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      {PROGRESS_BAR_PATH[pathnameStep] !== null && (
        <Image
          className="px-4"
          src={PROGRESS_BAR_PATH[pathnameStep] as StaticImageData}
          alt="progress-bar"
          width={615}
          height={100}
          onLoad={onImageLoad}
        />
      )}
      {pathnameStep !== "3" ? (
        <AriaForm
          className="flex flex-col justify-between w-full h-full pt-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col w-full h-full">{children}</div>
          <Buttons />
        </AriaForm>
      ) : (
        <div className="w-full h-full">{children}</div>
      )}
    </motion.div>
  );
}
