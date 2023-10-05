"use client";
import { PureComponent } from "react";
import { HiOutlinePencil, HiOutlineFilter } from "react-icons/hi";
import fakeData from "./data/fakedata";
import Pagination from "./components/Pagination";
export class Table extends PureComponent {
  state = {
    currentPage: 1,
    maxRows: 8,
  };

  handlePageChange = (pageNumber: number) => {
    console.log("Página atual:", pageNumber);
    this.setState({ currentPage: pageNumber });
  };
  render() {
    const { currentPage, maxRows } = this.state;
    const dataToDisplay = fakeData.slice(
      (currentPage - 1) * maxRows,
      currentPage * maxRows
    );
    const totalPages = Math.ceil(fakeData.length / maxRows);

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
        <div className="mt-5 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}
export default Table;
