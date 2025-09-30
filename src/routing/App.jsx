import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import "../styling/index.css";
import Home from "../pages/Home.jsx";
import Model from "../pages/model.jsx";
import Navigation from "../components/Navigation.jsx";
function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/model" element={<Model />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
