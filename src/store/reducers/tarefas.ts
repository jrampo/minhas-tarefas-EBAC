import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar TypeScript',
      descricao: 'Estudar JJS',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDO
    },
    {
      id: 2,
      titulo: 'Estudar JavaScript',
      descricao: 'Estudar TTS',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDO
    },
    {
      id: 3,
      titulo: 'Estudar Angular',
      descricao: 'Estudar algo',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Tarefa>) => {
      const tarefaJaExistente = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tarefaJaExistente) {
        alert('Ja existe pae')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions

export default tarefasSlice.reducer
