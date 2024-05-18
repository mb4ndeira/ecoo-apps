export const getAppID = () => {
  const appID = process.env.APP_ID;

  if (!appID)
    throw new Error(
      "Erro inesperado (ao recuperar o ID da aplicação), contate o suporte."
    );

  return appID;
};
