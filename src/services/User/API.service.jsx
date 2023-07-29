const API_VIACEP = `http://viacep.com.br/ws/CEP/json/`;

const GetCEP = async (cep) => {
  cep = cep.replace("-", "").trim();
  const response = await fetch(API_VIACEP.replace("CEP", cep));
  const data = await response.json();
  return data;
};

export const ServiceAPI = {
  GetCEP,
};
