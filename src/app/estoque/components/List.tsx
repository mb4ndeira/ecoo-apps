import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai'

export default function List(){
    return(
      <div>
        <h1 className="font-semibold mb-2 text-[#060606]">Lista de produtos</h1>
        <table className="bg-white text-primary text-left leading-7 font-inter w-full table-fixed rounded-lg">
          <thead>
            <tr>
              <th className="w-1/4 border-b border-primary p-2">
                Nome
              </th>
              <th className="w-2/4 border-b border-primary p-2">
                Descrição
              </th>
              <th className="w-1/4 border-b border-primary p-2">
                Quantidade
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="text-base font-normal border-b border-primary p-2 md-mobile:bg-primary md-mobile:text-white">
                Tomate gaúcho
              </th>
              <th className="text-base font-normal border-b border-primary p-2 md-mobile:bg-primary md-mobile:text-white">
                <div className='truncate'>
                  Variedade de tomate gourmet, possui frutos com formato...
                </div>
              </th>
              <th className="text-base font-normal border-b border-primary p-2 md-mobile:bg-primary md-mobile:text-white">
                <div className='flex flex-row items-center gap-6'>
                  <AiFillMinusSquare className="p-1 w-12 h-12 rounded-md text-primary cursor-pointer"/>
                  <span>240kg</span>
                  <AiFillPlusSquare className="p-1 w-12 h-12 rounded-md text-primary cursor-pointer" />
                </div>
              </th>
            </tr>
            <tr>
              <th className="text-base font-normal border-b border-primary p-2 md-mobile:bg-primary md-mobile:text-white">
                Tomate gaúcho
              </th>
              <th className="text-base font-normal border-b border-primary p-2 md-mobile:bg-primary md-mobile:text-white">
                <div className='truncate'>
                  Variedade de tomate gourmet, possui frutos com formato...
                </div>
              </th>
              <th className="text-base font-normal border-b border-primary p-2 md-mobile:bg-primary md-mobile:text-white">
                <div className='flex flex-row items-center gap-6'>
                  <AiFillMinusSquare className="p-1 w-12 h-12 rounded-md text-primary cursor-pointer"/>
                  <span>240kg</span>
                  <AiFillPlusSquare className="p-1 w-12 h-12 rounded-md text-primary cursor-pointer" />
                </div>
              </th>
            </tr>
            <tr>
              <th className="text-base font-normal border-b border-primary p-2 md-mobile:bg-primary md-mobile:text-white">
                Tomate gaúcho
              </th>
              <th className="text-base font-normal border-b border-primary p-2 md-mobile:bg-primary md-mobile:text-white">
                <div className='truncate'>
                  Variedade de tomate gourmet, possui frutos com formato...
                </div>
              </th>
              <th className="text-base font-normal border-b border-primary p-2 md-mobile:bg-primary md-mobile:text-white">
                <div className='flex flex-row items-center gap-6'>
                  <AiFillMinusSquare className="p-1 w-12 h-12 rounded-md text-primary cursor-pointer"/>
                  <span>240kg</span>
                  <AiFillPlusSquare className="p-1 w-12 h-12 rounded-md text-primary cursor-pointer" />
                </div>
              </th>
            </tr>
            <tr>
              <th className="text-base font-normal border-b border-primary p-2 md-mobile:bg-primary md-mobile:text-white">
                Tomate gaúcho
              </th>
              <th className="text-base font-normal border-b border-primary p-2 md-mobile:bg-primary md-mobile:text-white">
                <div className='truncate'>
                  Variedade de tomate gourmet, possui frutos com formato...
                </div>
              </th>
              <th className="text-base font-normal border-b border-primary p-2 md-mobile:bg-primary md-mobile:text-white">
                <div className='flex flex-row items-center gap-6'>
                  <AiFillMinusSquare className="p-1 w-12 h-12 rounded-md text-primary cursor-pointer"/>
                  <span>240kg</span>
                  <AiFillPlusSquare className="p-1 w-12 h-12 rounded-md text-primary cursor-pointer" />
                </div>
              </th>
            </tr>
            <tr>
              <th className="text-base font-normal border-b border-primary p-2 md-mobile:bg-primary md-mobile:text-white">
                Tomate gaúcho
              </th>
              <th className="text-base font-normal border-b border-primary p-2 md-mobile:bg-primary md-mobile:text-white">
                <div className='truncate'>
                  Variedade de tomate gourmet, possui frutos com formato...
                </div>
              </th>
              <th className="text-base font-normal border-b border-primary p-2 md-mobile:bg-primary md-mobile:text-white">
                <div className='flex flex-row items-center gap-6'>
                  <AiFillMinusSquare className="p-1 w-12 h-12 rounded-md text-primary cursor-pointer"/>
                  <span>240kg</span>
                  <AiFillPlusSquare className="p-1 w-12 h-12 rounded-md text-primary cursor-pointer" />
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    )
}