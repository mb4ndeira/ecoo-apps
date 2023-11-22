export default function cafMask(value: string){
  if(!value){
    return ""
  }

  const CAFWithMask = value.replace(/\D/g, "");

  if (CAFWithMask.length <= 11) {
    return CAFWithMask
      .replace(/(\d{2})(\d)/, "$1.$2")
  } else {
    return CAFWithMask
      .slice(0, 11)
      .replace(/(\d{2})(\d)/, "$1.$2")
  }
}