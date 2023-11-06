import { date } from 'yup'
import { AuthenticationForm, schema } from '../page'

export const validatorInputCadastrar2 = async (data: AuthenticationForm) => {
  try{
    await schema.validate(data, { abortEarly: false })
    return true
  } catch(error: any){
    console.log(error)
    return false
  }
}