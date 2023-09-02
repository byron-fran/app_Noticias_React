import {FormControl, InputLabel, Select, MenuItem, Button,Box} from '@mui/material'
import { useNoticias } from '../hooks/useContext'

const Formulario = () => {
    const {categoria, handleChangeCategoria} = useNoticias()
    const CATEGORIAS = [
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Negocios'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'health', label: 'Salud'},
        { value: 'science', label: 'Ciencia'},
        { value: 'sports', label: 'Deportes'},
        { value: 'technology', label: 'Tecnología'},
    ]
  return (
    <form>
        <FormControl fullWidth>
            <InputLabel>Categoria</InputLabel>
            <Select label='categoria' value={categoria} onChange={handleChangeCategoria}>
                {CATEGORIAS.map(categoria => (
                    <MenuItem key={categoria.value} value={categoria.value}>
                        {categoria.label}
                    </MenuItem>
                ))}
            </Select>
            <Box marginTop={3}>
                 <Button variant='contained' fullWidth>Buscar Noticia</Button>
            </Box>
           
        </FormControl>
    </form>
  )
}

export default Formulario