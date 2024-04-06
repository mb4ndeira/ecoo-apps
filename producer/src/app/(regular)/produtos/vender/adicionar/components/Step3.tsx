"use client";
import { OfferProducts } from "@producer/app/_actions/products/OfferProducts";
import Button from "@shared/components/Button";
import { LuChevronLeft } from "react-icons/lu";
import { toast } from "sonner";

interface FormProps {
  goNextClick: () => void;
  goBackClick: () => void
}

interface offerProductData {
  id: string
  name: string
  quantity: string
  weigth: string
  price: string   
  cycle_id: string
}

export default function Step4({ goNextClick, goBackClick }: FormProps) {
  const savedOfferProductsDataString = localStorage.getItem('offer-products-data');
  const { id, name, quantity, weigth, price, cycle_id }: offerProductData = savedOfferProductsDataString ? JSON.parse(savedOfferProductsDataString) : null;

  const displayValue = quantity !== "" ? quantity : weigth;

  const onSubmitTest = async () => {
    const priceFormat = price.replace(/[^\d,.]/g, "");
    const priceNoFormat = (parseFloat(priceFormat.replace(",", ".")));

    const quantity_or_weight = quantity !== "" ? Number(quantity) : Number(weigth);

    const product = {
      id: id,
      amount: quantity_or_weight,
      price: priceNoFormat
    }

    const result = await OfferProducts({ cycle_id, product })

    const message = result?.reply.message

    if(message){
      toast.error(message)
      return
    } else {
      toast.success("Produto ofertado com sucesso.")
      goNextClick()
      return
    }
  }

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full h-1/5 flex flex-col items-center mt-12">
        <span className="text-center font-medium text-3xl text-slate-gray">
          Revise as <br /> informações
        </span>
        <span className="text-center text-slate-gray text-sm mt-5 font-medium">
          Revise todas as informações antes de <br />
          colocar o seu produto a venda
        </span>
      </div>
      <div className="w-full h-3/5 flex flex-col mt-5">
        <table className="bg-white w-full p-10 rounded-lg text-primary text-">
          <tbody>
            <tr>
              <td className="w-1/4 p-3">Produto: </td>
              <td className="w-3/4 p-3">{name}</td>
            </tr>
            <tr>
              <td className="w-1/4 p-3">{quantity !== "" ? "Quantidade:" : "Peso:"}</td>
              <td className="w-3/4 p-3">{displayValue} {quantity !== "" ? "kg" : "g"}</td>
            </tr>
            <tr>
              <td className="w-1/4 p-3">Preço:</td>
              <td className="w-3/4 p-3">{price} / kg</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full mt-2 h-1/5 flex flex-col justify-end">
        <Button
          onClick={onSubmitTest}
          className="text-white border-0 p-2 bg-default mt-10"
          title="Confirmar e colocar a venda"
        />
        <div className="flex items-center mt-2">
          <LuChevronLeft className="w-[30px] h-[30px] text-default" />
            <Button
              title="Voltar"
              className="flex items-center gap-2 text-sm font-medium text-default w-auto"
              onClick={goBackClick}
            />
        </div>
      </div>
    </div>
  );
}
