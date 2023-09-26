"use client";
import React, { PureComponent } from "react";

export class LastSalesTable extends PureComponent {
  render() {
    return (
      <div className="w-full ml-auto h-full mobile:mx-4">
        <h3 className="text-base font-semibold ml-2 mb-2 sm-mobile:text-sm">
          Últimas vendas
        </h3>
        <div className="flex sm-mobile:w-[15rem] max-w-[70rem] sidebar-bp:max-w-[25rem] sm-table:max-w-[25rem] xs-table:max-w-[20rem]  h-[29rem] overflow-x-auto overflow-y-hidden ">
          <table className=" bg-white text-primary text-left leading-7 font-inter w-full table-fixed rounded-lg">
            <thead>
              <tr>
                <th className="w-28 border-b border-primary p-2">
                  ID da venda
                </th>
                <th className="w-24 border-b border-primary p-2">Valor</th>
                <th className="w-36 border-b border-primary p-2">
                  Data da venda
                </th>
                <th className="w-28 border-b border-primary p-2">Situação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-primary p-2">4985278501</td>
                <td className="border-b border-primary p-2">R$ 30,45</td>
                <td className="border-b border-primary p-2">15/08/2023</td>
                <td className="border-b border-primary p-2">
                  <button className="rounded-3xl bg-primary text-white text-sm h-9 w-24 font-semibold">
                    Pendente
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border-b border-primary p-2">4985278501</td>
                <td className="border-b border-primary p-2">R$ 30,45</td>
                <td className="border-b border-primary p-2">15/08/2023</td>
                <td className="border-b border-primary p-2">
                  <button className="rounded-3xl bg-primary text-white text-sm h-9 w-24 font-semibold">
                    Pendente
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border-b border-primary p-2">4985278501</td>
                <td className="border-b border-primary p-2">R$ 30,45</td>
                <td className="border-b border-primary p-2">15/08/2023</td>
                <td className="border-b border-primary p-2">
                  <button className="rounded-3xl bg-primary text-white text-sm h-9 w-24 font-semibold">
                    Pendente
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border-b border-primary p-2">4985278501</td>
                <td className="border-b border-primary p-2">R$ 30,45</td>
                <td className="border-b border-primary p-2">15/08/2023</td>
                <td className="border-b border-primary p-2">
                  <button className="rounded-3xl bg-primary text-white text-sm h-9 w-24 font-semibold">
                    Pendente
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border-b border-primary p-2">4985278501</td>
                <td className="border-b border-primary p-2">R$ 30,45</td>
                <td className="border-b border-primary p-2">15/08/2023</td>
                <td className="border-b border-primary p-2">
                  <button className="rounded-3xl bg-secondary text-primary text-sm h-9 w-24 font-semibold">
                    Concluído
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border-b border-primary p-2">4985278501</td>
                <td className="border-b border-primary p-2">R$ 30,45</td>
                <td className="border-b border-primary p-2">15/08/2023</td>
                <td className="border-b border-primary p-2">
                  <button className="rounded-3xl bg-secondary text-primary text-sm h-9 w-24 font-semibold">
                    Concluído
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border-b border-primary p-2">4985278501</td>
                <td className="border-b border-primary p-2">R$ 30,45</td>
                <td className="border-b border-primary p-2">15/08/2023</td>
                <td className="border-b border-primary p-2">
                  <button className="rounded-3xl bg-secondary text-primary text-sm h-9 w-24 font-semibold">
                    Concluído
                  </button>
                </td>
              </tr>
              <tr className="border-none">
                <td className="p-2">4985278501</td>
                <td className="p-2">R$ 30,45</td>
                <td className="p-2">15/08/2023</td>
                <td className="p-2">
                  <button className="rounded-3xl bg-secondary text-primary text-sm h-9 w-24 font-semibold">
                    Concluído
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default LastSalesTable;
