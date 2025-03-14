import React, { createContext, useReducer} from 'react'

export const DataContext = createContext();

function DataProvider({children, reducer, initialState}) {
  const [state ,dispatch]=useReducer(reducer,initialState)

  return (
    <div>
      <DataContext.Provider value={{state,dispatch}} >
{children}



      </DataContext.Provider>





    </div>
  )
}

export default DataProvider
