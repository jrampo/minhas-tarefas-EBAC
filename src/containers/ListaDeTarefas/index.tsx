import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'estudar type',
    descricao: 'ver a aula 3',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'pagar conta',
    descricao: 'ver a aula 3',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDO
  },
  {
    titulo: 'baixar fatura',
    descricao: 'ver a aula 3',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
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
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
