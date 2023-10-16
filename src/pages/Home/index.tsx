import BotaoAdicionar from '../../components/BotaoCadastro'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral exibirFiltro />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
