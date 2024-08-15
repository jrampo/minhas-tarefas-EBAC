import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'estudar type',
    descricao: 'ver a aula 3',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'pagar conta',
    descricao: 'ver a aula 3',
    prioridade: 'importante',
    status: 'concluido'
  },
  {
    titulo: 'baixar fatura',
    descricao: 'ver a aula 3',
    prioridade: 'importante',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => {
  return (
    <Container>
      <p>2 tarefas marcadas como: categoria e termo</p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              descricao={t.descricao}
              titulo={t.titulo}
              prioridade={t.prioridade}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
