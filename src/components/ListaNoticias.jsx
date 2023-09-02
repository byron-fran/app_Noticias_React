import { useNoticias } from "../hooks/useContext"
import {Typography, Grid} from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack'
import Noticia from "./Noticia";

const ListaNoticias = () => {
    const {noticias,resultados,handleChangePagina,pagina} = useNoticias();
    const totalPaginas = Math.ceil(resultados / 20);

  return (
    <>
        <Typography textAlign='center'
                    marginY={5}
                    variant="h3"
                    component='h2'>
            Últimas noticias
        </Typography>
        <Grid container spacing={2}>
            {noticias.map(noticia => (
                <Noticia key={Math.random().toString(16)} noticia={noticia}/>
            ))}
        </Grid>
        <Stack 
        sx={{marginY: 5}}
        spacing={2}
        direction={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        >
           
            <Pagination color="primary" count={totalPaginas} onChange={handleChangePagina} page={pagina} />
        </Stack>
    </>
  )
}

export default ListaNoticias