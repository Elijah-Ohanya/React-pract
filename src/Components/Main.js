import React from 'react'

const Main = (prop) => {
  return (
    <main>
      {
        prop.list.map(obj => {
          return (
            <h1 key={obj.id}>
              {obj.name}
            </h1>
          )
        })
      }
     </main>
  )
}

export default Main;