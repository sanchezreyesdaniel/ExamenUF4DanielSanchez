import { useState, useContext, useEffect, createContext } from "react";

export const ContextoGlobal = createContext();
import  cartasJson  from "../bd.json";
export const ContextoProvider = ({ children }) => {
//     const [historias, setHistorias] = useState([]);
//     const [dataHistoria, setDataHistoria] = useState(null);
//     const [isOpen, setIsOpen] = useState(false);

//     const onOpen = () => setIsOpen(true);
//     const onClose = () => setIsOpen(false);
// //para mostrar
    
//         const fetchHistorias = async () => {
//             try {
//                 const response = await fetch('https://servidor-repositorio.vercel.app/historias');
//                 const data = await response.json();
//                 setHistorias(data);
//             } catch (error) {
//                 console.error("Error fetching historias:", error);
//             }
//         };
//         useEffect(() => {
//         fetchHistorias();
//     }, []);

    const [cartas, setCartas] = useState(cartasJson.cervezas)
    //const [dataHistoria, setDataHistoria ] = useState()

    return (
        <ContextoGlobal.Provider value={{ 
            // historias, setHistorias, dataHistoria, setDataHistoria, isOpen, onOpen, onClose, fetchHistorias 
            cartas,setCartas
            }}>
            {children}
        </ContextoGlobal.Provider>
    );
}
