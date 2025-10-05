import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Canvas } from "@react-three/fiber";

function SquirtleModel() {
	const gltf = useLoader(GLTFLoader, "/squirtle.glb");
	return <primitive object={gltf.scene} />;
}

function Model() {
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<Canvas camera={{ position: [0, 0.5, 2] }} >
				<ambientLight intensity={2} />

				<SquirtleModel />
			</Canvas>
		</div>
	);
}

export default Model;
