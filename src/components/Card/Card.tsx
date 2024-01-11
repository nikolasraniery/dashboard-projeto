import { ReactNode, useState } from 'react';
import { CardBackground } from '../CardBackground/CardBackground';
import './Card.css'
import { Timeframe } from '../../interfaces/Timeframe';

interface CardProps extends React.SVGProps<SVGSVGElement> {
    title: string;
    timeframes: Timeframe;
    background?: ReactNode;
    className?: string;
}

type TimeFramesTypes = keyof Timeframe

export function Card({ id, title, timeframes, background }: CardProps) {

    const [selectedTimeframe, setSelectedTimeframe] = useState<TimeFramesTypes>('daily')
    const [showDropdownMenu, setShowDropdownMenu] = useState(false)

    function handleSelectedTimeframe(currentTimeframe: TimeFramesTypes) {
        setSelectedTimeframe(currentTimeframe)
        setShowDropdownMenu(false)
    }

    return (

        <div key={id} className='card col'>
            <CardBackground className={title.toLocaleLowerCase()}>
                {background}
            </CardBackground>
            <div className='card-content'>
                <div className='card-content-left'>
                    <strong>{title}</strong>
                    <button
                        onClick={() => setShowDropdownMenu(!showDropdownMenu)}
                    >
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
                    <strong>{timeframes[selectedTimeframe].current}hrs</strong>
                    <span>Last {selectedTimeframe} - {timeframes[selectedTimeframe].previous}hrs</span>
                </div>
                {
                    showDropdownMenu && (
                    <ul className='dropdownMenu'>
                        <li>
                            <button
                                onClick={() => handleSelectedTimeframe("daily")}
                            >
                                Daily
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleSelectedTimeframe("weekly")}
                            >
                                Weekly
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => handleSelectedTimeframe("monthly")}
                            >
                                Monthly
                            </button>
                        </li>

                    </ul>
                    )
                }
            </div>
        </div>
        
    )
}