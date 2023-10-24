
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chatbot from './components/Chatbot';
import StudentInfo from './components/StudentInfo';
import FinalResult from './components/FinalResult';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route exact path='/' element={ <StudentInfo/> }/>
      <Route exact path='/chatbot' element={  <Chatbot/> }/>
      <Route exact path='/finalresult' element={  <FinalResult/> }/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
