import { Headline } from './Headline'

type CardProps = {
    icon?: string
    headline?: string
    children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ icon, headline, children }) => {
    return (
        <div className="flex flex-col bg-white rounded px-4 pb-4 my-4">
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
