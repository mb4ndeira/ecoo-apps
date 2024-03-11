'use client'

import Button from "@shared/components/Button";
import Input from "@shared/components/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface FormProps {
  goNextClick: () => void;
}

const schema = yup.object({
  email: yup
    .string()
    .required("Informe o e-mail")
    .email("Informe um email válido!"),
});

export default function FormRecuperarSenha({ goNextClick }: FormProps){
  const resolver = yupResolver(schema);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver });

  const onSubmit = () => {
    toast.success('Código de verificação enviado com sucesso.')
    goNextClick()
  }
  
  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-3 flex flex-col">
        <Input
          type="text"
          label="Email"
          register={{ ...register("email") }}
          error={errors.email?.message}
        />
      </div>
      <Button
        type="submit"
        className="text-white bg-slate-gray mt-6"
        title="Avançar"
      />
    </form>
  )
}