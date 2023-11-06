import { AuthenticationForm , schema } from "../page";

export const validatorInputCadastrar1 = async (data: AuthenticationForm): Promise<boolean> => {
  try{
    await schema.validate(data, { abortEarly: false })
    return true
  } catch(error: any){
    console.log(error)
    return false
  }
}