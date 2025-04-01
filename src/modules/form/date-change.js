import { schedulesDay } from "../schedules/load"

// Select o input de data
const selectedDate = document.getElementById("date")

// Recarregando a lista de Horários quando o input de data mudar
selectedDate.onchange = () => schedulesDay()