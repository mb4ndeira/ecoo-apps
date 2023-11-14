'use client'

import Button from "@/components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface FormProps{
  goBackClick: () => void
}

export const schema = yup.object({
  pin1: yup.number().required(),
  pin2: yup.number().required(),
  pin3: yup.number().required(),
  pin4: yup.number().required()
})

export type AuthenticationForm = yup.InferType<typeof schema>; 

function FormCadastrar3({ goBackClick }: FormProps){
  const resolver = yupResolver<AuthenticationForm>(schema);

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver })

  const [pin, setPin] = useState<string[]>(new Array(4).fill(""))
  const inputRef = useRef<HTMLInputElement>(null)
  const [activePin , setActivePin] = useState<number>(0)
  let currentPinIndex: number = 0

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target
    const newPin: string[] = [...pin]
    newPin[currentPinIndex] = value.substring(value.length - 1)

    if(!value){
      setActivePin(currentPinIndex - 1)
    } else{
      setActivePin(currentPinIndex + 1)
    }

    setPin(newPin)
  }

  const onSubmit = () => {
    console.log("clicado")
    const numero = `${pin[0]}${pin[1]}${pin[2]}${pin[3]}`.toString()
    const teste = new Number(numero)
    console.log(teste)
  }
  
  const handleKeyDown = ({ key }: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    currentPinIndex = index
    if(key === 'Backspace'){
      if(!pin[currentPinIndex] && currentPinIndex > 0){
        setActivePin(currentPinIndex - 1)
      }
    }
  }

  useEffect(() =>{
    inputRef.current?.focus()
  }, [activePin])
  
  return(
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex-col h-full">
      <div className="flex items-center flex-col h-1/2">
        <h1 className="text-2xl font-semibold mb-3">Verifique a sua conta</h1>
        <span className="text-primary text-base text-center">Insira o código PIN de 4 dígitos <br /> enviado para o seu celular *****4321</span>
        <div className="w-full flex justify-center mt-8 gap-4">
          {pin.map((_, index) => {
            return(
              <input
                {...register(`pin${index}` as any)}
                ref={index === activePin ? inputRef: null}
                key={index}
                value={pin[index]}
                className="w-14 h-14 text-center rounded-lg border-2 border-primary"
                type="password"
                onChange={handleChange}
                onKeyDown={(e) => handleKeyDown(e, index)}
                maxLength={1}
              />
            )
          })}
        </div>
      </div>
      <div className="w-full flex gap-2 h-1/2 items-end">
        <Button onClick={goBackClick} className="font-semibold text-slate-gray border-slate-gray border-2 py-[10px] w-1/2" type="button" title="Voltar"/>
        <Button className="font-semibold bg-slate-gray text-white border-slate-gray border-2 py-[10px] w-1/2" type="submit" title="Avançar"/>
      </div>
    </form>
  )
}

function ProgressBar3(){
  return(
    <div className="w-[90%] flex items-center justify-between mt-8">
      <div className="text-white bg-slate-gray w-[47px] h-[46px] p-3 text-2xl font-bold rounded-full flex items-center justify-center">
        1
      </div>
      <div className="w-[28%] h-[2px] bg-slate-gray -mx-10 relative"></div>
      <div className="w-[47px] h-[46px] p-3 text-2xl text-white bg-slate-gray font-bold rounded-full flex items-center justify-center">
        2
      </div>
      <div className="w-[28%] h-[2px] bg-slate-gray -mx-10"></div>
      <div className="w-[47px] h-[46px] p-3 text-2xl font-bold text-white bg-slate-gray rounded-full flex items-center justify-center">
        3
      </div>
    </div>
  )
}

export { FormCadastrar3, ProgressBar3 }