'use client'
import React, { useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Model } from '@/components/Plus'
import Torus from '@/components/Torus'
import { OrbitControls } from '@react-three/drei'
const Box = ({ click, value }: any) => {

    return (
        <div className='col-span-1 rounded-lg h-[120px] w-[120px] md:h-[150px] md:w-[150px]    border border-[red] cursor-pointer ' onClick={click}>
            {value === "X" ? (
                <Canvas>
                   
                    <directionalLight intensity={15} color={'blue'} position={[1, 1, 20]} />
                    <OrbitControls enableZoom={false} />
                    <Model />
                </Canvas>
            ) :value==="O" ?
                (
                    <Canvas>

                        <directionalLight intensity={15} color={'blue'} position={[1, 1, 20]} />
                        <OrbitControls enableZoom={false} />
                        <Torus />
                    </Canvas>
                ):null

            }
        </div>
    )
}
function Page() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [isX, setIsX] = useState(true)
    const handleClick = (index: number) => {

        const newBoard = [...board]
        if (newBoard[index] || winner) return;

        newBoard[index] = isX ? 'X' : 'O'
        setBoard(newBoard)
        setIsX(!isX)

    }
    const winnerCalculate = (board: (string | null)[]) => {
        const posiblities = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let i = 0; i < posiblities.length; i++) {
            const [a, b, c] = posiblities[i]
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a]
            }
        }
        return null
    }
    const winner = winnerCalculate(board);
    const status = winner ? `Winner: ${winner}` : `player: ${isX ? 'X' : 'O'}`;

    return (
        <div className='h-screen flex justify-center flex-col items-center'>
            <h1 className='text-3xl mb-4 text-white'>{status}</h1>
            <div className='  grid    grid-cols-3 grid-rows-3 '>
                {
                    board.map((value, index) => (

                        <Box key={index} click={() => handleClick(index)} value={value} />
                    ))
                }


            </div>

        </div>
    )
}

export default Page