import React, {Component} from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/css/style.css';

import Navigation from "./components/Navigation";
import Index from "./components/Index";

class App extends Component {
	render() {
		return(
			<BrowserRouter>
				<Navigation />
				<Routes>
					<Route path="/" element={<Index />} />
				</Routes>
			</BrowserRouter>
		);
	}
}

export default App;