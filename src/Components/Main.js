import React from 'react'

const Main = (prop) => {
  return (
      <main>
          <h1>
              {
                  prop.names.map(obj => {
                      return (
                          <h1 key={obj.id}>
                              {
                                  obj.name
                              }
                          </h1>
                      )
                  })
              }
          </h1>
    </main>
  )
}

export default Main