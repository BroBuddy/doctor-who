interface HeadlineProps {
    children: React.ReactNode
}

export function Headline({ children }: HeadlineProps) {
    return <h3 className="text-purple">{children}</h3>
}
