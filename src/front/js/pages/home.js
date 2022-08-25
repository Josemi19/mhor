import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Cards from "../component/Cards";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Cards />
		</>
	);
};
