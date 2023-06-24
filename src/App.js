import './App.css';
import Navbar from './components/Navbar'
import CardContainer from './components/CardContainer';
import Button from './components/Button';

function App() {
   
    const addCard = () => {
        console.log("Add Card")
    }
    
  return (
    <div className="App">
        <Navbar />
        <CardContainer />
        <Button text="Add New Card" color="bg-blue-600" action={addCard}/>
    </div>
  );
}

export default App;
