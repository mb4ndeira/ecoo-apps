export function useSetLocalStorage(key: string, value: any){
  const valueString = JSON.stringify(value)

  localStorage.setItem(key, valueString)
}