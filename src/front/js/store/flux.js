const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			carteras: [],
			orden: JSON.parse(sessionStorage.getItem("orden")) || [],
			precios: JSON.parse(sessionStorage.getItem("precios")) || []
		},
		actions: {

			getCarteras: async () => {
				const store = getStore()
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/mhor/carteras`)
					if (response.ok) {
						const data = await response.json()
						setStore({
							...store,
							carteras: data
						})
					}
				}
				catch (error) {
					console.log(error, "Algo salio mal")
				}
			},

			agregarOrden: (cartera) => {
				let store = getStore()
				setStore({
					...store,
					orden: [...store.orden, cartera]
				})
				sessionStorage.setItem("orden", JSON.stringify(store.orden))
			},

			agregarPrecio: (precio) => {
				let store = getStore()
				setStore({
					...store,
					precios: [...store.precios, precio]
				})
				sessionStorage.setItem("precios", JSON.stringify(store.precios))
			}
		}
	};
};

export default getState;
