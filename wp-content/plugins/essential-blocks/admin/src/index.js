import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Checkbox from "./components/Checkbox";

const EssentialAdmin = () => (
	<div>
		<Header />
		<Checkbox />
	</div>
);

ReactDOM.render(<EssentialAdmin />, document.getElementById("admin-root"));
