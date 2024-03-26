export default function Table(){
  return(
    <table className="w-full bg-white rounded-lg leading-7 text-primary text-inter">
      <tbody className="">
        <tr className="flex justify-between border-b">
          <th className="p-3 font-normal text-left
          flex w-1/2">Ofertas de produtos: </th>
          <th className="p-3 text-rain-forest font-bold flex w-1/2">Sexta a Domingo</th>
        </tr>
        <tr className="flex border-b">
          <th className="p-3 font-normal text-left
          flex w-1/2">Comercialização dos produtos: </th>
          <th className="p-3 text-rain-forest font-bold flex w-1/2">Segunda a Quarta</th>
        </tr>
        <tr className="flex border-b">
          <th className="p-3 font-normal text-left
          flex w-1/2">Levar ao CDD: </th>
          <th className="p-3 text-rain-forest font-bold flex w-1/2">Quinta-feira</th>
        </tr>
        <tr className="flex border-b">
          <th className="p-3 font-normal text-left
          flex w-1/2">Pagamento pelos Consumidores: </th>
          <th className="p-3 text-rain-forest font-bold flex w-1/2">Quinta-feira</th>
        </tr>
        <tr className="flex border-b">
          <th className="p-3 font-normal text-left
          flex w-1/2">Oferta do dia: </th>
          <th className="p-3 text-rain-forest font-bold flex w-1/2">Quinta-feira</th>
        </tr>
        {/* <tr className="flex border-b">
          <th className="p-3 font-normal text-left
          flex w-1/2">Manutenção: </th>
          <th className="p-3 text-rain-forest font-bold flex w-1/2">21/03 (quinta-feira) </th>
        </tr> */}
        {/* <tr className="flex border-b">
          <th className="p-3 font-normal text-left
          flex w-1/2">Próximo feriado: </th>
          <th className="p-3 text-rain-forest font-bold flex w-1/2">29/03 (sexta-feira) </th>
        </tr> */}
      </tbody>
    </table>
  )
}