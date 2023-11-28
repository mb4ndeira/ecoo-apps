import React from "react";
import fakedata from "./data/fakedata";

interface PendingDeliveriesTableProps {
  numberOfItems: number;
}

export function PendingDeliveriesTable({
  numberOfItems,
}: PendingDeliveriesTableProps) {
  const itemsToShow = fakedata.slice(0, numberOfItems);

  const rowStyle = {
    height: "42px",
  };

  return (
    <table className="text-[#545F71] mb-[30px] font-inter">
      <tbody>
        {itemsToShow.map((item, index) => (
          <tr key={index} style={rowStyle} className="border-b">
            <td className="">{item.quantidade}</td>
            <td className="">{item.produto}</td>
            <td className="text-right">{item.dataVenda}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
