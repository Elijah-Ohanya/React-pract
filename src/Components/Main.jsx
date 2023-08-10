import React from "react";

const Main = (prop) => {
  const ronal='ronaldo'
  const listofplayers=['messi','neymar',ronal]
  return (
    <main
      style={{
        minHeight: "80vh",
        backgroundColor: "gray",
        color: "white",
        fontSize: "22px",
      }}
    >
          <h1>{prop.mainname}</h1> 
{/* render list in react */}
          <div>
              {
                  prop.data.map(eobj => {
                      console.log(eobj)

                      return (
                          <div key={eobj.id}>
                              <h1>{eobj.item} { eobj.id}</h1><hr />
                          </div>
                      );
                  })
        }
         <ul>
          {
            listofplayers.map(player => {
              console.log(player)
              return (
                
                <div>
                  <h1>{player}</h1><br /><hr />
                </div>
                
              )
            })
          }
        </ul>
          </div>
      
       
    </main>
  );
};

export default Main;
