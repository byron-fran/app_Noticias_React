import {Grid, Typography, Container} from '@mui/material'
import Formulario from './components/Formulario';
import { NticiasProvider } from './context/NoticiasContext';
import ListaNoticias from './components/ListaNoticias';
function App() {


  return (
    <>
    <NticiasProvider>
    <Container>
      <header>
        <Typography align='center' variant='h3'marginY={4}>Buscar Noticia</Typography>
      </header>
      <Grid container
            direction='row'
            justifyContent='center'
            alignItems='center'>
        <Grid item xs={12} md={6} >
           <Formulario/>
        </Grid>
      </Grid>
     <ListaNoticias/>
    </Container>
    </NticiasProvider>
    </>
  )
}

export default App
