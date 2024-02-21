interface accountProps{
  email: string,
  cellphone: string,
  password: string,
  first_name: string,
  last_name: string,
  cpf: string
}

interface agribusinesses {
    name: string,
    caf: string
  }

interface loginProps{
  email: string,
  password: string
}

export const createAccount = async (account: accountProps) => {
  try {
    const response = await fetch('http://localhost:3333/users', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(account)
    })

    const data = await response.json()

    return { status: response.status, data }
  } catch (error: any) {
    console.log(error)
  }
}

export const createAgribusinesses = async (agribusinesses: agribusinesses, access_token: string) => {
  try{
    const response = await fetch('http://localhost:3333/agribusinesses', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${access_token}`
      },
      body: JSON.stringify(agribusinesses)
    })
    
    const data = await response.json()

    return { status: response.status, data }
  }catch(error: any){
    console.log(error)
  }
}

export const loginAccount = async ({ email, password }: loginProps) => {
  try{
    const response = await fetch('http://localhost:3333/auth', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
    
    const data = await response.json()

    if(response.status !== 200){
      return { status: response.status, data }
    }

    document.cookie = `access_token=${data.access_token};`

    return { status: response.status, data };
  }catch(error){
    console.log(error)
  }
}

export const refreshAccount = async (access_token: string) => {
  try{
    const response = await fetch('http://localhost:3333/auth/refresh',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(access_token)
    })

    const data = await response.json()

    if(response.status === 400){
      return { status: response.status, data }
    }

    document.cookie = `access_token=${data.access_token};`

    return { status: response.status, data };
  }catch(error: any){
    console.log(error)
  }
}
