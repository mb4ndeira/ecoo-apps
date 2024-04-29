export interface DeliveryBag {
  id_do_pedido: number;
  nome_do_cliente: string;
  conteudo: string[];
  forma_de_pagamento: string;
  valor_a_cobrar: number | string;
  cep: string;
  endereco: string;
  bairro: string;
}
