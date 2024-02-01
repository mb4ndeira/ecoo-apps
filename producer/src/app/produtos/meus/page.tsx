"use client";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Link from "next/link";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosHelp } from "react-icons/io";
import { LuChevronLeft, LuPencil } from "react-icons/lu";
import { useAutoAnimate } from '@formkit/auto-animate/react'

interface ProductProps{
  id: number,
  productName: string,
  quantidade: number
}

const FakeData: ProductProps[] = [
  {
    id: 384979,
    productName: 'Batata Branca',
    quantidade: 20
  }, 
  {
    id: 384942,
    productName: 'Maça Vermelha',
    quantidade: 40
  }, 
  {
    id: 983979,
    productName: 'Ovomaltine',
    quantidade: 10
  }, 
  {
    id: 380979,
    productName: 'Trigo Asiático',
    quantidade: 100
  }, 
  {
    id: 323079,
    productName: 'Alface',
    quantidade: 30
  }, 
]

export default function Meus(){
  const [products, setProducts] = useState<ProductProps[]>(FakeData)
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(null)  
  const [animationParent] = useAutoAnimate()

  const openModal = (product: ProductProps) => {
    setSelectedProduct(product)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const handleDeleteClickProduct = () => {
    if(selectedProduct){
      const newProductsData = products?.filter((product) => product.id !== selectedProduct.id)
      setProducts(newProductsData)
      setIsOpen(false)
    } else {
      console.log("Esse produto não existe!")
    }
  }

  return(
    <div className="w-full h-screen flex flex-col items-center p-5 bg-background">
      <div className="flex flex-col items-center h-1/4 justify-center mt-2 w-full space-y-5">
        <h1 className="text-3xl text-slate-gray font-medium">Meus produtos</h1>
        <span className="text-center text-slate-gray text-sm font-medium">
          Lista dos seus produtos que estão a <br />
          venda pela cooperativa
        </span>
      </div>
      <div className="w-full h-3/4 flex flex-col justify-between">
        <div>
          {products && products.length > 0 ? (
            <table className="bg-white w-full p-10 rounded-lg text-primary">
              <tbody ref={animationParent}>
                {products.map((product, index) => (
                  <tr key={product.id}>
                    <td className="p-3.5 w-1/5">{product.quantidade}kg</td>
                    <td className="p-3.5 w-3/5">{product.productName}</td>
                    <td className="p-3.5 w-[10%]">
                      <LuPencil size={20} />
                    </td>
                    <td
                      className="p-3.5 w-[10%] hover:text-[#FF7070] delay-200 
                      transition-colors"
                    >
                      <Modal  
                        isOpen={isOpen}
                        onOpen={() => openModal(product)}
                        onClose={closeModal}
                        title="Você tem certeza?"
                        description="Se você remover este produto ele não estará à venda pela cooperativa."
                        openButton={<FaRegTrashAlt size={18} />}
                        textButton1="Cancelar"
                        textButton2="Remover"
                        classNameButton1="bg-[#EEF1F4] text-[#455154]"
                        classNameButton2="bg-[#FF7070] text-white"
                        onClickButton={() => handleDeleteClickProduct()}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-slate-gray font-medium mt-4 p-2 bg-white rounded-lg">
              Não há nenhum produto registrado!
            </p>
          )}
        </div>
        <div className="w-full h-full flex justify-between items-end">
          <div className="w-full flex items-center">
            <LuChevronLeft className="w-[30px] h-[30px] text-[#3E5155]" />
            <Link href={"/"}>
              <Button
                title="Voltar"
                className="flex items-center gap-2 text-sm font-medium text-[#3E5155]"
              ></Button>
            </Link>
          </div>
          <div>
            <IoIosHelp className="w-[50px] h-[50px] rounded-full border-0 text-white bg-[#3E5155]" />
          </div>
        </div>
      </div>
    </div>
  )
}


// "use client";

// import Button from "@/components/Button";
// import Modal from "@/components/Modal";
// import Link from "next/link";
// import { useState } from "react";
// import { FaRegTrashAlt } from "react-icons/fa";
// import { IoIosHelp } from "react-icons/io";
// import { LuChevronLeft, LuPencil } from "react-icons/lu";
// import { useAutoAnimate } from '@formkit/auto-animate/react'

// interface ProductProps{
//   id: number,
//   productName: string,
//   quantidade: number
// }

// const FakeData: ProductProps[] = [
//   {
//     id: 384979,
//     productName: 'Batata Branca',
//     quantidade: 20
//   }, 
//   {
//     id: 384942,
//     productName: 'Maça Vermelha',
//     quantidade: 40
//   }, 
//   {
//     id: 983979,
//     productName: 'Ovomaltine',
//     quantidade: 10
//   }, 
//   {
//     id: 380979,
//     productName: 'Trigo Asiático',
//     quantidade: 100
//   }, 
//   {
//     id: 323079,
//     productName: 'Alface',
//     quantidade: 30
//   }, 
// ]

// export default function Meus(){
//   const [products, setProducts] = useState<ProductProps[]>(FakeData)
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(null)  
//   const [animationParent] = useAutoAnimate()

//   const openModal = (product: ProductProps) => {
//     setSelectedProduct(product)
//     setIsOpen(true)
//   }

//   const closeModal = () => {
//     setIsOpen(false)
//   }

//   const handleDeleteClickProduct = () => {
//     if(selectedProduct){
//       const newProductsData = products?.filter((product) => product.id !== selectedProduct.id)
//       setProducts(newProductsData)
//       setIsOpen(false)
//     } else {
//       console.log("Esse produto não existe!")
//     }
//   }

//   return(
//     <div className="w-full h-screen flex flex-col items-center p-5 bg-background">
//       <div className="flex flex-col items-center h-1/4 justify-center mt-2 w-full space-y-5">
//         <h1 className="text-3xl text-slate-gray font-medium">Meus produtos</h1>
//         <span className="text-center text-slate-gray text-sm font-medium">
//           Lista dos seus produtos que estão a <br />
//           venda pela cooperativa
//         </span>
//       </div>
//       <div className="w-full h-3/4 flex flex-col justify-between">
//         <div>
//           <table className="bg-white w-full p-10 rounded-lg text-primary">
//             <tbody ref={animationParent} className="space-y-2">
//               {products?.map((product) => (
//                 <tr key={product.id}>
//                   <td className="p-3.5 w-1/5">{product.quantidade}kg</td>
//                   <td className="p-3.5 w-3/5">{product.productName}</td>
//                   <td className="p-3.5 w-[10%]">
//                     <LuPencil size={20} />
//                   </td>
//                 <td
//                   className="p-3.5 w-[10%] hover:text-[#FF7070] delay-200 
//                   transition-colors"
//                 >
//                   <Modal  
//                     isOpen={isOpen}
//                     onOpen={() => openModal(product)}
//                     onClose={closeModal}
//                     title="Você ter certeza?"
//                     description="Se você remover este produto ele não estará a venda pela cooperativa."
//                     openButton={<FaRegTrashAlt size={18} />}
//                     textButton1="Cancelar"
//                     textButton2="Remover"
//                     classNameButton1="bg-[#EEF1F4] text-[#455154]"
//                     classNameButton2="bg-[#FF7070] text-white"
//                     onClickButton={() => handleDeleteClickProduct()}
//                   />
//                 </td>
//               </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div className="w-full h-full flex justify-between items-end">
//           <div className="w-full flex items-center">
//             <LuChevronLeft className="w-[30px] h-[30px] text-[#3E5155]" />
//             <Link href={"/"}>
//               <Button
//                 title="Voltar"
//                 className="flex items-center gap-2 text-sm font-medium text-[#3E5155]"
//               ></Button>
//             </Link>
//           </div>
//           <div>
//             <IoIosHelp className="w-[50px] h-[50px] rounded-full border-0 text-white bg-[#3E5155]" />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
  
