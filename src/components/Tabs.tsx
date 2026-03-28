import { useState, type ReactNode } from 'react'
import './Tabs.scss'

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
            <div className="tabs">
                {tabs.map((tab, index) => (
                    <span
                        key={tab.label}
                        className={`px-2 py-1 ${
                            index === activeIndex ? 'active' : ''
                        }`}
                        onClick={() => setActiveIndex(index)}
                    >
                        {tab.label}
                    </span>
                ))}
            </div>

            <div className="p-4">{tabs[activeIndex]?.content}</div>
        </div>
    )
}

export default Tabs
