import { ComponentProps } from 'react';
import './CardBackground.css'

interface CardBackgroundProps extends ComponentProps<'div'> {}

export function CardBackground({ className, ...props }: CardBackgroundProps) {
    return (
        <div 
            className={`background ${className}`}
            {...props}
        />
    )
}