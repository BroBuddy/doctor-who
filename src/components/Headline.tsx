interface HeadlineProps {
    children: React.ReactNode
}

export function Headline({ children }: HeadlineProps) {
    return <h3 className="text-light-blue p-0 my-1 mt-2 mb-2">{children}</h3>
}
