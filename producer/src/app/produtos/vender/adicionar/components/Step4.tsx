"use client";
import { OfferProducts } from "@producer/app/_actions/products/OfferProducts";
import Button from "@shared/components/Button";
import { LuChevronLeft } from "react-icons/lu";
import { toast } from "sonner";

interface FormProps {
  goNextClick: () => void;
  goBackClick: () => void;
}

interface offerProductData {
  id: string;
  name: string;
  quantity: string;
  weigth: string;
  price: string;
  cycle_id: string;
  describe: string;
}

export default function Step4({ goNextClick, goBackClick }: FormProps) {
  const savedOfferProductsDataString = localStorage.getItem(
    "offer-products-data"
  );
  const {
    id,
    name,
    quantity,
    weigth,
    price,
    cycle_id,
    describe,
  }: offerProductData = savedOfferProductsDataString
    ? JSON.parse(savedOfferProductsDataString)
    : null;

  const displayValue = quantity !== "" ? `${quantity} unidades` : `${weigth} g`;

  const onSubmitTest = async () => {
    const priceFormat = price.replace(/[^\d,.]/g, "");
    const priceNoFormat = parseFloat(priceFormat.replace(",", "."));

    const quantity_or_weight =
      quantity !== "" ? Number(quantity) : Number(weigth);

    const product = {
      id: id,
      amount: quantity_or_weight,
      price: priceNoFormat,
    };

    const result = await OfferProducts({ cycle_id, product });

    const message = result?.reply.message;

    if (message) {
      toast.error(message);
      return;
    } else {
      toast.success("Produto ofertado com sucesso.");
      goNextClick();
    }

    localStorage.removeItem('offer-product-step')
    localStorage.removeItem('offer-products-data')
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full h-1/4 flex flex-col justify-center">
        <span className="text-center font-medium text-3xl text-slate-gray">
          Revise as <br /> informações
        </span>
        <span className="text-center text-slate-gray text-sm mt-5 font-medium">
          Revise todas as informações antes de <br />
          colocar o seu produto a venda
        </span>
      </div>
      <div className="w-full h-[70%]">
        <div className="w-full h-full flex flex-col gap-3 mt-4 justify-between">
          <table className="bg-white w-full p-10 rounded-lg text-primary text-">
            <tbody>
              <tr>
                <td className="w-1/4 p-3">Produto: </td>
                <td className="w-3/4 p-3">{name}</td>
              </tr>
              <tr>
                <td className="w-1/4 p-3">
                  {quantity !== "" ? "Quantidade:" : "Peso:"}
                </td>
                <td className="w-3/4 p-3">{displayValue}</td>
              </tr>
              <tr>
                <td className="w-1/4 p-3">Preço:</td>
                <td className="w-3/4 p-3">{price} / kg</td>
              </tr>
              <tr>
                <td className="w-1/4 p-3">Descrição:</td>
                <td className="w-3/4 p-3">{describe}</td>
              </tr>
            </tbody>
          </table>
          <Button
              className="w-full px-2 py-3 font-semibold rounded-lg text-white border-0 p-2 bg-default"
              onClick={onSubmitTest}
            >
              Confirmar e colocar a venda
            </Button>
        </div>
          
      </div>
      <div className="w-full flex items-center h-[5%] mt-7">
        <LuChevronLeft className="w-[30px] h-[30px] text-default" />
        <Button
          className="flex items-center gap-2 text-sm font-medium text-[${bgColor}] w-auto"
          onClick={goBackClick}
        >
          Voltar
        </Button>
      </div>
    </div>
  );
}
