const products = [
  { name: "Tomate" },
  { name: "Batata" },
  { name: "Alface" },
  { name: "Cebola" },
  { name: "Repolho" },
  { name: "Beterraba" },
];

export function Products() {
  return (
    <div className="mt-5 w-full max-h-[350px] overflow-y-scroll gap-x-1 sm:gap-x-3 gap-y-5 grid grid-cols-2 sm:grid-cols-3">
      {products.map((product, index) => (
        <button
          key={index}
          className="min-h-[160px] w-11/12 bg-white rounded-2xl mx-auto flex flex-col"
        >
          <div className="bg-rain-forest h-[100px] w-10/12 mx-auto mt-[10px] rounded-[10px]"></div>
          <span className="m-auto text-[#2F4A4D]">{product.name}</span>
        </button>
      ))}
    </div>
  );
}
