import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MultiStepQuizPage from "./pages/MultiStepQuizPage";
import ScorePage from "./pages/ScorePage";
import { Provider } from "react-redux";
import store from "../src/redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/score" element={<ScorePage />} />
            <Route path="/" element={<MultiStepQuizPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
