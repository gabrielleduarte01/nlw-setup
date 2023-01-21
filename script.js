const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add) // para ouvir um evento, disparar uma funcao ao clicar
form.addEventListener("change", save) //quando alterar o formulario, salvar no local storage

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5) //criar uma nova data 
  const dayExists = nlwSetup.dayExists(today)

  if(dayExists) { // se o dia ja existir
    alert('Dia já incluso ❌')
    return
  }

  alert('Adicionado com sucesso ✅') // se não existir
  nlwSetup.addDay(today)
}

function save() { 
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}


// const data = { manual 
//   run: ["01-01", "01-02", "01-05"],
//   water: ["01-01", "01-02", "01-03", "01-07"],
//   takePills: ["01-03", "01-04"],
// }

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} // converter em objeto, que vai estar guardado ou vazio
nlwSetup.setData(data) // carrega info
nlwSetup.load() // carrega info