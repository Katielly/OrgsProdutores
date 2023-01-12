import { useState, useEffect } from "react";

import { carregarProdutores } from "../services/loadData";


export default function useProdutores () {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);
    
    useEffect(() => {
        const retorno = carregarProdutores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    }, []);

    return [titulo, lista]
}