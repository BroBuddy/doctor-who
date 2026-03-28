interface HeadlineProps {
    children: React.ReactNode
}

export function Headline({ children }: HeadlineProps) {
    return (
        <h2 className="uppercase tracking-widest text-[#7eb87e] border border-white rounded-[15px] px-3 py-1 inline-block mb-4 mx-1">
            {children}
        </h2>
    )
}
