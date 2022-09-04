import React, { useContext, useEffect, useRef, useState } from 'react';
import "../../styles/order.css"
import { Context } from '../store/appContext';
import emailjs from "emailjs-com";

const FormOrder = () => {
    const { store, actions } = useContext(Context)
    let Storeproductos = store.orden
    let [datos, setDatos] = useState({
        nombre: "",
        email: "",
        productos: Storeproductos,
        numeroTelefono: "",
        metodoDePago: "",
        deliveryOPickup: "",
        direccion: ""
    })

    function handleDatos(e) {
        setDatos({ ...datos, [e.target.name]: e.target.value })
    }

    const form = useRef();

    let sendEmail = (e) => {
        e.preventDefault();
        try {
            emailjs.sendForm("service_u37qd7d",
                "descripción-form",
                form.current,
                "1Qoitw0fbmNu3wuW3"
            )
            emailjs.sendForm(
                "service_u37qd7d",
                "template_djj9lvr",
                form.current,
                "1Qoitw0fbmNu3wuW3"
            )
            setDatos({
                nombre: "",
                email: "",
                productos: "",
                numeroTelefono: "",
                metodoDePago: "",
                deliveryOPickup: "",
                direccion: ""
            })
            alert("Pedido realizado con exito, revise su correo para mas informacion")
        }
        catch (error) {
            console.log("Something Happened", error)
        }
    }

    return (
        <>
            <div className='container'>
                <header className='encabezado'>
                    <div>
                        <h1>Haz Tu Orden</h1>
                    </div>
                </header>
                <div>Haz tu orden y nos comunicaremos contigo lo mas rapido posible (Actualmente solo contamos con envios nacionales)</div>
                <div className='formulario row'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div>
                            <input
                                type="text"
                                className='form-item col-5'
                                placeholder='Nombre'
                                onChange={(e) => handleDatos(e)}
                                name="nombre"
                                value={datos.nombre}
                            >
                            </input>
                            <input
                                type="text"
                                className="form-item col-5"
                                placeholder='Email'
                                onChange={(e) => handleDatos(e)}
                                name="email"
                                value={datos.email}
                            >
                            </input>
                        </div>
                        <input
                            type="text"
                            className="form-item col-12"
                            placeholder='Nombre de los Productos'
                            readOnly
                            value={Storeproductos}
                            name="productos"
                        >
                        </input>
                        <input
                            type="text"
                            className="form-item col-12"
                            placeholder='Numero de Telefono'
                            onChange={(e) => handleDatos(e)}
                            name="numeroTelefono"
                            value={datos.numeroTelefono}
                        >
                        </input>
                        <input
                            type="text"
                            className="form-item col-12"
                            placeholder='Metodo de pago'
                            onChange={(e) => handleDatos(e)}
                            name="metodoDePago"
                            value={datos.metodoDePago}
                        >
                        </input>
                        <input
                            type="text"
                            className="form-item col-12"
                            placeholder='Delivery o Pick up'
                            onChange={(e) => handleDatos(e)}
                            name="deliveryOPickup"
                            value={datos.deliveryOPickup}
                        >
                        </input>
                        <input
                            type="text"
                            className="form-item col-12"
                            placeholder='Direccion del Delivery'
                            onChange={(e) => handleDatos(e)}
                            name="direccion"
                            value={datos.direccion}
                        >
                        </input>
                        <button className='btn btn-dark' type='submit' value="Send">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormOrder;