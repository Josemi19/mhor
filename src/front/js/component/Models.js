import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import "../../styles/models.css"
import { Cloudinary } from 'cloudinary-core';

const Models = () => {
    const { store, actions } = useContext(Context)
    const cl = new Cloudinary({ cloud_name: "drwck4b6d", secure: true });
    return (
        <>
            <div className='row'>
                {store.carteras != "" ? (
                    store.carteras.map((cartera) => {
                        return (
                            <div className='col-12 col-md-3' key={cartera.id}>
                                <figure className="image-block">
                                    <h1>{cartera.nombre}</h1>
                                    <img src={cartera.foto} alt={cartera.nombre} />
                                    <figcaption>
                                        <h3>
                                            Descripción
                                        </h3>
                                        <p>{cartera.caracteristicas}</p>
                                        <p>Precio: ${cartera.precio}</p>
                                        <button onClick={() => { actions.agregarOrden(cartera.nombre), actions.agregarPrecio(cartera.precio) }}>
                                            Agregar al Pedido
                                        </button>
                                    </figcaption>
                                </figure>
                            </div>
                        )
                    })
                )
                    :
                    <div className='d-flex justify-content-center'>
                        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    </div>
                }
            </div>
        </>
    );
};

export default Models;