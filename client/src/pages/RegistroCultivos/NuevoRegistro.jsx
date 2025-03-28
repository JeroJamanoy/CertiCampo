import MenuPrincipal from '../../components/menuPrincipal';
import { useCultives } from '../../context/CultivesContext';
import './NuevoRegistro.css';

import { useForm } from 'react-hook-form';


function NuevoRegistro(){
    const { register, handleSubmit } = useForm();
    const { createCultive } = useCultives();
    

    const onSubmit = handleSubmit((data) => {
        data.date = new Date(data.date).toISOString();
        createCultive(data);
        console.log(data);
        alert('Registro exitoso');
    });

    return (
        <div className='background-nuevo-registro'>
            <MenuPrincipal />
            <div className="titulo">
                <h2>Nuevo Registro</h2>
                <span>Rellene todos los datos y pulse en el boton guardar para subir el registro de cultivos
                    a la base de datos.
                </span>
            </div>
            <form onSubmit={onSubmit} className="form">
                <span>Nombre del registro</span>
                <input type="text"{...register("name")} autoFocus/>
                <span>Fecha</span>
                <input type="date" {...register("date", {setValueAS: v => new Date(v)})}/>
                <span>Tipo de cultivo</span>
                <input type="text" {...register("cultivation")}/>
                <span>Link del Archivo</span>
                <input type="text" {...register("files")}/>

                <button>Guardar</button>
            </form>
            
            
        </div>
    );
}

export default NuevoRegistro;