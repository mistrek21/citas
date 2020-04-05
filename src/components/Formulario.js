import React, { Fragment, useState } from 'react';

const Formulario = () => {

    // Crear State de Citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    const [error, handleError] = useState(false);



    // Funcion se actualiza cada vez que el usuario escribe un input
    const handleChange = (e) => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value 
        })
    }

    // Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    // Cuando el usuario presiona agregar cita
    const submitCita = (e) => {
        e.preventDefault();

        // Validar
        if(mascota.trim() === '' || propietario.trim() === ''|| fecha.trim() === ''|| 
        hora.trim() === ''|| sintomas.trim() === '' ){
            handleError(true);
            return;
        }

        // Asignar un ID

        // Crear la cita

        // Reiniciar el form
    }

    return (  
        <Fragment>
            <h2>Crear Cita</h2>

            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> 
            : null }

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={mascota}
                />

                <label>Propietario</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre propietario de la mascota"
                    onChange={handleChange}
                    value={propietario}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />

                <label>Hora de Alta</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />

                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    placeholder="Describe los sintomas"
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>
                <button
                        className="u-full-width button-primary"
                        type="submit"
                    >Agregar Cita
                </button>
            </form>
        </Fragment>
    );
}
 
export default Formulario;