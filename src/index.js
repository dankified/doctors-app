import React from "react";
import App from "./components/App";
import { render } from "react-dom";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter} from "react-router-dom";
import './style.css';

let Root = function() {
	return (
	<BrowserRouter>
		<App />
	</BrowserRouter> 
	)
}

render(<Root />, document.getElementById("root"));
