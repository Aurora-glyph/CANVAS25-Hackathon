import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const PARTICLE_COUNT = 1000; // Drastically reduced for performance

const ParticleWave = (props) => {
    const ref = useRef();

    const [sphere, colors] = useMemo(() => {
        const points = random.inSphere(new Float32Array(PARTICLE_COUNT * 3), { radius: 1.2 });
        const colors = new Float32Array(PARTICLE_COUNT * 3);
        const colorOptions = [
            [1.0, 1.0, 1.0],    // White
            [0.98, 0.75, 0.14], // Gold
            [0.58, 0.0, 0.83],  // Purple
        ];

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
            colors[i * 3] = color[0];
            colors[i * 3 + 1] = color[1];
            colors[i * 3 + 2] = color[2];
        }
        return [points, colors];
    }, []);

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 30;
        ref.current.rotation.y -= delta / 35;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} colors={colors} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.01}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const FluxOcean = () => {
    return (
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_#2e1065_0%,_#000000_100%)]">
            <Canvas
                camera={{ position: [0, 0, 1] }}
                dpr={1}
                performance={{ min: 0.5 }}
                frameloop="demand"
                gl={{
                    antialias: false,
                    powerPreference: 'high-performance',
                    alpha: false,
                    stencil: false,
                    depth: false
                }}
            >
                <ParticleWave />
            </Canvas>
        </div>
    );
};

export default FluxOcean;
