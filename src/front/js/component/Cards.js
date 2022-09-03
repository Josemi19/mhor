import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import "../../styles/cards.css"
import { Cloudinary } from 'cloudinary-core';

const Cards = () => {
    const { store, actions } = useContext(Context)
    const cl = new Cloudinary({ cloud_name: "drwck4b6d", secure: true });
    return (
        <>
            <div className='row'>
                {store.carteras != "" ? (
                    store.carteras.map((cartera) => {
                        return (
                            <div className='col-6 col-md-3' key={cartera.id}>
                                <div className="card">
                                    <img src={cartera.foto} className="card-img-top card-img" alt={cartera.nombre} />
                                    <div className="card-body">
                                        <p className="card-text">{cartera.nombre}</p>
                                        <p className="card-text">{cartera.caracteristicas}</p>
                                        <p className="card-text">{cartera.precio}</p>
                                    </div>
                                    <button className="btn btn-dark" onClick={() => { actions.agregarOrden(cartera.nombre) }}>Agregar a la orden</button>
                                </div>
                            </div>
                        )
                    })
                )
                    :
                    <h1>Somethin went wrong. Sorry</h1>
                }
            </div>
        </>
    );
};

export default Cards;