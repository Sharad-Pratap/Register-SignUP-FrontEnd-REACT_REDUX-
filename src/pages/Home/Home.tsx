import { Button } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { defaultState } from '../../slice/authSlice';
import App from '../../App';
import { stat } from 'fs';
import { useAppSelector } from '../../app/hooks';

const Home = () => {
  const {name} = useAppSelector(state => state.auth)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signOut=()=>{
    localStorage.removeItem('token')
    navigate('/signin')
    dispatch(defaultState())
  }
  return (
    <div>
      User Name : {name}
      <Button onClick={() => {
        signOut()
      }}>Logout</Button>
    </div>
  )
}

export default Home 