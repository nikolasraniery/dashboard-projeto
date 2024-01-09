import './App.css'

import { useState, useEffect } from 'react'

import { Card } from './components/Card/Card'
import { Work } from './components/Icons/Work'
import { Play } from './components/Icons/Play'
import { Study } from './components/Icons/Study'
import { Exercise } from './components/Icons/Exercise'
import { Social } from './components/Icons/Social'
import { Selfcare } from './components/Icons/Selfcare'
import { Profile } from './components/Profile/Profile'

const url = "http://localhost:3000/dashboard"

export function App() {

  const [dashboardData, setDashboardData] = useState([])

  useEffect(() => {
    async function getData() {
      const res = await fetch(url);

      const data = await res.json()

      setDashboardData(data)
    }

    getData()
  }, [])

  const iconComponents = {
    Work: Work,
    Play: Play,
    Study: Study,
    Exercise: Exercise,
    Social: Social,
    Selfcare: Selfcare,
  }


  console.log(dashboardData)

   return (
    <div className='geral-content grid'>
      
      <Profile className='item-1' />
      
      {dashboardData.map((item, index) => {
        const IconComponent = iconComponents[item.title];
        const formattedTitle = item.title.toLowerCase();

        return (
          <Card
            key={index}
            title={item.title}
            hoursCurrent={item.timeframes.daily.current}
            hoursPrevious={item.timeframes.daily.previous}
            background={<IconComponent />}
            className={`item-${index + 2} ${formattedTitle}`}
          />
        );
      })}
    </div>
  )
}

