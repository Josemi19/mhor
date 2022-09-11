import React, { useContext, useEffect, useRef, useState } from 'react';
import "../../styles/order.css"
import { Context } from '../store/appContext';
import emailjs from "emailjs-com";

const FormOrder = () => {
    const { store, actions } = useContext(Context)


    const form = useRef();

    let carteras = store.orden.map((cartera) => {
        return cartera.cartera
    })

    let precios = store.orden.map((precio) => {
        return precio.precio
    })

    const total = precios.reduce((precio1, precio2) => precio1 + precio2, 0)

    let [datos, setDatos] = useState({
        nombre: "",
        email: "",
        productos: carteras,
        numeroTelefono: "",
        metodoDePago: "",
        deliveryOPickup: "",
        direccion: "",
        total2: total,
        datosDePago: ""
    })

    function handleDatos(e) {
        setDatos({ ...datos, [e.target.name]: e.target.value })
    }


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
                direccion: "",
                total2: total,
                datosDePago: ""
            })
            alert("Pedido realizado con exito, revise su correo para más información")
            sessionStorage.removeItem("orden")
        }
        catch (error) {
            console.log("Something Happened", error)
        }
    }

    const paymentData = () => {
        if (datos.metodoDePago == "Zelle") return setDatos({ ...datos, datosDePago: "correo@zelle.com" })
        if (datos.metodoDePago == "Pago Movil") return setDatos({ ...datos, datosDePago: "Mercantil, 042444, 27223" })
        if (datos.metodoDePago == "Paypal") return setDatos({ ...datos, datosDePago: "josemmorrone@gmail.com" })
    }

    useEffect(() => {
        paymentData()
    }, [datos.metodoDePago])


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
                            className="form-item col-12 col-md-7"
                            placeholder='Nombre de los Productos'
                            readOnly
                            value={carteras}
                            name="productos"
                        >
                        </input>
                        <input
                            type="text"
                            className="form-item col-12 col-md-7"
                            placeholder='Numero de Telefono'
                            onChange={(e) => handleDatos(e)}
                            name="numeroTelefono"
                            value={datos.numeroTelefono}
                        >
                        </input>
                        <div className='col-12 col-md-7'>
                            <select className="form-select"
                                aria-label="metodo de pago"
                                onChange={(e) => handleDatos(e)}
                                name="metodoDePago"
                            >
                                <option defaultValue>Metodo de Pago</option>
                                <option value="Zelle">Zelle</option>
                                <option value="Pago Movil">Pago Movil</option>
                                <option value="Paypal">Paypal</option>
                            </select>
                            <select className="form-select"
                                aria-label="delivery o pickup"
                                onChange={(e) => handleDatos(e)}
                                name="deliveryOPickup"
                            >
                                <option defaultValue>Delivery o Pickup</option>
                                <option value="Delivery">Delivery</option>
                                <option value="Pickup">Pickup</option>
                            </select>
                        </div>
                        <input
                            type="text"
                            className="form-item col-12 col-md-7"
                            placeholder='Direccion del Delivery'
                            onChange={(e) => handleDatos(e)}
                            name="direccion"
                            value={datos.direccion}
                        >
                        </input>
                        <input type="text" readOnly name="total" className='form-item col-12 col-md-7' value={`$${total}`}></input>
                        <input type="text" readOnly name="datosDePago" className='form-item col-12 col-md-7 d-none' value={datos.datosDePago}></input>
                        <div className='d-flex justify-content-center mt-2'>
                            <button className='btn btn-dark' type='submit' value="Send">
                                Procesar Orden
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormOrder;