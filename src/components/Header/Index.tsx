import { HiOutlineBell } from "react-icons/hi";

export function Header() {
  return (
    <header className="flex items-center mb-4 text-[#2F4A4D]">
      <span className="md:text-5xl">
        Olá, <strong>Eduardo!</strong>
      </span>
      <div className="flex ml-auto">
        <button className="mr-4 text-xl md:text-2xl">
          <HiOutlineBell />
        </button>
        <button className="text-primary md:text-lg">Sair</button>
      </div>
    </header>
  );
}
