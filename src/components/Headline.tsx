interface HeadlineProps {
    children: React.ReactNode
}

export function Headline({ children }: HeadlineProps) {
    return <h2 className="text-purple">{children}</h2>
}
