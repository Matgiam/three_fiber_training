import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { PerspectiveCamera } from "three";
import Navigation from "../components/Navigation";

function Home() {
	const RotatingCube = () => {
		const ref = useRef();
		useFrame(() => {
			if (ref.current) {
				ref.current.rotation.y += 0.01;
			}
		});
		return (
			<mesh ref={ref}>
				<boxGeometry args={[1, 1, 1]} />
				<meshLambertMaterial color={"#db0cdb"} />
			</mesh>
		);
	};
	return (
		<div className="wrapper">
			<Canvas camera={{ position: [0, 0, 1.4], fov: 100 }}>
				<OrbitControls enableRotate={true} />
				<directionalLight color={"#890ca1"} position={[1, 1, 1]} />

				<ambientLight color={"#890ca1"} intensity={0.7} />
				<RotatingCube />
			</Canvas>
		</div>
	);
}
export default Home;
