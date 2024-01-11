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
import { api } from './api/api'
import { Timeframe } from './interfaces/Timeframe'


interface DarshboardItems {
  id: string;
  title: string;
  timeframes: Timeframe
}

type ICONS = {
  [key: string]: () => JSX.Element;
};

const iconComponents: ICONS= {
  Work,
  Play,
  Study,
  Exercise,
  Social,
  Selfcare,
}

export function App() {
  const [dashboardData, setDashboardData] = useState<Array<DarshboardItems>>([])

  useEffect(() => {
    async function getData() {
      const res = await api.get("/dashboard");
      const { data } = res

      setDashboardData(data)
    }

    getData()
  }, [])

   return (
    <div className='geral-content grid'>
      
      <Profile className='item-1' />
      
      {dashboardData.map((item, index) => {
        const formattedTitle = item.title.toLowerCase();
        const Icon = iconComponents[item.title]

        return (
          <Card
            background={<Icon />}
            key={index}
            title={item.title}
            timeframes={item.timeframes}
            className={`item-${index + 2} ${formattedTitle}`}
          />
        );
      })}
    </div>
  )
}

