import { Container } from '@mui/material'
import Header from './components/Header/Header'
import Home from './pages/home/Home'

function App() {
  return (
    <>
      <Header />
      <Container>
        <Home />
      </Container>
    </>
  )
}

export default App
