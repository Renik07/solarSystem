import React from 'react';
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { meshBounds, OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Solar = ({ isMobile }) => {
	const solarSystem = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
			<hemisphereLight intensity={0.15} 
				groundColor="black"/> 
			<pointLight intensity={1} />
			<spotLight 
				position={[-20, 150, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<primitive 
				object={solarSystem.scene} 
				scale={isMobile ? 0.7 : 0.75}
				position={[0, -2, 0]}
				rotation={[0.1, -5.5, -0.1]}
			/>
		</mesh>
  )
}

const SolarCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 500px)');

		setIsMobile(mediaQuery.matches);

		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		}

		mediaQuery.addEventListener('change', handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener('change', handleMediaQueryChange);
		}

	}, [])

	return (
		<Canvas
			frameloop='demand'
			shadows
			camera={{position: [20, 3, 5], fov: 25}}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls 
					autoRotate
					autoRotateSpeed={0.3}
					enableZoom={false} 
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Solar isMobile={isMobile} />
			</Suspense>
			<Preload all />
		</Canvas>
	)
}

export default SolarCanvas;