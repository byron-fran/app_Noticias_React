import { useContext } from "react";
import { NoticiasContext } from "../context/NoticiasContext";


export const useNoticias = () => {
    return useContext(NoticiasContext)
}