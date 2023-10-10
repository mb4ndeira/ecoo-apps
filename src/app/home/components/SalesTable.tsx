import UniversalTable from "@/components/Table/UniversalTable";
import fakeData from "@/components/Table/data/fakedata";
import { PureComponent } from "react";

export class SalesTable extends PureComponent {
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
      <div className="flex flex-col items-start max-w-[560px]">
        <h3 className=" text-base font-semibold ml-2 mb-2 sm-mobile:text-sm">
          Últimas vendas
        </h3>
        <div className="flex sm-mobile:w-[16rem] md-mobile:max-w-[20rem] max-w-[70rem]  sidebar-bp:max-w-[30rem] sm-table:max-w-[22rem] xs-table:max-w-[18rem] overflow-x-auto overflow-y-hidden ">
          <UniversalTable data={dataToDisplay} compactTable={true} />
        </div>
      </div>
    );
  }
}
