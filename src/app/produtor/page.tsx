import { AccountBalance } from "@/components/producer/AccountBalance";

export default function Home() {
  return (
    <div className="bg-background">
      <header className="flex">
        <span className="font-poppins text-#2F4A4D">
          Olá, <strong>Eduardo!</strong>
        </span>
        <button className="ml-auto font-poppins text-primary">Sair</button>
      </header>
      <AccountBalance />
    </div>
  );
}
