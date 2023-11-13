import { AuthenticationForm, schema } from "@/app/cadastrar/components/Cadastrar2"

export const validatorInputCadastrar2 = async (data: AuthenticationForm) => {
  try{
    await schema.validate(data, { abortEarly: false })
    return true
  } catch(error: any){
    console.log(error)
    return false
  }
}