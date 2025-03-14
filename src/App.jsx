import React, { useContext,useEffect  } from 'react'
import { DataContext } from './components/DataProvider/DataProvider'
import { Type } from './Utility/Action.type'
import { auth } from './Utility/Firebase'
import Router from './Router'

function App() {
  const {state,dispatch}=useContext(DataContext)
  const {user,basket}=state
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser)
        dispatch({
          type: Type.SET_USER,
          user:authUser
        })
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        })
    }
  })  
  },[])
 

  return (
    <>
    <Router />


    </>
  )
}

export default App
