import React , {Component} from 'react';
import './App.css';
import Adress from  './component/profile/Adress.js';
import FullName from  './component/profile/FullName.js';
import   Profilephoto from './component/profile/Profilephoto.js';
class App extends Component {
  render ()
  {
    return (
      <div className="App">
       <header className="App-header">
       <FullName />
         <Adress />
       <Profilephoto />
     </header>
   </div> 
    )
  }
};
//function App() {
  //return (
   // <div className="App">
     // <header className="App-header">
      //  <Adress />
       // <FullName />
       // <Profilephoto />
     // </header>
   // </div>
  //);
//}

export default App;
