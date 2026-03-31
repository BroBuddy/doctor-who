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

    return (
        <>
            <Headline>TM02. Random Vortex Destination Matrix</Headline>

            <Card>
                <p className="mb-0">
                    <strong>Roll 2D6:</strong> First die = Row, second die =
                    Column.
                </p>

                {matrix.map((row: string[], rowIndex: number) => (
                    <div key={rowIndex}>
                        <p className="mt-5">
                            <strong className="mr-1">
                                Roll {rowIndex + 1}:
                            </strong>
                        </p>
                        {row.map((tag: string, colIndex: number) => (
                            <span key={colIndex}>
                                <Link
                                    to={`/adventure/${tag}`}
                                    className="p-2 w-4 bg-light-blue rounded mr-1 mb-1 text-center"
                                >
                                    <span className="text-sm">{tag}</span>
                                </Link>
                            </span>
                        ))}
                    </div>
                ))}
            </Card>
        </>
    )
}

export default RandomVortexDestinationMatrix
