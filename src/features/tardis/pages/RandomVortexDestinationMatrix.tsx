import { useState } from 'react'
import Card from '@/components/Card'
import { Headline } from '@/components/Headline'
import { Link } from 'react-router-dom'

function RandomVortexDestinationMatrix() {
    const matrix: string[][] = [
        ['A001', 'A002', 'A003', 'A004', 'A005', 'A006'],
        ['A007', 'A008', 'A009', 'A010', 'A011', 'A012'],
        ['A013', 'A014', 'A015', 'A016', 'A017', 'A019'],
        ['A020', 'A021', 'A023', 'A024', 'A020', 'A021'],
        ['A001', 'A002', 'A003', 'A004', 'A005', 'A013'],
        ['A007', 'A014', 'A009', 'A015', 'A011', 'A017'],
    ]

    const [result, setResult] = useState<{
        row: number
        col: number
        tag: string
    } | null>(null)

    const roll = () => {
        const row = Math.floor(Math.random() * 6)
        const col = Math.floor(Math.random() * 6)
        setResult({ row, col, tag: matrix[row][col] })
    }

    return (
        <Card>
            <Headline>TM02. Random Vortex Destination</Headline>

            <div className="mb-3">
                {!result && (
                    <span
                        onClick={roll}
                        className="pointer p-2 bg-dark-blue rounded text-white text-bold"
                    >
                        Roll 2D6
                    </span>
                )}

                {result && (
                    <>
                        <p className="text-sm">
                            Row <strong>{result.row + 1}</strong>, Column{' '}
                            <strong>{result.col + 1}</strong>
                        </p>

                        <Link
                            to={`/adventure/${result.tag}`}
                            className="p-2 bg-dark-blue rounded text-white text-sm"
                        >
                            {result.tag}
                        </Link>
                    </>
                )}
            </div>
        </Card>
    )
}

export default RandomVortexDestinationMatrix
