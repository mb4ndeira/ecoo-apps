export type GenericStatusCodes = 400 | 403 | 409;

export type EcooAPIRouteParams = {
  registerUser: [
    user_data: {
      email: string;
      cellphone: string;
      first_name: string;
      last_name: string;
      password: string;
      cpf: string;
    }
  ];
  authenticateUser: [user_data: { email: string; password: string }];
  getProducts: [access_token: string];
  getUser: [access_token: string];
  registerAgribusiness: [
    agribusiness_data: { caf: string; name: string },
    access_token: string
  ];
};

export interface IEcooAPI {
  registerUser: (
    ...params: EcooAPIRouteParams["registerUser"]
  ) => Promise<{ status: 201; data: EcooAPIRouteParams["registerUser"][0] }>;
  authenticateUser: (
    ...params: EcooAPIRouteParams["authenticateUser"]
  ) => Promise<{ status: 200; data: { token: string } }>;
  getUser: (
    ...params: EcooAPIRouteParams["getUser"]
  ) => Promise<{ status: 200; data: { name: string; email: string } }>;
  getProducts: (
    ...params: EcooAPIRouteParams["getProducts"]
  ) => Promise<{ status: 200; data: unknown[] }>;
  registerAgribusiness: (
    ...params: EcooAPIRouteParams["registerAgribusiness"]
  ) => Promise<{ status: 201; data: any }>;
}
