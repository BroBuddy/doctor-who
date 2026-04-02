import React, { useState, useEffect } from 'react'

interface CroppedImageProps {
    src: string
    height?: number | string
    width?: number | string
    backgroundPosition?: 'top' | 'center' | 'bottom' | string
    borderRadius?: number | string
    fallback?: string
}

const CroppedImage: React.FC<CroppedImageProps> = ({
    src,
    height = 250,
    width = '100%',
    backgroundPosition = 'center',
    borderRadius = 0,
    fallback = '#ccc',
}) => {
    const [imgSrc, setImgSrc] = useState<string>(src)

    useEffect(() => {
        if (!src) return

        const img = new Image()
        img.src = src
        img.onload = () => setImgSrc(src)
        img.onerror = () => fallback && setImgSrc(fallback)
    }, [src, fallback])

    const style: React.CSSProperties = {
        width,
        height,
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: 'cover',
        backgroundPosition,
        overflow: 'hidden',
        borderRadius,
    }

    return <div style={style}></div>
}

export default CroppedImage
