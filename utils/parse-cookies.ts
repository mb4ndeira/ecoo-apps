export const parseCookies = (
  cookieHeaderValue: string
): { [key: string]: string } => {
  const cookieParts = cookieHeaderValue.split(";").map((part) => part.trim());

  const cookieObject = {};
  cookieParts.forEach((part) => {
    const [key, value] = part.split("=");

    if (key && value) cookieObject[key.trim()] = value;
  });

  return cookieObject;
};
