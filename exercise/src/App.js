import { PersonDetail } from "./Component/Function";
import "./App.css"
import { DataFetching } from "./Component/DataFetching";


function App() {
  
return(
  <div className="App">

      <header className="App-header">
        <PersonDetail />
        {/* <DataFetching /> */}
      </header>

    </div>
  )
}

export default App;
