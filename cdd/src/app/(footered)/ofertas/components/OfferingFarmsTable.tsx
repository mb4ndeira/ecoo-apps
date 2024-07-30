"use client";
import { FarmDTO } from "@shared/domain/dtos/farm-dto";
import { Table } from "@shared/components/NewTable";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import DownloadButton from "@shared/components/DownloadButton";
import { LuDownload } from "react-icons/lu";

export default function OfferingFarmsTable({
  offeringFarms,
}: {
  offeringFarms: FarmDTO[];
}) {
  const router = useRouter();
  const [itemsPerPage, setItemsPerPage] = useState<number>(9);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [filteredOfferingFarms, setFilteredOfferingFarms] =
    useState<FarmDTO[]>(offeringFarms);
  const tableContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setFilteredOfferingFarms(
      offeringFarms.filter((farm) =>
        `${farm.id} ${farm.name}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, offeringFarms]);

  return (
    <div className="h-[inherit] overflow-y-hidden">
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
          data={filteredOfferingFarms}
          paginate={true}
          itemsPerPage={itemsPerPage}
          className="h-[inherit] overflow-y-auto mt-2"
        >
          {(currentItems) => (
            <>
              <Table.Head>
                <Table.Row className="min-h-0 h-7">
                  <Table.HeaderCell className="col-span-5">
                    ID
                  </Table.HeaderCell>
                  <Table.HeaderCell className="col-span-8">
                    Agrofamília
                  </Table.HeaderCell>
                  <Table.HeaderCell className="col-span-7">
                    Verificar
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Head>
              <Table.Body>
                {currentItems.map((offeringFarm: FarmDTO, index) => (
                  <Table.Row className="" key={index}>
                    <Table.Cell className="col-span-5 justify-middle">
                      {offeringFarm.id}
                    </Table.Cell>
                    <Table.Cell className="justify-start col-span-8 pl-8">
                      {offeringFarm.name}
                    </Table.Cell>
                    <Table.Cell className="col-span-7 w-full flex justify-center items-center p-0">
                      <button
                        onClick={() => {
                          router.push(`/ofertas/${offeringFarm.id.toString()}`);
                        }}
                        className={`bg-walnut-brown text-white rounded-full px-3 py-2 font-semibold w-20 h-[2.1875rem] flex justify-center items-center`}
                      >
                        Ver
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
