import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroCards from '../../components/FiltroCard'

import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

import * as S from './styles'
import * as enums from '../../utils/enums/tarefa'
import { Botao, Campo } from '../../styles'

type Props = {
  exibirFiltro: boolean
}

const BarraLateral = ({ exibirFiltro }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      {exibirFiltro ? (
        <>
          <div>
            <Campo
              type="text"
              placeholder="buscar"
              value={termo}
              onChange={(e) => dispatch(alterarTermo(e.target.value))}
            />
          </div>
          <S.Filtros>
            <FiltroCards
              valor={enums.Status.PENDENTE}
              criterio="status"
              legenda="pendentes"
            />
            <FiltroCards
              valor={enums.Status.CONCLUIDA}
              criterio="status"
              legenda="concluídas"
            />
            <FiltroCards
              valor={enums.Prioridade.URGENTE}
              criterio="prioridade"
              legenda="urgentes"
            />
            <FiltroCards
              valor={enums.Prioridade.IMPORTANTE}
              criterio="prioridade"
              legenda="importantes"
            />
            <FiltroCards
              valor={enums.Prioridade.NORMAL}
              criterio="prioridade"
              legenda="normal"
            />
            <FiltroCards criterio="todas" legenda="todas" />
          </S.Filtros>
        </>
      ) : (
        <Botao onClick={() => navigate('/')}>Voltar a lista de tarefas</Botao>
      )}
    </S.Aside>
  )
}

export default BarraLateral
