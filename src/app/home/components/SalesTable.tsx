export function SalesTable() {
  return (
    <div className="flex flex-col items-start max-w-[560px]">
      <h3 className=" text-base font-semibold ml-2 mb-2 sm-mobile:text-sm">
        Últimas vendas
      </h3>
      <div className="flex sm-mobile:w-[16rem] md-mobile:max-w-[20rem] max-w-[70rem]  sidebar-bp:max-w-[30rem] sm-table:max-w-[22rem] xs-table:max-w-[18rem] overflow-x-auto overflow-y-hidden ">
        <table className="bg-white text-primary text-left leading-7 font-inter table-fixed rounded-lg w-full h-fit">
          <thead>
            <tr>
              <th className="w-28 border-b border-primary p-2">ID da venda</th>
              <th className="w-24 border-b border-primary p-2">Valor</th>
              <th className="w-28 border-b border-primary p-2">Situação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-primary p-2 md-mobile:bg-primary md-mobile:text-white">
                4985278501
              </td>
              <td className="border-b border-primary p-2">R$ 30,45</td>
              <td className="border-b border-primary p-2">
                <button className="rounded-3xl bg-primary text-white text-sm h-9 w-24 font-semibold">
                  Pendente
                </button>
              </td>
            </tr>
            <tr className="border-none">
              <td className="p-2 md-mobile:bg-secondary md-mobile:text-primary">
                4985278501
              </td>
              <td className="p-2">R$ 30,45</td>
              <td className="p-2">
                <button className="rounded-3xl bg-secondary text-primary text-sm h-9 w-24 font-semibold">
                  Concluído
                </button>
              </td>
            </tr>
            <tr className="border-none">
              <td className="p-2 md-mobile:bg-secondary md-mobile:text-primary">
                4985278501
              </td>
              <td className="p-2">R$ 30,45</td>
              <td className="p-2">
                <button className="rounded-3xl bg-secondary text-primary text-sm h-9 w-24 font-semibold">
                  Concluído
                </button>
              </td>
            </tr>
            <tr className="border-none">
              <td className="p-2 md-mobile:bg-secondary md-mobile:text-primary">
                4985278501
              </td>
              <td className="p-2">R$ 30,45</td>
              <td className="p-2">
                <button className="rounded-3xl bg-secondary text-primary text-sm h-9 w-24 font-semibold">
                  Concluído
                </button>
              </td>
            </tr>
            <tr className="border-none">
              <td className="p-2 md-mobile:bg-secondary md-mobile:text-primary">
                4985278501
              </td>
              <td className="p-2">R$ 30,45</td>
              <td className="p-2">
                <button className="rounded-3xl bg-secondary text-primary text-sm h-9 w-24 font-semibold">
                  Concluído
                </button>
              </td>
            </tr>
            <tr className="border-none">
              <td className="p-2 md-mobile:bg-secondary md-mobile:text-primary">
                4985278501
              </td>
              <td className="p-2">R$ 30,45</td>
              <td className="p-2">
                <button className="rounded-3xl bg-secondary text-primary text-sm h-9 w-24 font-semibold">
                  Concluído
                </button>
              </td>
            </tr>
            <tr className="border-none">
              <td className="p-2 md-mobile:bg-secondary md-mobile:text-primary">
                4985278501
              </td>
              <td className="p-2">R$ 30,45</td>
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
