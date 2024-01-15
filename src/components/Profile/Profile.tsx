import './Profile.css'
import jeremu from '../../assets/image-jeremy.png'
import { ComponentProps } from 'react'
import { useTimeFrameContext } from '../../context/SelectedTimeframeContext'

interface ProfileProps extends ComponentProps<'div'>{}

const timeframes = [
    'daily',
    'weekly',
    'monthly'
]as const

export function Profile({...props}: ProfileProps) {
    const { globalTimeframeSelected, setGlobalTimeframeSelected } = useTimeFrameContext()

    return (
        <div 
            {...props}
        >
            <div className='profile-background'>
                <div>
                    <img src={jeremu} alt="image jeremu" />
                </div>
                <div className='profile-background-content'>
                    <strong>Report for</strong>
                    <span>Jeremu Robson</span>
                </div>
            </div>
            <div className='profile-background-buttons'>
                {
                    timeframes.map(timeframe => (
                        <button 
                            className={globalTimeframeSelected == timeframe ? 'selected' : ''}
                            onClick={() => setGlobalTimeframeSelected(timeframe)}>
                            {timeframe}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}