import { CarreraTecnicaList } from './components/CarreraTecnicaList'

const initCarrerasTecnicas = [
  { codigo: 1, nombre: 'JAVA' },
  { codigo: 2, nombre: 'REACT' },
]

export const App = () => {
  return (
    <>
      <h1>Main Page</h1>
      <CarreraTecnicaList carrerasTecnicas={initCarrerasTecnicas} />
    </>
  )
}
