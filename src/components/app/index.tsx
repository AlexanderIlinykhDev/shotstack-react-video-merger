import Router from "../../router/router";
import Preloader from "../preloader";

function App() {
  return (
    <Preloader>
      <Router />
    </Preloader>
  );
}

export default App;
