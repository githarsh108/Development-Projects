import './App.css';
import Navbar from './components/Navbar';
import about from './components/about';
import navbar from './components/Navbar';
//import TextForm from './components/TextForm';

function App() {
  return(
    <>
    <div>
  <Navbar title="TextUtils" abouttext="About"/>
  <div className="container my-3">
  {/*<TextForm  heading="Enter Your Text For Analysis"/>*/}
  <About />
  </div>
  
  </div>


  </>    
  );
}

export default App;
