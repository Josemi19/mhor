import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import "../../styles/models.css"
import { Cloudinary } from 'cloudinary-core';

const Models = () => {
    const { store, actions } = useContext(Context)
    const cl = new Cloudinary({ cloud_name: "drwck4b6d", secure: true });
    const isInOrder = (name) => {
        let exist = store.orden.find(cartera => cartera.cartera === name)
        if (exist !== undefined) return true;
        return false;
    }

    useEffect(() => {
        isInOrder("Cartera 2")
    }, [store.orden.length])

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
                                        {isInOrder(cartera.nombre)
                                            ?
                                            <button onClick={() => {
                                                actions.quitarOrden(cartera.nombre)
                                            }}>
                                                Quitar del Pedido
                                            </button>
                                            :
                                            <button onClick={() => {
                                                actions.agregarOrden({
                                                    "cartera": cartera.nombre,
                                                    "precio": cartera.precio
                                                })
                                            }}>
                                                Agregar al Pedido
                                            </button>
                                        }
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