import { Link } from 'react-router-dom'

type Props = {
    path: string
    tag: string
}

const RuleLink = ({ path, tag }: Props) => {
    return (
        <Link
            to={`/${path}/${tag}`}
            className="px-2 py-1 w-4 bg-light-blue rounded mr-1 mb-1 text-center"
        >
            <span className="text-sm">{tag}</span>
        </Link>
    )
}

export default RuleLink
