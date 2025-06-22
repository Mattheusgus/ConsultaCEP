import { useState } from "react";
import { consultarCepCamada } from "../utils/consultaCep.js";
import { useNavigate } from "react-router-dom";

function Cepform() {
  const navigate = useNavigate();
  let [cepName, setCepName] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        value={cepName}
        placeholder="Digite o CEP (Ex: 29052-225)"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        onChange={(event) => setCepName(event.target.value)}
      ></input>
      <button
        onClick={() => {
          if (!cepName.trim()) {
            return alert("Preencha o CEP");
          }
          const result = consultarCepCamada(cepName);
          if (result) {
            navigate(`/detalhes/${cepName}`);
          }
        }}
        className="bg-slate-100 text-black px-4 py-2 rounded-md font-medium border-2"
      >
        Pesquisar
      </button>
    </div>
  );
}
export default Cepform;
