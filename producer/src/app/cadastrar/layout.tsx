"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const currentStep = pathname.split("/").pop();

  return (
    <main
      className={
        "flex flex-col items-center w-full h-full px-4 bg-background" +
        " " +
        (currentStep === "3" ? "pb-[25%]" : "pb-[72.5%]")
      }
    >
      <motion.div
        className="w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {currentStep !== "3" && (
          <div className="flex flex-col items-center gap-4 pt-20">
            <h1 className="text-3xl font-medium text-slate-gray">
              Crie uma conta
            </h1>
            <span className="text-sm leading-[22px] font-medium text-slate-gray">
              Preencha seus dados abaixo ou <br />
              <Link className="underline" href={"/login"}>
                entre com uma conta existente
              </Link>
            </span>
          </div>
        )}
        <div className="w-full h-full">{children}</div>
      </motion.div>
    </main>
  );
}
