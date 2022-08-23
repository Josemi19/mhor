const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			carteras: []
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
		}
	};
};

export default getState;
