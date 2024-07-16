import { SuccessReturn, UseCaseHandler } from "@shared/core/UseCase";
import { ecooAPIHTTPProvider } from "@shared/interfaces/ecoo-api-http-provider";

export interface Order {
  id: string;
  payment_method: string;
  shipping_address: string | null;
  status: string;
  price: number;
  customer: {
    id: string;
    first_name: string;
    last_name: string;
  };
  items?: {};
}

type OrdersMap = {
  [key: number]: Order[];
};

const ordersStubbed: OrdersMap = {
  1: [
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
      },
    },
  ],
  2: [
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
      },
    },
  ],
};

function listOrdersStubbedFilteredByPageAndStatus(
  page: number,
  status: string
): Order[] {
  console.log(page, status, ordersStubbed[page])
  if (!ordersStubbed[page]) return [];
  return ordersStubbed[page].filter((order) => order.status === status);
}

export const listOrders: UseCaseHandler<
  { access_token: string; cycle_id: string; page: number; status: string },
  { orders: Order[] }
> = async ({ access_token, cycle_id, page, status }, stubbed) => {
  if (stubbed) {
    return new SuccessReturn({
      orders: listOrdersStubbedFilteredByPageAndStatus(page, status),
    });
  }

  const orders = (
    await ecooAPIHTTPProvider.listOrders(access_token, cycle_id, page, status)
  ).data;

  return new SuccessReturn({ orders: orders });
};
