'use client'
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/Addons.js'
export interface GLTFResult extends GLTF {
  nodes: {
    Cube: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.Material
  }
}
export function Model(props: any) {
  const { nodes, materials } = useGLTF('/plus.glb') as unknown as GLTFResult
 
  
  const refer = useRef(null)
  const dampingFactor = 0.9; // Adjust damping factor (0 to 1)


  return (
    <group {...props} dispose={null}>
      <mesh
      onClick={()=>{
        console.log("clicked");
        
      }}
      
        castShadow
        ref={refer}
        receiveShadow
        geometry={nodes.Cube?.geometry}
        material={materials['Material.001']}
        position={[0, .5, 1]}
        scale={1.3}
        rotation={[Math.PI / 2.2, 1.7, 1.1]}
      />
    </group>
  )
}

useGLTF.preload('/plus.glb')
