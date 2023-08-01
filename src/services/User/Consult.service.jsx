const BASE_URL = `http://localhost:3000/consults`;

// --- GET

const Get = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
};

const Show = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  const data = await response.json();
  return data;
};

const ShowByEmail = async (email) => {
  let filter = "?";
  if (email) {
    filter += `email=${email}&`;
  }
  const response = await fetch(`${BASE_URL}${filter}`);
  const data = await response.json();
  return data[0];
};

const Create = async (data) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const res = await response.json();
  alert(res && `Consulta cadastrada com sucesso!`);
};

const Delete = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};

// newUser --> precisa vir assim

// const data = {
//   email: email,
//   password: password,
// };

const Update = async (id, newUser) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  const res = await response.json();
  console.log(res && `Usuario ${newUser.email} criado com sucesso!`);
};

export const ConsultService = {
  Get,
  Create,
  Show,
  ShowByEmail,
  Delete,
  Update,
};
