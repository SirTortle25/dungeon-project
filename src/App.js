import './App.css';
import Card from './components/Card'
function App() {
  return (
    <div className="App">
      <div className="grid grid-cols-3 p-6">
        <Card level="5" changes="stuff" items="more stufff"/>
        <Card level="15" changes="fighter" items="sword and shield"/>
        <Card level="15" changes="fighter" items="sword and shield"/>
      </div>
    </div>
  );
}

export default App;
