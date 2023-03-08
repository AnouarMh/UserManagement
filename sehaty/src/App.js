import './App.css';
//import AddTip from './component/addTip';
//import TipList from './component/TipList';
import { BrowserRouter} from 'react-router-dom';
import AppRouter from './Approuter';


function App() {
  return (
    <BrowserRouter>
    <AppRouter/>
    </BrowserRouter>
    
  );
}

export default App;
