export default function phoneMask(value: string){
  if (!value) {
    return "";
  }

  const phoneWithoutMask = value.replace(/\D/g, "");

  if (phoneWithoutMask.length <= 11) {
    return phoneWithoutMask
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  } else {
    return phoneWithoutMask
    .slice(0, 11) 
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})\d+?$/, "$1");
  }
}