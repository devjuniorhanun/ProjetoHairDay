// Importando dayjs
import dayjs from "dayjs"

// Recuperando o elemento do formulário
const form = document.querySelector("form")
// Recuerando o elemento do campo de data
const selectedDate = document.getElementById("date")

//************************* */
//Carrega a data atual
const inputToday = dayjs(new Date()).format("YYYY-MM-DD") 
//Data atual para o input
selectedDate.value = inputToday 
//Define a data minima como data atual
selectedDate.min   = inputToday
//************************* */

// Recuperando as informações do formulário, através do evento de submit
// O evento é disparado quando o usuário clica no botão de enviar ou pressiona Enter
// O evento é passado como parâmetro para a função de callback
form.onsubmit = async (event) => {
  // Previne o comportamento padrão do formulário
  event.preventDefault()

}