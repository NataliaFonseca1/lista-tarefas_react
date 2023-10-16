import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { remover, editar, alteraStatus } from '../../store/reducers/tarefas'

import TarefaClass from '../../containers/models/Tarefa'
import { Botao } from './styles'

import * as enums from '../../utils/enums/tarefa'
import { BotaoSalvar } from '../../styles'

import {
  Card,
  Titulo,
  Tag,
  Descricao,
  BarraAcoes,
  BotaoCancelarRemover
} from './styles'

type Props = TarefaClass

const Tarefa = ({
  descricao: descricaoOriginal,
  status,
  prioridade,
  titulo,
  id
}: Props) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alteraStatus({
        id,
        finalizado: evento.target.checked
      })
    )
  }

  return (
    <Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={status === enums.Status.CONCLUIDA}
          onChange={alteraStatusTarefa}
        />
        <Titulo>
          {estaEditando && <em>Editando: </em>} {titulo}
        </Titulo>
      </label>
      <Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </Tag>
      <Tag parametro="status" status={status}>
        {status}
      </Tag>
      <Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(editar({ descricao, status, prioridade, titulo, id }))
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </BotaoCancelarRemover>
          </>
        )}
      </BarraAcoes>
    </Card>
  )
}

export default Tarefa
