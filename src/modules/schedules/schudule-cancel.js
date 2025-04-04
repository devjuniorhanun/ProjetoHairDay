import { apiConfig } from "../../services/api-config"

export async function scheduleCancel(id) {
  try {
    // Criando uma requisição para cancelar o agendamento
    await fetch(`${apiConfig.baseUrl}/schedules/${id}`,{
      method: "DELETE",
    })
    alert("Agendamento cancelado com sucesso")
  } catch (error) {
    console.error("Erro ao Cacelar o Agendamento:", error)
    alert("Não foi possível cacelar o Agendamento")
    
  }
}