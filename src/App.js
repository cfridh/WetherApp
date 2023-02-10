
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import Location from './components/Location';
import Temperature from './components/Temperature';

function App() {
  return (<>
  {/* main  */}
  <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700' shadow-xl shadow-gray-400>
<TopButtons/>
<Inputs/>
<Location/>
<Temperature/>




</div>

    </>
  );
}

export default App;

