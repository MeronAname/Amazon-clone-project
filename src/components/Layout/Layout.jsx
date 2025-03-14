import React from 'react'
import Header from "../../components/Header/Header"
function LayOut({children}) { //children...c should be small letter all the time.
  return ( 
    <div>
      <Header/>
      {children}
    </div>
  )
}

export default LayOut

