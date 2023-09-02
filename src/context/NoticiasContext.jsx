import {createContext, useState, useEffect} from 'react'
import axios from 'axios';
export const NoticiasContext = createContext();


// eslint-disable-next-line react/prop-types
export const NticiasProvider = ({children}) => {
    const [categoria, setCategoria] = useState('general');
    const [noticias, setNoticias] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [resultados, setResultados] = useState(0)
    useEffect( () => {
        const consultarApi  = async () => {
            const url  = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY }`;
            const {data} = await axios(url);

            setNoticias(data.articles);
            setPagina(1)
         
            setResultados(data.totalResults)
        }
        consultarApi()
    }, [categoria])
    useEffect( () => {
        const consultarApi  = async () => {
            const url  = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY }`;
            const {data} = await axios(url);

            setNoticias(data.articles);
            
         
            setResultados(data.totalResults)
        }
        consultarApi()
    }, [ pagina])
    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
        
        
    }
    const handleChangePagina = (e, valor) => {
        setPagina(valor);
       
    }
    return (
        <NoticiasContext.Provider value={{
            handleChangeCategoria,
            categoria,
            noticias,
            resultados,
            handleChangePagina,
            pagina
        }}>
            {children}
        </NoticiasContext.Provider>
    )
}


