import { useEffect, useRef, useState } from 'react'
import './Dice.scss'

type DiceProps = {
    dice?: number
    onRoll?: (result: number) => void
}

const Dice = ({ dice = 1, onRoll }: DiceProps) => {
    const defaultDice: string = '🎲'
    const [content, setContent] = useState<string>(defaultDice)
    const [isRolling, setIsRolling] = useState<boolean>(false)
    const timeoutRef = useRef<number | null>(null)
    const min = dice === 1 ? 1 : 2
    const max = dice === 1 ? 6 : 11

    const rollDice = (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const handleDiceClick = () => {
        if (isRolling) return

        setIsRolling(true)
        setContent(defaultDice)

        timeoutRef.current = setTimeout(() => {
            const number = rollDice(min, max)
            setContent(number.toString())
            setIsRolling(false)
            onRoll?.(number)

            timeoutRef.current = setTimeout(() => {
                resetDice()
            }, 1000)
        }, 300)
    }

    const resetDice = () => {
        setContent(defaultDice)
        setIsRolling(false)
        clearTimeRef()
    }

    const clearTimeRef = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    useEffect(() => {
        return () => {
            clearTimeRef()
        }
    }, [])

    return (
        <div
            style={{ zIndex: 9 }}
            className={`dice cursor-pointer ${isRolling ? 'active-dice' : ''}`}
            onClick={!isRolling ? handleDiceClick : undefined}
            role="button"
            aria-label="Roll the dice"
            aria-disabled={isRolling}
        >
            {content}
        </div>
    )
}

export default Dice
