const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			carteras: [],
			orden: JSON.parse(sessionStorage.getItem("orden")) || [],
			// precios: JSON.parse(sessionStorage.getItem("precios")) || []
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
				console.log(store.orden[0])
				if (store.orden[0] == "") {
					console.log("entre al if")
					setStore({
						...store,
						orden: [cartera]
					})
					sessionStorage.setItem("orden", JSON.stringify(store.orden))
				} else {
					console.log("no entre al if")
					setStore({
						...store,
						orden: [...store.orden, cartera]
					})
					sessionStorage.setItem("orden", JSON.stringify(store.orden))
				}
			},

			quitarOrden: (name) => {
				let store = getStore()
				let newOrden = store.orden.filter(orden => orden.cartera !== name)
				setStore({
					...store,
					orden: newOrden
				})
				sessionStorage.setItem("orden", JSON.stringify(store.orden))
			}
		}
	};
};

export default getState;
