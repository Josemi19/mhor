import React from 'react';
import "../../styles/order.css"

const Order = () => {
    return (
        <>
            <div className='container'>
                <header className='encabezado'>
                    <div>
                        <h1>Haz Tu Orden</h1>
                    </div>
                </header>
                <div>Haz tu orden y nos comunicaremos contigo lo mas rapido posible (Actualmente solo contamos con envios nacionales)</div>
                <div className='formulario'>
                    <form>
                        <div>
                            <input type="text" className='form-item' placeholder='Nombre'></input>
                            <input type="text" className="form-item" placeholder='Email'></input>
                        </div>
                        <input type="text" className="form-item" placeholder='Nombre de los Productos'></input>
                        <input type="text" className="form-item" placeholder='Numero de Telefono'></input>
                        <input type="text" className="form-item" placeholder='Metodo de pago'></input>
                        <input type="text" className="form-item" placeholder='Delivery o Pick up'></input>
                        <input type="text" className="form-item" placeholder='Direccion del Delivery'></input>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Order;