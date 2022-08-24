import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const Cards = () => {
    const { store, actions } = useContext(Context)
    return (
        <>
            <div className='row'>
                {store.carteras != "" ? (
                    store.carteras.map((cartera) => {
                        return (
                            <div className='col-6'>
                                <div className="card" key={cartera.id}>
                                    <img src={cartera.foto} className="card-img-top" alt={cartera.nombre} />
                                    <div className="card-body">
                                        <p className="card-text">{cartera.caracteristicas}</p>
                                        <p className="card-text">{cartera.nombre}</p>
                                        <p className="card-text">{cartera.precio}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )
                    :
                    <h1>Chao</h1>
                }
            </div>
        </>
    );
};

export default Cards;