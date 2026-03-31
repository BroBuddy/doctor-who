import { Headline } from './Headline'
import './Card.scss'

type CardProps = {
    icon?: string
    headline?: string
    children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ icon, headline, children }) => {
    return (
        <div className="card">
            {headline && (
                <Headline>
                    {icon && <span className="mr-1">{icon}</span>}
                    {headline}
                </Headline>
            )}

            {children}
        </div>
    )
}

export default Card
