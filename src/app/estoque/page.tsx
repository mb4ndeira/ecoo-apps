import List from "./components/List";

export default function Estoque(){
  return(
    <main className="sm:ml-20 desktop:ml-0 w-full h-full p-16 bg-background">
      <div className="h-full w-full flex flex-col justify-center space-y-20">
        <div>
          <span className="text-slate-blue text-[40px] font-semibold">
              Gerenciador <br />
              de estoque
          </span>
        </div>
        <div>
          <List/>
        </div>
        <div className="flex justify-center">
          <h1 className="text-primary text-base font-semibold">01</h1>
        </div>
      </div>
    </main>
  )
}