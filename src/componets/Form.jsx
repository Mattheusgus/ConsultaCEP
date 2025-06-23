import { useState } from "react";
import { consultarCepCamada } from "../utils/consultaCep.js";
import { useNavigate } from "react-router-dom";

function Cepform() {
  const navigate = useNavigate();
  const lidarComKeyDownNoInput = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const button = document.getElementById("btn");
      button.click();
    }
  };
  let [cepName, setCepName] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        onKeyDown={lidarComKeyDownNoInput}
        type="text"
        value={cepName}
        placeholder="Digite o CEP (Ex: 29052-225)"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        onChange={(event) => setCepName(event.target.value)}
      ></input>
      <button
        id="btn"
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
