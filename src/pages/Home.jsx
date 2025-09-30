import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { PerspectiveCamera } from "three";

function Home() {
	const RotatingCube = () => {
		const ref = useRef();
		useFrame(() => {
			if (ref.current) {
				ref.current.rotation.x += 0.005;
				ref.current.rotation.y += 0.005;
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
		<Canvas style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <perspectiveCamera position={[1,1,1]}/>
			<OrbitControls enableRotate={true} />
			<directionalLight color={"#890ca1"} position={[1, 1, 1]} />
			<directionalLight color={"#890ca1"} position={[1, -2, -5]} />
			<ambientLight color={"#890ca1"} intensity={0.7} />
			<RotatingCube />
		</Canvas>
	);
}
export default Home;
