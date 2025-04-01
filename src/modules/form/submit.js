// Importando dayjs
import dayjs from "dayjs";

// Recuperando o elemento do formulário
const form = document.querySelector("form");
// Recuperando o nome do cliente
const clientName = document.getElementById("client");
// Recuerando o elemento do campo de data
const selectedDate = document.getElementById("date");

//************************* */
//Carrega a data atual
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");
//Data atual para o input
selectedDate.value = inputToday;
//Define a data minima como data atual
selectedDate.min = inputToday;
//************************* */

// Recuperando as informações do formulário, através do evento de submit
// O evento é disparado quando o usuário clica no botão de enviar ou pressiona Enter
// O evento é passado como parâmetro para a função de callback
form.onsubmit = async (event) => {
  // Previne o comportamento padrão do formulário
  event.preventDefault();

  try {
    // Recuperando o nome do cliente
    const name = clientName.value.trim();
    if(name === "") {
      return alert("Preencha o nome do cliente");
    }
    // Recuperando a horario selecionado 
    const hourSelected = document.querySelector(".hour-selected");
   
    // Verificando se o horário foi selecionado
    if(!hourSelected) {
      return alert("Selecione um horário");
    }
    // Recuperando o horário selecionado
    const [hour] = hourSelected.innerHTML.split(":");
    
    // Inserindo o horário no formato correto
    const when = dayjs(selectedDate.value).add(hour, "hour")    
   
    // Gerando um Id
    const id =  new Date().getTime();

    console.log({
      id,
      name,
      when,
    });
  } catch (error) {
    alert("Não foi possível realizar o agendamento");
    console.log(error);
  }
};
