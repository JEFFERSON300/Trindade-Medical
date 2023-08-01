const BASE_URL = `http://localhost:3000/patients`;

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

const ShowByTelephone = async (telephone) => {
  let filter = "?";
  if (telephone) {
    filter += `telephone=${telephone}&`;
  }
  const response = await fetch(`${BASE_URL}${filter}`);
  const data = await response.json();
  return data[0];
};

const ShowByName = async (name) => {
  let filter = "?";
  if (name) {
    filter += `name=${name}&`;
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
  alert(res && `Paciente cadastrado com sucesso!`);
  return res;
};

const Delete = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};

const Update = async (id, newUser) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  const res = await response.json();
  alert(res && `Paciente editado com sucesso!`);
  return res;
};

export const PatientService = {
  Get,
  Create,
  Show,
  ShowByEmail,
  ShowByTelephone,
  ShowByName,
  Delete,
  Update,
};
