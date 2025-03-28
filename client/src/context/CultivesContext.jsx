import PropTypes from "prop-types";
import { createContext, useContext, useState } from 'react';
import { createCultiveRequest, getCultivesRequest } from "../api/cultives";

const CultivesContext = createContext();

export const useCultives = () => {
    const context = useContext(CultivesContext);

    if (!context) {
        throw new Error('useCultives must be used within a CultivesProvider');
    }

    return context;
};

export function CultivesProvider({children}){

    const [cultives, setCultives] = useState([]);

    const getCultives = async () => {
        
        try {
            const res = await getCultivesRequest();
            setCultives(res.data);
        } catch (error) {
            console.error(error);
        }
    }
    const createCultive = async (cultive) => {
        const res = await createCultiveRequest(cultive);
        console.log(res);
    }

    

    return (
        <CultivesContext.Provider value={{cultives, createCultive, getCultives}}>
            {children}
        </CultivesContext.Provider>
    );
};

CultivesProvider.propTypes = {
    children: PropTypes.node.isRequired,
};