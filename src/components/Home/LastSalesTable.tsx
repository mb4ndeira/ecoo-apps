"use client";
import React, { PureComponent } from "react";

export class LastSalesTable extends PureComponent {
  render() {
    return (
      <div className="w-full ml-auto h-full">
        <h3 className="text-base font-semibold ml-2 mb-2 mobile:text-sm">
          Últimas vendas
        </h3>
        <div className="h-auto flex ">
          <div className="w-[70rem] h-[30rem] overflow-x-auto ">
            <table className="bg-white text-primary text-left leading-7 font-inter w-full table-fixed rounded-lg">
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
      </div>
    );
  }
}

export default LastSalesTable;
