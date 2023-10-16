import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 80vh;
  overflow-y: scroll;
`
export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  padding: 8px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  background-color: #fff;
  border: 1px solid #666666;
  border-radius: 8px;
  color: #666666;
`
export const Botao = styled.button`
  cursor: pointer;
  padding: 8px 12px;
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  background-color: ${variaveis.azulEscuro};
  border: none;
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
