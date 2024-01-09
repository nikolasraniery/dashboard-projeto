import { ReactNode } from 'react';
import { CardBackground } from '../CardBackground/CardBackground';
import './Card.css'

interface CardProps extends React.SVGProps<SVGSVGElement> {
    title: string;
    hoursCurrent: number;
    hoursPrevious: number;
    background?: ReactNode;
    className?: string;
}


export function Card({ id, title, hoursCurrent, hoursPrevious, background }: CardProps) {
    return (

        <div key={id} className='card col'>
            <CardBackground className={title.toLocaleLowerCase()}>
                {background}
            </CardBackground>
            <div className='card-content'>
                <div className='card-content-left'>
                    <strong>{title}</strong>
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
                    
                </div>
                <div className='card-content-right'>
                    <strong>{hoursCurrent ?? hoursPrevious}hrs</strong>
                    <span>Last Week - {hoursCurrent ?? hoursPrevious}hrs</span>
                </div>
            </div>
        </div>
        
    )
}