import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Models from "../component/Models";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Models />
		</>
	);
};
