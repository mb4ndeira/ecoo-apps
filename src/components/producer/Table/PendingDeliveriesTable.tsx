import fakedata from "@/components/producer/Table/data/fakedata";

export function PendingDeliveriesTable() {
  const firstFourItems = fakedata.slice(0, 4);

  const rowStyle = {
    height: "42px",
  };

  return (
    <table className="text-[#545F71] mb-[30px]">
      <tbody>
        {firstFourItems.map((item: any, index: any) => (
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
