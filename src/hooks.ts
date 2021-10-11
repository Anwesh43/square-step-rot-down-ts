import {CSSProperties, useEffect, useState} from 'react'

export const useAnimatedScale = () => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    const scGap : number = 0.02
    const delay : number = 20 
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev : number) => {
                        if (prev > 1) {
                            setAnimated(false)
                            return 0 
                        }
                        return prev + scGap 
                    })
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w, 
        h
    }
}

export const useStyle = (w : number, h : number, scale : number) => {
    const size : number = Math.min(w, h) 
    const sf : number = Math.sin(scale * Math.PI)
    const position = 'absolute'
    const background = 'indigo'
    return {
        squareStyle() : CSSProperties {
            const left = `${(w / 2 - size * 0.5) * (1 - sf)}px`
            const top = `${(h / 2 - size * 0.5 + (h / 2 - size * 0.5) * sf)}px`
            const transform = `rotate(${90 * sf}deg)`
            const width = `${size}px`
            const height = `${size}px`
            return {
                position, 
                background,
                width, 
                height, 
                left, 
                top, 
                transform
            }
        }
    }
}