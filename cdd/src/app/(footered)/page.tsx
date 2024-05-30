import Link from "next/link";

import Button from "@shared/components/Button";

import { UserGreeting } from "./home/components/UserGreeting";
import CardComponent from "./home/components/CardComponent";

export default function Cdd() {
  return (
    <div className="px-4 pb-10 pt-10">
      <header className="flex mb-4 mx-4">
        <UserGreeting />
        <Link className="ml-auto" href={"/api/auth/logout"}>
          <Button
            className=" text-lg text-theme-primary"
            href={"/api/auth/logout"}
          >
            Sair
          </Button>
        </Link>
      </header>
      <div className="">
        <CardComponent title="Receber ofertas" link="/pedidos" />
        <CardComponent title="Montar sacola" link="/montar-sacola" />
        <CardComponent title="Enviar sacola" link="/enviar-sacola" />
        <CardComponent title="Gerar relatório" link="/extrato-entregas" />
      </div>
    </div>
  );
}
