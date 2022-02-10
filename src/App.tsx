import {  Routes ,Route } from 'react-router-dom'
import Navbar from './components/common/includes/Navbar'
import Characters from './components/character/Characters'
import Locations from './components/locations/Locactions'
import Episodes from './components/episode/Episodes'


const App = () => {
  return (<div> 
          <Navbar />
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/episodes" element={<Episodes />} />
          </Routes>
           
          </div>);
}

export default App;
