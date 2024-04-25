"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { AiFillEye } from "react-icons/ai";
import { toast } from "sonner";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import OldButton from "@shared/components/OldButton";
import Input from "@shared/components/Input";
import { callServer } from "@shared/callServer";
import { loginAction } from "@shared/next/_actions/account/login";

const schema = yup.object({
  email: yup
    .string()
    .required("Informe o e-mail")
    .email("Informe um email válido!"),
  password: yup.string().required("Informe a senha"),
  // .min(8, "Mínimo 8 dígitos!"),
});

export default function FormLogin() {
  const resolver = yupResolver(schema);
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver });

  // This is a mockup of the onSubmit function that should be used for testing purposes
  // const onSubmit = ({ email, password }) => {
  //   toast.success("Login efetuado com sucesso.");
  //   router.push("/");
  // }

  const onSubmit = async ({ email, password }: any) =>
    await callServer(loginAction)
      .after(() => {
        toast.success("Login efetuado com sucesso.");
        router.push("/");
      })
      .run({
        email,
        password,
      });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-3 flex flex-col">
        <Input
          type="text"
          label="Email"
          register={{ ...register("email") }}
          error={errors.email?.message}
        />
        <Input
          label="Senha"
          type="password"
          icon={<AiFillEye />}
          register={{ ...register("password") }}
          // error={errors.password?.message}
        />
      </div>
      <OldButton
        type="submit"
        className="text-white bg-slate-gray mt-6"
        title="Entrar"
      />
    </form>
  );
}
