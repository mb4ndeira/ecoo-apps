'use client'

export function useGetLocalStorage(key: string){
  const result = window.localStorage.getItem(key)

  if(!result){
    return null;
  }

  return JSON.parse(result)
}