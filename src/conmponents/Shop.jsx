import { Button, ButtonGroup } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import actionCreators from '../index'
function Shop() {
  const dispatch = useDispatch();

  return (
    <div>
        <ButtonGroup style={{display : 'flex' , justifyContent: 'center'}}>
            <Button color='secondary' variant='contained' onClick={()=>{dispatch.actionCreators.depositeMoney(100)}} >-</Button>
          &nbsp;  Deposite / WithDraw Money. &nbsp;
            <Button color="success" variant='contained' onClick={()=>{dispatch.actionCreators.withDrawMoney(100)}}>+</Button>
        </ButtonGroup>
    </div>
  )
}

export default Shop