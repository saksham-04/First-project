import './App.css';
import Complaint from './components/Complaint';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar title="Saksham's Tech" About="About us "/>

      <Complaint />

    </div>
  );
}

export default App;
