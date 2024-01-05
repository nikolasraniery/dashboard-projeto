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
        background={<Play />}
      />
      <Card
        title='Study'
        hours={4}
        background={<Study />}
      />
      <Card
        title='Exercise'
        hours={4}
        background={<Exercise />}
      />
      <Card
        title='Social'
        hours={5}
        background={<Social/>}
      />
      <Card
        title='Selfcare'
        hours={2}
        background={<Selfcare />}
      />
    </div>
  )
}

