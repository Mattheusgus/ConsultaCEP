import Cepform from "./componets/Form";

function App() {
  return (
    <div className="w-screen h-screen bg-slate-900 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Consulta de CEP Rápida e Gratuita
        </h1>
        <Cepform />
      </div>
    </div>
  );
}

export default App;
