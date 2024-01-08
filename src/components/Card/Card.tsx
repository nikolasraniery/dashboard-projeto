import { ReactNode } from 'react';
import { CardBackground } from '../CardBackground/CardBackground';
import './Card.css'

interface CardProps extends React.SVGProps<SVGSVGElement> {
    title: string;
    hours: number;
    background?: ReactNode;
    className?: string;
}


export function Card({ title, hours, background }: CardProps) {
    return (

        <div className='card col'>
            <CardBackground className={title.toLocaleLowerCase()}>
                {background}
            </CardBackground>
            <div className='card-content'>
                <div className='card-content-left'>
                    <strong>{title}</strong>
                    <span>{hours}hrs</span>
                </div>
                <div className='card-content-right'>
                    <button>
                        <svg 
                            width="21" 
                            height="5" 
                            xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" 
                                    fill="#BBC0FF" 
                                    fill-rule="evenodd"/>
                        </svg>
                    </button>
                    <span>Last Week - {hours}hrs</span>
                </div>
            </div>
        </div>
        
    )
}