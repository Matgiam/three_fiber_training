import { Link } from "react-router";
import Home from "../pages/Home";
import Model from "../pages/model";
import "../styling/index.css";
function Navigation() {
	return (
		<div className="navigation">
			<ul>
				<li>
					<Link to="/model">Lights</Link>
				</li>
				<li>
					<Link to="/model">Textures</Link>
				</li>
				<li>
					<Link to="/model">Loading 3D model</Link>
				</li>
			</ul>
			<Link to="/">
				<h1>THREE FIBER DEMO</h1>
			</Link>
		</div>
	);
}

export default Navigation;
