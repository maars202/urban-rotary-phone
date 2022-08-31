// import { Accordion } from '@mui/material'
import Accordion from '../components/Accordian'
import React from 'react'

type Props = {}

const Elections = (props: Props) => {

  const upcomingElections = [{"electionName": "Upstate Elections", "date": "02/04/2022"}]

  const otherElections = [{"electionName": "New York State Elections", "date": "04/04/2022"}, 
  {"electionName": "Japan Elections", "date": "07/04/2022"},
  {"electionName": "Singapore Elections", "date": "10/04/2022"}]
  return (
    <div className='bg-green-200'>
      <div className='bg-yellow-200'>
      <p className='text-xl font-bold my-4'>Upcoming Elections:</p>
      {upcomingElections.map((item, idx) => {
        return (
          <Accordion />
        )
      })
      }
      </div>
      <p className='text-xl font-bold my-4'>Other Elections:</p>
      <div className='bg-pink-200'>
      {otherElections.map((item, idx) => {
        return (
          <Accordion />
        )
      })
      }
      </div>

      


    </div>
  )
}

export default Elections