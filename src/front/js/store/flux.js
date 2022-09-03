const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			carteras: [],
			orden: JSON.parse(localStorage.getItem("orden")) || []
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
				localStorage.setItem("orden", JSON.stringify(store.orden))
			}
		}
	};
};

export default getState;
