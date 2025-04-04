import { schedulesDay } from "../schedules/load";
import { scheduleCancel } from "../schedules/schudule-cancel";

// Recupera todos os agendamentos do dia
const preriods = document.querySelectorAll('.period');

// Gera um evento de clique para cada lista de agendamentos (Manã, Tarde e Noite)
preriods.forEach((period) => {
  // Captura o evento de clique na lista de agendamento
  period.addEventListener('click', async (event) => {
    // Verifica se o elemento clicado é um botão de cancelar
    if (event.target.classList.contains('cancel-icon')) {
      // Obtém a li pai do elemento clicado
      const item = event.target.closest('li');
      const { id } = item.dataset;

      // Verifica se o id do item foi clicado
      if(id){
        // Pergunta se o usuário tem certeza que deseja cancelar o agendamento
        const isConfirmed = confirm('Você tem certeza que deseja cancelar o agendamento?')

        // Verifica se o usuário confirmou o cancelamento
        if(isConfirmed){
          // Envia a requisição para cancelar o agendamento
          await scheduleCancel(id)
          // Atualiza a lista de agendamentos do dia
          schedulesDay()
        }
      }

    }
      
  });
})