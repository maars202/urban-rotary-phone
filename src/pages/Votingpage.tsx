// import { Accordion } from '@mui/material'
import Accordionoption from '../components/Accordianoption'
import React from 'react'

type Props = {}

const Votingpage = (props: Props) => {

  const upcomingElections = [{"electionName": "Upstate Elections", "date": "02/04/2022"}]

  const otherElections = [
  {"name": "New York State Elections", "age": "04/04/2022", "party": "", "education": ""}, 
  {"name": "New York State Elections", "age": "04/04/2022", "party": "", "education": ""}, 
  {"name": "New York State Elections", "age": "04/04/2022", "party": "", "education": ""}, ]
  return (
    <div className=''>
      <p className='text-xl font-bold my-4'>Other Elections:</p>
      <div className=''>
      {otherElections.map((item, idx) => {
        const {name, age, party, education} = item
        return (
          <Accordionoption name={name} age={age} party={party} education={education}/>
        )
      })
      }
      </div>

      


    </div>
  )
}

export default Votingpage