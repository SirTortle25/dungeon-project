import './App.css';
import Navbar from './components/Navbar'
import CardContainer from './components/CardContainer';
import Button from './components/Button';
import CardForm from './components/CardForm';

function App() {
   
    const addCard = () => {
        console.log("Add Card")
    }
    
  return (
    <div className="App">
        <Navbar />
        <CardContainer />
        <CardForm />
    </div>
  );
}

export default App;
