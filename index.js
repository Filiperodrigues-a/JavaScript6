let tarefas = [];


function adicionarTarefa() {
    const descricao = document.getElementById("novaTarefa").value.trim();

    
    if (descricao) {
        
        const novaTarefa = {
            descricao: descricao,
            status: false 
        };

        
        tarefas.push(novaTarefa);

       
        atualizarListaTarefas();

        
        document.getElementById("novaTarefa").value = "";
    }
}

// Função para atualizar a lista de tarefas na interface
function atualizarListaTarefas() {
    const divTarefas = document.getElementById("tarefas");
    divTarefas.innerHTML = ''; 

    tarefas.forEach((tarefa, index) => {
        
        const tarefaElement = document.createElement('div');
        tarefaElement.classList.add('tarefa');

        
        const descricaoClass = tarefa.status ? 'concluida' : 'nao-concluida';

        
        tarefaElement.innerHTML = `
            <input type="checkbox" id="checkbox-${index}" ${tarefa.status ? 'checked' : ''} onclick="alterarStatus(${index})">
            <span class="${descricaoClass}">${tarefa.descricao}</span>
        `;

        
        divTarefas.appendChild(tarefaElement);
    });
}


function alterarStatus(index) {
    
    tarefas[index].status = !tarefas[index].status;

    
    atualizarListaTarefas();
}