import { apiConfig } from "./api-config";

export async function scheduleNew({ id, name, when }) {
  try {
    // Realiza a requisição para enviar os dados para a API
    await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        when,
      }),
    });
    // Exibe uma mensagem de sucesso
    alert("Agendamento realizado com sucesso!");
  } catch (error) {
    alert("Não foi possível realizar o agendamento");
    console.error(error);
  }
}
