"use client";
import { Table } from "@shared/components/NewTable";
import { Order } from "@shared/domain/use-cases/list-orders";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import DownloadButton from "@shared/components/DownloadButton";
import { LuDownload } from "react-icons/lu";

type Status = "READY" | "PENDING" | "DISPATCHED" | "CANCELED" | "PAID";
type StatusDict = Partial<Record<Status, string>>;

interface StatusConfig {
  buttonRoute: string;
  translation: StatusDict;
  classNames: StatusDict;
}

interface ListOrdersTableProps {
  orders: Order[];
  statusConfig: StatusConfig;
}

export default function ListOrdersTable({
  orders,
  statusConfig,
}: ListOrdersTableProps) {
  const [itemsPerPage, setItemsPerPage] = useState<number>(9); // Default value
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredOrders, setFilteredOrders] = useState<Order[]>(orders);
  const tableContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const calculateItemsPerPage = () => {
      if (!tableContainerRef) return;
      if (!tableContainerRef.current) return;
      const containerHeight: number = tableContainerRef.current.clientHeight;
      let subtract: number = 0;
      const tableRow = tableContainerRef.current.querySelector("tbody tr");
      if (tableRow) {
        subtract += tableRow.clientHeight * 2;
      } else {
        return;
      }
      const tableHead = tableContainerRef.current.querySelector("thead");
      if (tableHead) subtract += tableHead.clientHeight;

      const calculatedItemsPerPage = Math.floor(
        (containerHeight - subtract) / tableRow.clientHeight
      );

      if (calculatedItemsPerPage < 1) {
        setItemsPerPage(1);
        return;
      }
      setItemsPerPage(calculatedItemsPerPage);
    };

    calculateItemsPerPage();
    window.addEventListener("resize", calculateItemsPerPage);

    return () => {
      window.removeEventListener("resize", calculateItemsPerPage);
    };
  }, []);

  useEffect(() => {
    setFilteredOrders(
      orders.filter((order) =>
        `${order.id} ${order.customer.first_name} ${order.customer.last_name}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, orders]);

  const router = useRouter();

  const handleClick = (id: number) => {
    const n = id.toString();
    const path = `${statusConfig.buttonRoute}/${n}`;
    router.push(path);
  };

  return (
    <div className="h-[100%] overflow-y-hidden">
      <div className="w-full flex items-end pb-2.5 justify-end h-20 align-middle gap-x-1.5">
        <div className="relative h-12 w-full ">
          <input
            type="text"
            placeholder=""
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-[#D1D1D6] rounded-md h-12 p-4 pr-10 text-base font-inter w-full"
          />
          <HiOutlineSearch
            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500"
            size={24}
          />
        </div>
        <DownloadButton
          className="bg-walnut-brown text-white font-semibold rounded-md h-12 w-[3.7rem] flex justify-center items-center"
          children={<LuDownload size={24} />}
        />
      </div>
      <div
        ref={tableContainerRef}
        className="w-full overflow-y-hidden h-[calc(100%-5rem+2.75rem)]"
      >
        <Table.Root
          data={filteredOrders}
          paginate={true}
          itemsPerPage={itemsPerPage}
          className="h-[inherit] overflow-y-auto mt-2"
        >
          {(currentItems) => (
            <>
              <Table.Head>
                <Table.Row className="min-h-0 h-7">
                  <Table.HeaderCell className="col-span-5">
                    Pedido
                  </Table.HeaderCell>
                  <Table.HeaderCell className="col-span-8">
                    Cliente
                  </Table.HeaderCell>
                  <Table.HeaderCell className="col-span-7">
                    Status
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Head>
              <Table.Body>
                {currentItems.map((order, index) => (
                  <Table.Row className="" key={index}>
                    <Table.Cell className="col-span-5 justify-end pr-2.5">
                      {order.id}
                    </Table.Cell>
                    <Table.Cell className="justify-start col-span-8 pl-2.5">
                      {order.customer.first_name} {order.customer.last_name}
                    </Table.Cell>
                    <Table.Cell className="col-span-7 w-full flex justify-center items-center p-0">
                      <button
                        onClick={() => {
                          handleClick(order.id);
                        }}
                        className={`rounded-full px-3 py-2 font-semibold w-20 h-[2.1875rem] flex justify-center items-center
                              ${
                                statusConfig.classNames[
                                  order.status as keyof StatusDict
                                ] as string
                              }
                            `}
                      >
                        <span className="text-sm">
                          {
                            statusConfig.translation[
                              order.status as keyof StatusDict
                            ] as string
                          }
                        </span>
                      </button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </>
          )}
        </Table.Root>
      </div>
    </div>
  );
}
