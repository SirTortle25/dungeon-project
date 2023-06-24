import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
        <Navbar />
        <div className="flex items-center flex-col space-y-16">
            <Card level="5" changes="stuff" items="more stufff"/>
            <Card level="5" changes="stuff" items="more stufff"/>
            <Card level="5" changes="stuff" items="more stufff"/>
        </div>
    </div>
  );
}

export default App;
