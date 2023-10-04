"use client";
import { PureComponent } from "react";
import { HiOutlinePencil, HiOutlineFilter } from "react-icons/hi";
import fakeData from "./data/fakedata";

export class Table extends PureComponent {
  render() {
    const maxRows = 8;
    const dataToDisplay = fakeData.slice(0, maxRows);

    return (
      <div>
        <div className="relative ml-auto flex items-center">
          <input
            className="border border-primary rounded-md h-12 p-4 pr-10 text-base ml-auto -mb-4 inter-font w-80"
            type="text"
            placeholder="Procurar"
          />
          <div className="absolute right-3 top-3">
            <HiOutlineFilter className="text-primary text-2xl" />
          </div>
        </div>
        <div className="flex flex-row ">
          <span className="text-base font-semibold mb-2 ">Últimas vendas</span>
        </div>
        <div className="flex">
          <table className="bg-white text-primary text-left leading-7 inter-font w-full table-fixed rounded-lg">
            <thead>
              <tr>
                <th className="border-b border-primary p-2">ID da venda</th>
                <th className="border-b border-primary p-2">Valor</th>
                <th className="border-b border-primary p-2">Data da venda</th>
                <th className="w-96 border-b border-primary p-2">Descrição</th>
                <th className="border-b border-primary p-2">Situação</th>
              </tr>
            </thead>
            <tbody>
              {dataToDisplay.map((item, index) => (
                <tr
                  key={item.id}
                  className={`${
                    index === dataToDisplay.length - 1
                      ? "border-t-0 border-b-0"
                      : "border-b border-primary"
                  }`}
                >
                  <td className="p-2">{item.id}</td>
                  <td className="p-2">{item.valor}</td>
                  <td className="p-2">{item.dataVenda}</td>
                  <td className="p-2">
                    {item.descricao.length > 40
                      ? `${item.descricao.substring(0, 40)}...`
                      : item.descricao}
                  </td>
                  <td className="p-2 flex items-center">
                    <button
                      className={`rounded-3xl ${
                        item.situacao === "Pendente"
                          ? "bg-primary text-white"
                          : "bg-secondary text-primary"
                      } text-sm h-9 w-24 font-semibold`}
                    >
                      {item.situacao}
                    </button>
                    <button className="ml-auto mr-2  text-xl">
                      <HiOutlinePencil />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Table;
