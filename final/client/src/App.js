import './App.css';
import Navbar from './components/navbar.js';
import SideBar from './components/sidebar/index.js';
import Body from './components/body/index.js';

function App() {
  return (
    <div>
      <Navbar />
      <div className='sidebar_content_container'>
        <SideBar />
        <Body />
      </div>

    </div>
  );
}

export default App;
