/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Torus(props: any) {
    const { nodes, materials } = useGLTF('/torus.glb')
    const refer = useRef(null)

    return (
        <group {...props} dispose={null}>
            <mesh
                ref={refer}
                castShadow
                receiveShadow
                geometry={nodes.Torus001.geometry}
                material={materials['Material.001']}
                position={[0, .5, 1.5]}
                scale={2.2}
                rotation={[Math.PI / 2.2, 1, 0]}
            />
        </group>
    )
}

useGLTF.preload('/torus.glb')
