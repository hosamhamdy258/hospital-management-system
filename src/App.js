import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Banner from './components/Banner';
import Contact from './components/Contact';
import Departments from './components/Departments';
import Doctors from './components/Doctors';
import MyNav from './components/MyNav';

function App() {
  return (
    <div className="App">
     <MyNav/>
     <Banner/>
     <Doctors/>
     <Departments/>
     <Contact/>
    </div>
  );
}

export default App;
