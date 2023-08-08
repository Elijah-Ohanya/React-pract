import React from "react";

const Main = (prop) => {
  return (
    <main
      style={{
        minHeight: "80vh",
        backgroundColor: "gray",
        color: "white",
        fontSize: "22px",
      }}
    >
          <h1>{prop.mainname}</h1> <hr />
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
          </div>
      
       
    </main>
  );
};

export default Main;
