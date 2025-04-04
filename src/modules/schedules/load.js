import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day";
import { hoursLoad } from "../form/hours-load";
import { schedulesShow } from "./show";

//seleciona o input de data
const selectedDate = document.getElementById("date");

export async function schedulesDay(){
   //Obtem a data do input
   const date = selectedDate.value

   // Busca na API os agendamentos
   const dailySchedules = await scheduleFetchByDay({ date });

   // Exibe os Agendamentos
   schedulesShow({ dailySchedules });
   
  hoursLoad( { date, dailySchedules });
}