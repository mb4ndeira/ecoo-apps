"use client";
import { offerProduct } from "@producer/app/_actions/products/offer.product.action";
import Button from "@shared/components/Button";
import Cookies from 'js-cookie'
import { toast } from "sonner";

interface FormProps {
  goNextClick: () => void;
}

interface offerProductData {
  id: string
  nomeProduto: string
  variedade: string
  quantidade: string
  validade: string 
  preço: string   
}

export default function Step4({ goNextClick }: FormProps) {
  const savedOfferProductsDataString = localStorage.getItem('offer-products-data');
  const { id, nomeProduto, variedade, quantidade, validade, preço }: offerProductData = savedOfferProductsDataString ? JSON.parse(savedOfferProductsDataString) : null;

  const onSubmitTest = async () => {
    const priceFormat = preço.replace(/[^\d,.]/g, "");
    const price = (parseFloat(priceFormat.replace(",", ".")));

    const products = [
      {
        id: '006ad624-f61c-4e72-82f4-8e86c4bd4992',
        quantity_or_weight: Number(quantidade),
        price: price
      }
    ]

    const data = {
      products
    }

    const access_token = Cookies.get('access_token')

    if(access_token){
      const result = await offerProduct(data, access_token)

      const errorMessages = {
        [`Invalid weight offered for product ${variedade}.`]: 'Peso inválido para esse produto.',
        'This account is not an agribusiness administrator.': 'Essa conta não é administrador de u agronegócio.',
        [`Resource "${products[0].id}" was not found.`]: "Produto não encontrado.",
        '⚠️ Internal server error.': 'Erro interno do servidor.',
      };

      const message = result?.reply.message;

      if (message) {
        toast.error(errorMessages[message]);
        return;
      } else {
        toast.success("Produto cadastrado com sucesso.");
        goNextClick();
        return;
      }
    }
  }

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full h-[90%] flex flex-col items-center mt-12">
        <span className="text-center font-medium text-3xl text-slate-gray">
          Revise as <br /> informações
        </span>
        <span className="text-center text-slate-gray text-sm mt-5 font-medium">
          Revise todas as informações antes de <br />
          colocar o seu produto a venda
        </span>
        <div className="w-full h-full flex flex-col justify-between mt-5">
          <table className="bg-white w-full p-10 rounded-lg text-primary text-">
            <tbody>
              <tr>
                <td className="w-1/4 p-3">Produto: </td>
                <td className="w-3/4 p-3">{nomeProduto}</td>
              </tr>
              <tr>
                <td className="w-1/4 p-3">Variedade:</td>
                <td className="w-3/4 p-3">{variedade}</td>
              </tr>
              <tr>
                <td className="w-1/4 p-3">Quantidade:</td>
                <td className="w-3/4 p-3">{quantidade} / kg</td>
              </tr>
              <tr>
                <td className="w-1/4 p-3">Válido até:</td>
                <td className="w-3/4 p-3">{validade}</td>
              </tr>
              <tr>
                <td className="w-1/4 p-3">Preço:</td>
                <td className="w-3/4 p-3">{preço} / kg</td>
              </tr>
            </tbody>
          </table>

          <Button
            onClick={onSubmitTest}
            className="text-white border-0 p-2 bg-default"
            title="Confirmar e colocar a venda"
          />
        </div>
      </div>
    </div>
  );
}
