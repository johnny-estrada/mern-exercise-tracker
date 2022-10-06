import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar>
        <br/>
        <route path="/" exact component={ExerciseList} />
        <route path="/edi/:id" exact component={EditExercise} />
        <route path="/create" exact component={CreateExercise} />
        <route path="/user" exact component={CreateUser} />
      </Navbar>
    </Router>
  );
}

export default App;
