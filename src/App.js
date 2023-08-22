const App = () => {
  class Player {
    constructor(id, name) {
      this.id = id;
      this.name = name;
    }
  }

  const harlaan = {
    id: "4",
    name: "harlaan",
  };

  const messi = new Player(1, "messi");
  const ronaldo = new Player(2, "ronaldo");
  const neymar = new Player(3, "neymar");
  const db = [messi, ronaldo, neymar, harlaan];
  console.log(db);
  return (
    <ul>
      {
        db.map(obj => {
          return (
            <li key={obj.id}><b>
              {
                obj.name
              }
            </b><hr/>
            </li>
          )
        })
      }
    </ul>
  );
};
export default App;
