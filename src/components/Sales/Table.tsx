"use client";
import { PureComponent } from "react";
import { HiOutlinePencil, HiOutlineFilter } from "react-icons/hi";
import fakeData from "../Table/data/fakedata";
import Pagination from "./components/Pagination";
import TableData from "../Table/UniversalTable";
export class Table extends PureComponent {
  state = {
    currentPage: 1,
    maxRows: 8,
  };

  handlePageChange = (pageNumber: number) => {
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
          <TableData data={dataToDisplay} compactTable={false} />
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
