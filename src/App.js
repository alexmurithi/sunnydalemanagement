import Header from './Containers/Header';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import Routers from './Routers';
function App() {
  return (
      <Router>
        <Header/>
          <Switch>
              <Routers/>
          </Switch>
      </Router>

  );
}

export default App;
