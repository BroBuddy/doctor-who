interface HeadlineProps {
    children: React.ReactNode
}

export function Headline({ children }: HeadlineProps) {
    return <h3 className="text-purple p-0 my-1 mt-5 mb-2">{children}</h3>
}
