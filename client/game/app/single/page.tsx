'use client'
'use client'
import React, { useEffect, useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Model } from '@/components/Plus'
import Torus from '@/components/Torus'
import { Environment, MeshReflectorMaterial, MeshRefractionMaterial, MeshTransmissionMaterial, OrbitControls } from '@react-three/drei'
import { boardData } from '@/components/tester'
import * as THREE from 'three'
import { useControls } from 'leva'

const Box = ({ position, value, click, status }: any) => {
    const [showBox, setShowBox] = useState(true)
    const material = {

        thickness: 0,

        roughness:0,

        transmission: 1,

        ior: .5,

        chromaticAberration: .62,

        backside:false,

    }
    return (
        <mesh
            position={position}
            onClick={() => {
                click();
                /* !status ? setShowBox(false) : null */
            }}
        >
            {value === 'X' && <Model position={[0, 0, .4]} scale={[.2, .2, .2]} />}
            {value === 'O' && <Torus position={[0, 0, .4]} scale={[.2, .2, .2]} />}
            {
                showBox == true && (
                    <>
                        <boxGeometry args={[1, 1, 0.1]} />{/* 
                        <MeshReflectorMaterial color="#a0a0a0"
                            depthToBlurRatioBias={0.2}
                            maxDepthThreshold={1.2}
                            metalness={0.5}
                            minDepthThreshold={0.8}
                            mirror={.5}
                            mixBlur={10}
                            mixStrength={2}
                            resolution={1024}
                            roughness={1} /> */}
                           
                           
                        <MeshTransmissionMaterial 
                        ior={.5}
                        chromaticAberration={.62}
                        backside={false}
                        thickness={0}
                        transmission={1}/>
                        

                    </>
                )
            }
        </mesh>
    )
}

function Page() {
    const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null))
    const [isX, setIsX] = useState(true)

    const handleClick = (index: number) => {
        const newBoard = [...board]
        if (newBoard[index] || winner) return

        newBoard[index] = isX ? 'X' : 'O'
        setBoard(newBoard)
        setIsX(!isX)
    }

    const winnerCalculate = (board: (string | null)[]) => {
        const possibilities = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let i = 0; i < possibilities.length; i++) {
            const [a, b, c] = possibilities[i]
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a]
            }
        }
        return null
    }

    useEffect(() => {
        boardData(board)
    }, [board])

    const winner = winnerCalculate(board)
    const status = winner ? `Winner: ${winner}` : `Player: ${isX ? 'X' : 'O'}`

    const positions = [
        [-1, 1, 0],
        [0, 1, 0],
        [1, 1, 0],
        [-1, 0, 0],
        [0, 0, 0],
        [1, 0, 0],
        [-1, -1, 0],
        [0, -1, 0],
        [1, -1, 0],
    ]

    return (
        <div className='h-screen flex justify-center flex-col items-center'>
            <h1 className='text-3xl mb-4 text-white'>{status}</h1>
            <Canvas>
                <ambientLight intensity={1} />
                <directionalLight intensity={5} position={[0, 5, 10]} />
                <OrbitControls enableZoom={false} />
                {board.map((value, index) => (
                    <Box
                        key={index}
                        position={positions[index]}
                        value={value}
                        status={winner}
                        click={() => handleClick(index)}
                    />
                ))}
            </Canvas>
        </div>
    )
}

export default Page
