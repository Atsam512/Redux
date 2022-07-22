import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

function Balance() {
  const amount = useSelector(state => state.amount)
  return (
    <div style={{float: 'right', marginTop: '10px', marginRight: '30px'}}>
         <Button variant='outlined' color='secondary'>Your Balance : {amount}</Button>
    </div>
  )
}

export default Balance