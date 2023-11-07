const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')

let minhaListaDeItens = []


function adicionarNovaTarefa() {
    minhaListaDeItens.push(input.value)
    mostrarTarefas()
}

function mostrarTarefas() {
    let novaLi = ''
    minhaListaDeItens.forEach(tarefa => {
        novaLi = `
            <li class="task">
                <img src="./img/checked.png" alt="check-na-tarefa">
                <p>${tarefa}</p>
                <img src="./img/trash.png" alt="tarefa-para-o-lixo">
            </li>
            `
    })
}


button.addEventListener('click', adicionarNovaTarefa)