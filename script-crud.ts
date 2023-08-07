interface Tarefa {
    descricao: string
    concluda: boolean
}

interface EstadoAplicacao {
    tarefas: Tarefa[]
    tarefaSelecionada: Tarefa
}