export default function Header() {
  return (
    <header className="bg-lime-600 py-3">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-center text-3xl font-bold text-white uppercase">
          Contador de calorias
        </h1>
        <button className="uppercase bg-indigo-900 text-white font-bold px-6 py-2 rounded-lg">
          Reiniciar
        </button>
      </div>
    </header>
  );
}
