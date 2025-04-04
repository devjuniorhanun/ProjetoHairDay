import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function scheduleFetchByDay({date}) {
  try {
    // Faz a requisição para buscar os agendamentos do dia selecionado
    const response = await fetch(`${apiConfig.baseUrl}/schedules`)

    // converter a resposta em JSON
    const data = await response.json();
    // Filtra os agendamentos do dia selecionado
    const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))
    // Retorna os agendamentos do dia selecionado
    return dailySchedules;
  } catch (error) {
    alert("Não foi possível buscar os agendamentos do dia Selecionado")
    console.error(error);
    
  }
}