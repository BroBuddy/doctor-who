import { useState, type ReactNode } from 'react'

export type TabItem = {
    label: string
    content: ReactNode
}

type TabsProps = {
    tabs: TabItem[]
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div>
            <div className="flex">
                {tabs.map((tab, index) => (
                    <button
                        key={tab.label}
                        className={`px-2 py-1 ${
                            index === activeIndex
                                ? 'bg-white text-bold'
                                : 'bg-gray'
                        }`}
                        onClick={() => setActiveIndex(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="p-4 bg-white">{tabs[activeIndex]?.content}</div>
        </div>
    )
}

export default Tabs
