import { Link } from 'react-router-dom'

const matrix: string[][] = [
    ['A001', 'A002', 'A003', 'A004', 'A005', 'A006'],
    ['A007', 'A008', 'A009', 'A010', 'A011', 'A012'],
    ['A013', 'A014', 'A015', 'A016', 'A017', 'A019'],
    ['A020', 'A021', 'A023', 'A024', 'A020', 'A021'],
    ['A001', 'A002', 'A003', 'A004', 'A005', 'A013'],
    ['A007', 'A014', 'A009', 'A015', 'A011', 'A017'],
]

function AdventureMatrix() {
    const size = matrix.length

    return (
        <table className="text-center">
            <thead>
                <tr>
                    <th className="text-md px-2">1D6</th>
                    {Array.from({ length: size }, (_, i) => (
                        <th key={i} className="text-md px-2">
                            {i + 1}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {matrix.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        <th className="text-md px-2">{rowIndex + 1}</th>
                        {row.map((tag: string, colIndex) => (
                            <td key={colIndex} className="text-md">
                                <Link to={`/adventure/${tag}`}>{tag}</Link>
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default AdventureMatrix
