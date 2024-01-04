import './App.css'

import Exercise from './assets/icon-exercise.svg'
import Play from './assets/icon-play.svg'
import Selfcare from './assets/icon-self-care.svg'
import Social from './assets/icon-social.svg'
import Study from './assets/icon-study.svg'

import { Card } from './components/Card/Card'
import { Work } from './components/Icons/Work'
import { Profile } from './components/Profile/Profile'

export function App() {
  

  return (
    <div className='geral-content'>
      
      <Profile/>

      <Card
        title='Work'
        hours={32}
        background={<Work />}
      />
      <Card
        title='Play'
        hours={10}
        background={Play}
      />
      <Card
        title='Study'
        hours={4}
        background={Study}
        className='study'
      />
      <Card
        title='Exercise'
        hours={4}
        background={Exercise}
        className='exercise'
      />
      <Card
        title='Social'
        hours={5}
        background={Social}
        className='social'
      />
      <Card
        title='Self Care'
        hours={2}
        background={Selfcare}
        className='selfcare'
      />
    </div>
  )
}

