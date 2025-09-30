import { Link } from "react-router";
import Home from "../pages/Home";
import Model from "../pages/model";
import "../styling/index.css";
function Navigation() {
	return (
		<div className="navigation">
			<ul>
				<li>
					<Link to="/model">3D model</Link>
				</li>
				<li>
					<Link to="/model">3D model</Link>
				</li>
				<li>
					<Link to="/model">3D model</Link>
				</li>
			</ul>
            <h1>THREE FIBER DEMO</h1>
		</div>
	);
}

export default Navigation;
