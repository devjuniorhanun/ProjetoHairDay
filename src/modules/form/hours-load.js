import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";
import { hoursClick } from "./hours-click";

const hours = document.getElementById("hours");

export function hoursLoad({ date }) {
  // Limpa a lista de horários
  hours.innerHTML = "";
  
  //Map para recuperar cada hora da API
  const opeing = openingHours.map((hour) => {
    //Recupera somente a hora, fazendo um split para desestruturar
    const [scheduleHour] = hour.split(":");

    // Verifica se esta no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    return {
      hour,
      available: isHourPast,
    };
  });
  //Map para retornar o valor da hora
  opeing.forEach(({ hour, available }) => {
    const li = document.createElement("li");
    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");
    li.textContent = hour;

    if (hour === "09:00") {
      hourHeaderAdd("Manhã");
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde");
    } else if (hour === "19:00") {
      hourHeaderAdd("Noite");
    }

    hours.appendChild(li);
  });
  // Adiciona o evento de clique nos horários disponíveis
  hoursClick();
}

function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;
  hours.appendChild(header);
}
