import {
  SuccessReturn,
  ExceptionReturn,
  UseCaseHandler,
} from "@shared/core/UseCase";
import { ecooAPIHTTPProvider } from "@shared/interfaces/ecoo-api-http-provider";

interface OrderItems {
  agribusiness: {
    id: string;
    name: string;
    caf: string;
    products: {
      id: string;
      image: string;
      amount: number;
      description?: string | null;
    }[];
  }[];
}

export interface OrderWithItems {
  id: string;
  payment_method: string;
  shipping_address: string | null;
  status: string;
  price: number;
  customer: {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
  };
  items: OrderItems;
}

export const viewOrder: UseCaseHandler<
  { access_token: string; order_id: string },
  { order: OrderWithItems }
> = async ({ access_token, order_id }, stubbed) => {
  if (stubbed) {
    const ordersStubbed: OrderWithItems[] = [
      {
        id: "205004",
        payment_method: "ON_DELIVERY",
        shipping_address: null,
        status: "PENDING",
        price: 100,
        customer: {
          id: "1",
          first_name: "Tyler",
          last_name: "Herro",
          email: "tyler.herro@example.com",
          phone: "11999999991",
        },
        items: {
          agribusiness: [
            {
              id: "1",
              name: "Agropecuária do João",
              caf: "123456",
              products: [
                {
                  id: "1",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cebola roxa",
                },
                {
                  id: "2",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Alface crespa",
                },
                {
                  id: "3",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Pimentão vermelho",
                },
                {
                  id: "4",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cenoura",
                },
                {
                  id: "5",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Couve",
                },
              ],
            },
            {
              id: "2",
              name: "Agropecuária da Maria",
              caf: "654321",
              products: [
                {
                  id: "6",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Feijão",
                },
                {
                  id: "7",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Arroz",
                },
                {
                  id: "8",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Milho",
                },
                {
                  id: "9",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Soja",
                },
                {
                  id: "10",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Trigo",
                },
              ],
            },
          ],
        },
      },
      {
        id: "201704",
        payment_method: "ON_DELIVERY",
        shipping_address: null,
        status: "PENDING",
        price: 100,
        customer: {
          id: "2",
          first_name: "Timóteo",
          last_name: "Stifft",
          email: "timoteo.stifft@example.com",
          phone: "11999999992",
        },
        items: {
          agribusiness: [
            {
              id: "1",
              name: "Agropecuária do João",
              caf: "123456",
              products: [
                {
                  id: "1",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cebola roxa",
                },
                {
                  id: "2",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Alface crespa",
                },
                {
                  id: "3",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Pimentão vermelho",
                },
                {
                  id: "4",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cenoura",
                },
                {
                  id: "5",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Couve",
                },
              ],
            },
            {
              id: "2",
              name: "Agropecuária da Maria",
              caf: "654321",
              products: [
                {
                  id: "6",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Feijão",
                },
                {
                  id: "7",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Arroz",
                },
                {
                  id: "8",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Milho",
                },
                {
                  id: "9",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Soja",
                },
                {
                  id: "10",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Trigo",
                },
              ],
            },
          ],
        },
      },
      {
        id: "546711",
        payment_method: "ON_DELIVERY",
        shipping_address: null,
        status: "PENDING",
        price: 100,
        customer: {
          id: "3",
          first_name: "Luís",
          last_name: "Suárez",
          email: "luis.suarez@example.com",
          phone: "11999999993",
        },
        items: {
          agribusiness: [
            {
              id: "1",
              name: "Agropecuária do João",
              caf: "123456",
              products: [
                {
                  id: "1",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cebola roxa",
                },
                {
                  id: "2",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Alface crespa",
                },
                {
                  id: "3",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Pimentão vermelho",
                },
                {
                  id: "4",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cenoura",
                },
                {
                  id: "5",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Couve",
                },
              ],
            },
            {
              id: "2",
              name: "Agropecuária da Maria",
              caf: "654321",
              products: [
                {
                  id: "6",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Feijão",
                },
                {
                  id: "7",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Arroz",
                },
                {
                  id: "8",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Milho",
                },
                {
                  id: "9",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Soja",
                },
                {
                  id: "10",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Trigo",
                },
              ],
            },
          ],
        },
      },
      {
        id: "533711",
        payment_method: "ON_DELIVERY",
        shipping_address: null,
        status: "READY",
        price: 100,
        customer: {
          id: "4",
          first_name: "Andressa",
          last_name: "Lima",
          email: "andressa.lima@example.com",
          phone: "11999999994",
        },
        items: {
          agribusiness: [
            {
              id: "1",
              name: "Agropecuária do João",
              caf: "123456",
              products: [
                {
                  id: "1",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cebola roxa",
                },

                {
                  id: "2",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Alface crespa",
                },
                {
                  id: "3",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Pimentão vermelho",
                },
                {
                  id: "4",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cenoura",
                },
                {
                  id: "5",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Couve",
                },
              ],
            },
            {
              id: "2",
              name: "Agropecuária da Maria",
              caf: "654321",
              products: [
                {
                  id: "6",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Feijão",
                },
                {
                  id: "7",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Arroz",
                },
                {
                  id: "8",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Milho",
                },
                {
                  id: "9",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Soja",
                },
                {
                  id: "10",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Trigo",
                },
              ],
            },
          ],
        },
      },
      {
        id: "987654",
        payment_method: "ON_DELIVERY",
        shipping_address: null,
        status: "DISPATCHED",
        price: 100,
        customer: {
          id: "5",
          first_name: "Cristiano",
          last_name: "Ronaldo",
          email: "cristiano.ronaldo@example.com",
          phone: "11999999995",
        },
        items: {
          agribusiness: [
            {
              id: "1",
              name: "Agropecuária do João",
              caf: "123456",
              products: [
                {
                  id: "1",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cebola roxa",
                },
                {
                  id: "2",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Alface crespa",
                },
                {
                  id: "3",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Pimentão vermelho",
                },
                {
                  id: "4",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cenoura",
                },
                {
                  id: "5",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Couve",
                },
              ],
            },
            {
              id: "2",
              name: "Agropecuária da Maria",
              caf: "654321",
              products: [
                {
                  id: "6",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Feijão",
                },
                {
                  id: "7",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Arroz",
                },
                {
                  id: "8",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Milho",
                },
                {
                  id: "9",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Soja",
                },
                {
                  id: "10",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Trigo",
                },
              ],
            },
          ],
        },
      },
      {
        id: "546951",
        payment_method: "ON_DELIVERY",
        shipping_address: null,
        status: "DISPATCHED",
        price: 100,
        customer: {
          id: "6",
          first_name: "Maria",
          last_name: "Souza",
          email: "maria.souza@example.com",
          phone: "11999999996",
        },
        items: {
          agribusiness: [
            {
              id: "1",
              name: "Agropecuária do João",
              caf: "123456",
              products: [
                {
                  id: "1",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cebola roxa",
                },
                {
                  id: "2",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Alface crespa",
                },
                {
                  id: "3",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Pimentão vermelho",
                },
                {
                  id: "4",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cenoura",
                },
                {
                  id: "5",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Couve",
                },
              ],
            },
            {
              id: "2",
              name: "Agropecuária da Maria",
              caf: "654321",
              products: [
                {
                  id: "6",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Feijão",
                },
                {
                  id: "7",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Arroz",
                },
                {
                  id: "8",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Milho",
                },
                {
                  id: "9",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Soja",
                },
                {
                  id: "10",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Trigo",
                },
              ],
            },
          ],
        },
      },
      {
        id: "123456",
        payment_method: "ON_DELIVERY",
        shipping_address: null,
        status: "DISPATCHED",
        price: 100,
        customer: {
          id: "7",
          first_name: "Lionel",
          last_name: "Messi",
          email: "lionel.messi@example.com",
          phone: "11999999997",
        },
        items: {
          agribusiness: [
            {
              id: "1",
              name: "Agropecuária do João",
              caf: "123456",
              products: [
                {
                  id: "1",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cebola roxa",
                },
                {
                  id: "2",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Alface crespa",
                },
                {
                  id: "3",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Pimentão vermelho",
                },
                {
                  id: "4",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cenoura",
                },
                {
                  id: "5",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Couve",
                },
              ],
            },
            {
              id: "2",
              name: "Agropecuária da Maria",
              caf: "654321",
              products: [
                {
                  id: "6",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Feijão",
                },
                {
                  id: "7",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Arroz",
                },
                {
                  id: "8",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Milho",
                },
                {
                  id: "9",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Soja",
                },
                {
                  id: "10",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Trigo",
                },
              ],
            },
          ],
        },
      },
      {
        id: "546733",
        payment_method: "ON_DELIVERY",
        shipping_address: null,
        status: "DISPATCHED",
        price: 100,
        customer: {
          id: "8",
          first_name: "Sérgio",
          last_name: "Ramos",
          email: "sergio.ramos@example.com",
          phone: "11999999998",
        },
        items: {
          agribusiness: [
            {
              id: "1",
              name: "Agropecuária do João",
              caf: "123456",
              products: [
                {
                  id: "1",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cebola roxa",
                },
                {
                  id: "2",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Alface crespa",
                },
                {
                  id: "3",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Pimentão vermelho",
                },
                {
                  id: "4",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cenoura",
                },
                {
                  id: "5",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Couve",
                },
              ],
            },
            {
              id: "2",
              name: "Agropecuária da Maria",
              caf: "654321",
              products: [
                {
                  id: "6",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Feijão",
                },
                {
                  id: "7",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Arroz",
                },
                {
                  id: "8",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Milho",
                },
                {
                  id: "9",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Soja",
                },
                {
                  id: "10",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Trigo",
                },
              ],
            },
          ],
        },
      },
      {
        id: "555711",
        payment_method: "ON_DELIVERY",
        shipping_address: null,
        status: "READY",
        price: 100,
        customer: {
          id: "9",
          first_name: "João",
          last_name: "Silva",
          email: "joao.silva@example.com",
          phone: "11999999999",
        },
        items: {
          agribusiness: [
            {
              id: "1",
              name: "Agropecuária do João",
              caf: "123456",
              products: [
                {
                  id: "1",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cebola roxa",
                },
                {
                  id: "2",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Alface crespa",
                },
                {
                  id: "3",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Pimentão vermelho",
                },
                {
                  id: "4",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cenoura",
                },
                {
                  id: "5",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Couve",
                },
              ],
            },
            {
              id: "2",
              name: "Agropecuária da Maria",
              caf: "654321",
              products: [
                {
                  id: "6",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Feijão",
                },
                {
                  id: "7",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Arroz",
                },
                {
                  id: "8",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Milho",
                },
                {
                  id: "9",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Soja",
                },
                {
                  id: "10",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Trigo",
                },
              ],
            },
          ],
        },
      },
      {
        id: "546711",
        payment_method: "ON_DELIVERY",
        shipping_address: null,
        status: "READY",
        price: 100,
        customer: {
          id: "10",
          first_name: "José",
          last_name: "Santos",
          email: "jose.santos@example.com",
          phone: "11999999910",
        },
        items: {
          agribusiness: [
            {
              id: "1",
              name: "Agropecuária do João",
              caf: "123456",
              products: [
                {
                  id: "1",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cebola roxa",
                },
                {
                  id: "2",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Alface crespa",
                },
                {
                  id: "3",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Pimentão vermelho",
                },
                {
                  id: "4",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cenoura",
                },
                {
                  id: "5",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Couve",
                },
              ],
            },
            {
              id: "2",
              name: "Agropecuária da Maria",
              caf: "654321",
              products: [
                {
                  id: "6",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Feijão",
                },
                {
                  id: "7",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Arroz",
                },
                {
                  id: "8",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Milho",
                },
                {
                  id: "9",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Soja",
                },
                {
                  id: "10",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Trigo",
                },
              ],
            },
          ],
        },
      },
      {
        id: "546714",
        payment_method: "ON_DELIVERY",
        shipping_address: null,
        status: "READY",
        price: 100,
        customer: {
          id: "11",
          first_name: "Maria",
          last_name: "Silva",
          email: "maria.silva@example.com",
          phone: "11999999911",
        },
        items: {
          agribusiness: [
            {
              id: "1",
              name: "Agropecuária do João",
              caf: "123456",
              products: [
                {
                  id: "1",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cebola roxa",
                },
                {
                  id: "2",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Alface crespa",
                },
                {
                  id: "3",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Pimentão vermelho",
                },
                {
                  id: "4",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cenoura",
                },
                {
                  id: "5",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Couve",
                },
              ],
            },
            {
              id: "2",
              name: "Agropecuária da Maria",
              caf: "654321",
              products: [
                {
                  id: "6",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Feijão",
                },
                {
                  id: "7",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Arroz",
                },
                {
                  id: "8",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Milho",
                },
                {
                  id: "9",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Soja",
                },
                {
                  id: "10",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Trigo",
                },
              ],
            },
          ],
        },
      },
      {
        id: "305001",
        payment_method: "ON_DELIVERY",
        shipping_address: null,
        status: "PENDING",
        price: 120,
        customer: {
          id: "12",
          first_name: "Ana",
          last_name: "Pereira",
          email: "ana.pereira@example.com",
          phone: "11999999912",
        },
        items: {
          agribusiness: [
            {
              id: "1",
              name: "Agropecuária do João",
              caf: "123456",
              products: [
                {
                  id: "1",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cebola roxa",
                },
                {
                  id: "2",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Alface crespa",
                },
                {
                  id: "3",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Pimentão vermelho",
                },
                {
                  id: "4",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cenoura",
                },
                {
                  id: "5",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Couve",
                },
              ],
            },
            {
              id: "2",
              name: "Agropecuária da Maria",
              caf: "654321",
              products: [
                {
                  id: "6",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Feijão",
                },
                {
                  id: "7",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Arroz",
                },
                {
                  id: "8",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Milho",
                },
                {
                  id: "9",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Soja",
                },
                {
                  id: "10",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Trigo",
                },
              ],
            },
          ],
        },
      },
      {
        id: "307002",
        payment_method: "ON_DELIVERY",
        shipping_address: null,
        status: "PENDING",
        price: 150,
        customer: {
          id: "13",
          first_name: "Bruno",
          last_name: "Fernandes",
          email: "bruno.fernandes@example.com",
          phone: "11999999913",
        },
        items: {
          agribusiness: [
            {
              id: "1",
              name: "Agropecuária do João",
              caf: "123456",
              products: [
                {
                  id: "1",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cebola roxa",
                },
                {
                  id: "2",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Alface crespa",
                },
                {
                  id: "3",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Pimentão vermelho",
                },
                {
                  id: "4",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cenoura",
                },
                {
                  id: "5",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Couve",
                },
              ],
            },
            {
              id: "2",
              name: "Agropecuária da Maria",
              caf: "654321",
              products: [
                {
                  id: "6",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Feijão",
                },
                {
                  id: "7",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Arroz",
                },
                {
                  id: "8",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Milho",
                },
                {
                  id: "9",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Soja",
                },
                {
                  id: "10",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Trigo",
                },
              ],
            },
          ],
        },
      },
      {
        id: "308003",
        payment_method: "ON_DELIVERY",
        shipping_address: null,
        status: "PENDING",
        price: 90,
        customer: {
          id: "14",
          first_name: "Carla",
          last_name: "Mendes",
          email: "carla.mendes@example.com",
          phone: "11999999914",
        },
        items: {
          agribusiness: [
            {
              id: "1",
              name: "Agropecuária do João",
              caf: "123456",
              products: [
                {
                  id: "1",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cebola roxa",
                },
                {
                  id: "2",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Alface crespa",
                },
                {
                  id: "3",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Pimentão vermelho",
                },
                {
                  id: "4",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cenoura",
                },
                {
                  id: "5",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Couve",
                },
              ],
            },
            {
              id: "2",
              name: "Agropecuária da Maria",
              caf: "654321",
              products: [
                {
                  id: "6",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Feijão",
                },
                {
                  id: "7",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Arroz",
                },
                {
                  id: "8",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Milho",
                },
                {
                  id: "9",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Soja",
                },
                {
                  id: "10",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Trigo",
                },
              ],
            },
          ],
        },
      },
      {
        id: "309004",
        payment_method: "ON_DELIVERY",
        shipping_address: null,
        status: "DISPATCHED",
        price: 110,
        customer: {
          id: "15",
          first_name: "Daniel",
          last_name: "Oliveira",
          email: "daniel.oliveira@example.com",
          phone: "11999999915",
        },
        items: {
          agribusiness: [
            {
              id: "1",
              name: "Agropecuária do João",
              caf: "123456",
              products: [
                {
                  id: "1",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cebola roxa",
                },
                {
                  id: "2",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Alface crespa",
                },
                {
                  id: "3",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Pimentão vermelho",
                },
                {
                  id: "4",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cenoura",
                },
                {
                  id: "5",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Couve",
                },
              ],
            },
            {
              id: "2",
              name: "Agropecuária da Maria",
              caf: "654321",
              products: [
                {
                  id: "6",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Feijão",
                },
                {
                  id: "7",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Arroz",
                },
                {
                  id: "8",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Milho",
                },
                {
                  id: "9",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Soja",
                },
                {
                  id: "10",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Trigo",
                },
              ],
            },
          ],
        },
      },
      {
        id: "310005",
        payment_method: "ON_DELIVERY",
        shipping_address: null,
        status: "DISPATCHED",
        price: 130,
        customer: {
          id: "16",
          first_name: "Eduardo",
          last_name: "Silva",
          email: "eduardo.silva@example.com",
          phone: "11999999916",
        },
        items: {
          agribusiness: [
            {
              id: "1",
              name: "Agropecuária do João",
              caf: "123456",
              products: [
                {
                  id: "1",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cebola roxa",
                },
                {
                  id: "2",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Alface crespa",
                },
                {
                  id: "3",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Pimentão vermelho",
                },
                {
                  id: "4",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cenoura",
                },
                {
                  id: "5",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Couve",
                },
              ],
            },
            {
              id: "2",
              name: "Agropecuária da Maria",
              caf: "654321",
              products: [
                {
                  id: "6",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Feijão",
                },
                {
                  id: "7",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Arroz",
                },
                {
                  id: "8",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Milho",
                },
                {
                  id: "9",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Soja",
                },
                {
                  id: "10",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Trigo",
                },
              ],
            },
          ],
        },
      },
      {
        id: "311006",
        payment_method: "ON_DELIVERY",
        shipping_address: null,
        status: "DISPATCHED",
        price: 140,
        customer: {
          id: "17",
          first_name: "Fabiana",
          last_name: "Carvalho",
          email: "fabiana.carvalho@example.com",
          phone: "11999999917",
        },
        items: {
          agribusiness: [
            {
              id: "1",
              name: "Agropecuária do João",
              caf: "123456",
              products: [
                {
                  id: "1",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cebola roxa",
                },
                {
                  id: "2",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Alface crespa",
                },
                {
                  id: "3",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Pimentão vermelho",
                },
                {
                  id: "4",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cenoura",
                },
                {
                  id: "5",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Couve",
                },
              ],
            },
            {
              id: "2",
              name: "Agropecuária da Maria",
              caf: "654321",
              products: [
                {
                  id: "6",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Feijão",
                },
                {
                  id: "7",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Arroz",
                },
                {
                  id: "8",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Milho",
                },
                {
                  id: "9",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Soja",
                },
                {
                  id: "10",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Trigo",
                },
              ],
            },
          ],
        },
      },
      {
        id: "312007",
        payment_method: "ON_DELIVERY",
        shipping_address: null,
        status: "DISPATCHED",
        price: 160,
        customer: {
          id: "18",
          first_name: "Gabriel",
          last_name: "Souza",
          email: "gabriel.souza@example.com",
          phone: "11999999918",
        },
        items: {
          agribusiness: [
            {
              id: "1",
              name: "Agropecuária do João",
              caf: "123456",
              products: [
                {
                  id: "1",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cebola roxa",
                },
                {
                  id: "2",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Alface crespa",
                },
                {
                  id: "3",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Pimentão vermelho",
                },
                {
                  id: "4",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cenoura",
                },
                {
                  id: "5",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Couve",
                },
              ],
            },
            {
              id: "2",
              name: "Agropecuária da Maria",
              caf: "654321",
              products: [
                {
                  id: "6",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Feijão",
                },
                {
                  id: "7",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Arroz",
                },
                {
                  id: "8",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Milho",
                },
                {
                  id: "9",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Soja",
                },
                {
                  id: "10",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Trigo",
                },
              ],
            },
          ],
        },
      },
      {
        id: "313008",
        payment_method: "ON_DELIVERY",
        shipping_address: null,
        status: "READY",
        price: 170,
        customer: {
          id: "19",
          first_name: "Helena",
          last_name: "Costa",
          email: "helena.costa@example.com",
          phone: "11999999919",
        },
        items: {
          agribusiness: [
            {
              id: "1",
              name: "Agropecuária do João",
              caf: "123456",
              products: [
                {
                  id: "1",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cebola roxa",
                },
                {
                  id: "2",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Alface crespa",
                },
                {
                  id: "3",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Pimentão vermelho",
                },
                {
                  id: "4",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cenoura",
                },
                {
                  id: "5",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Couve",
                },
              ],
            },
            {
              id: "2",
              name: "Agropecuária da Maria",
              caf: "654321",
              products: [
                {
                  id: "6",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Feijão",
                },
                {
                  id: "7",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Arroz",
                },
                {
                  id: "8",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Milho",
                },
                {
                  id: "9",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Soja",
                },
                {
                  id: "10",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Trigo",
                },
              ],
            },
          ],
        },
      },
      {
        id: "314009",
        payment_method: "ON_DELIVERY",
        shipping_address: null,
        status: "READY",
        price: 180,
        customer: {
          id: "20",
          first_name: "Igor",
          last_name: "Gomes",
          email: "igor.gomes@example.com",
          phone: "11999999920",
        },
        items: {
          agribusiness: [
            {
              id: "1",
              name: "Agropecuária do João",
              caf: "123456",
              products: [
                {
                  id: "1",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cebola roxa",
                },
                {
                  id: "2",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Alface crespa",
                },
                {
                  id: "3",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Pimentão vermelho",
                },
                {
                  id: "4",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cenoura",
                },
                {
                  id: "5",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Couve",
                },
              ],
            },
            {
              id: "2",
              name: "Agropecuária da Maria",
              caf: "654321",
              products: [
                {
                  id: "6",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Feijão",
                },
                {
                  id: "7",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Arroz",
                },
                {
                  id: "8",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Milho",
                },
                {
                  id: "9",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Soja",
                },
                {
                  id: "10",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Trigo",
                },
              ],
            },
          ],
        },
      },
      {
        id: "315010",
        payment_method: "ON_DELIVERY",
        shipping_address: null,
        status: "READY",
        price: 190,
        customer: {
          id: "21",
          first_name: "Julia",
          last_name: "Lima",
          email: "julia.lima@example.com",
          phone: "11999999921",
        },
        items: {
          agribusiness: [
            {
              id: "1",
              name: "Agropecuária do João",
              caf: "123456",
              products: [
                {
                  id: "1",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cebola roxa",
                },
                {
                  id: "2",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Alface crespa",
                },
                {
                  id: "3",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Pimentão vermelho",
                },
                {
                  id: "4",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cenoura",
                },
                {
                  id: "5",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Couve",
                },
              ],
            },
            {
              id: "2",
              name: "Agropecuária da Maria",
              caf: "654321",
              products: [
                {
                  id: "6",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Feijão",
                },
                {
                  id: "7",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Arroz",
                },
                {
                  id: "8",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Milho",
                },
                {
                  id: "9",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Soja",
                },
                {
                  id: "10",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Trigo",
                },
              ],
            },
          ],
        },
      },
      {
        id: "316011",
        payment_method: "ON_DELIVERY",
        shipping_address: null,
        status: "READY",
        price: 200,
        customer: {
          id: "22",
          first_name: "Lucas",
          last_name: "Almeida",
          email: "lucas.almeida@example.com",
          phone: "11999999922",
        },
        items: {
          agribusiness: [
            {
              id: "1",
              name: "Agropecuária do João",
              caf: "123456",
              products: [
                {
                  id: "1",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cebola roxa",
                },
                {
                  id: "2",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Alface crespa",
                },
                {
                  id: "3",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Pimentão vermelho",
                },
                {
                  id: "4",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Cenoura",
                },
                {
                  id: "5",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Couve",
                },
              ],
            },
            {
              id: "2",
              name: "Agropecuária da Maria",
              caf: "654321",
              products: [
                {
                  id: "6",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Feijão",
                },
                {
                  id: "7",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Arroz",
                },
                {
                  id: "8",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Milho",
                },
                {
                  id: "9",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Soja",
                },
                {
                  id: "10",
                  image: "http://localhost:3000/images/product.jpg",
                  amount: 1,
                  description: "Trigo",
                },
              ],
            },
          ],
        },
      },
    ];

    const order = ordersStubbed.find((order) => order.id === order_id);
    return new SuccessReturn({ order });
  }

  const order = (await ecooAPIHTTPProvider.viewOrder(access_token, order_id))
    .data;

  return new SuccessReturn({ order });
};
