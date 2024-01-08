import './App.css'


import { Card } from './components/Card/Card'
import { Work } from './components/Icons/Work'
import { Play } from './components/Icons/Play'
import { Study } from './components/Icons/Study'
import { Exercise } from './components/Icons/Exercise'
import { Social } from './components/Icons/Social'
import { Selfcare } from './components/Icons/Selfcare'
import { Profile } from './components/Profile/Profile'

export function App() {
  

  return (
    <div className='geral-content grid'>
      
      <Profile
        className='item-1'
      />

      <Card
        title='Work'
        hours={32}
        background={<Work />}
        className='item-2'
      />
      <Card
        title='Play'
        hours={10}
        background={<Play />}
        className='item-3'
      />
      <Card
        title='Study'
        hours={4}
        background={<Study />}
        className='item-4'
      />
      <Card
        title='Exercise'
        hours={4}
        background={<Exercise />}
        className='item-5'
      />
      <Card
        title='Social'
        hours={5}
        background={<Social/>}
        className='item-6'
      />
      <Card
        title='Selfcare'
        hours={2}
        background={<Selfcare />}
        className='item-7'
      />
    </div>
  )
}

