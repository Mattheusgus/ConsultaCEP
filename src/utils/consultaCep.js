const apiURL = "http://localhost:1880/";
// const home = "http://localhost:5174";
let data;

export async function consultarCep(cep) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({ cep });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const response = await fetch(`${apiURL}consulta-cep`, requestOptions);
    const result = await response.text();
    return result;
  } catch (error) {
    console.error("Erro ao consultar CEP:", error);
    throw error;
  }
}

export async function consultarCepCamada(cep) {
  try {
    data = JSON.parse(await consultarCep(cep));

    if (!data?.cep) {
      data = false;
      return data;
    }

    return data;
  } catch (error) {
    console.error("Erro ao consultar CEP:", error);
    data = false;
    return data;
  }
}
