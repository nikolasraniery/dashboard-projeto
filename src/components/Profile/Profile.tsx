import './Profile.css'
import jeremu from '../../assets/image-jeremy.png'
import { ComponentProps } from 'react'

interface ProfileProps extends ComponentProps<'div'>{}

export function Profile({...props}: ProfileProps) {
    return (
        <div 
            {...props}
        >
            <div className='profile-background'>
                <div>
                    <img src={jeremu} alt="image jeremy" />
                </div>
                <div className='profile-background-content'>
                    <strong>Report for</strong>
                    <span>Jeremy Robson</span>
                </div>
            </div>
            <div className='profile-background-buttons'>
                <button>Daily</button>
                <button>Weekly</button>
                <button>Monthly</button>
            </div>
        </div>
    )
}