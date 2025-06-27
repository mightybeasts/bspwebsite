import React from 'react'
import Tournaments from '../components/Tournaments'
import { GroupStandings,Schedule,Bracket} from '../components'



function TornamentPage() {
  return (
    <div className='h-screen-max bg-primary'>
        <Tournaments/>
        {/* <GroupStandings/>
        <Schedule/>
        <Bracket/> */}
        </div>
  )
}

export default TornamentPage