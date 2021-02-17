import sevenWonders from './data';
import './App.css';
import WonderList from './components/WonderList';

function App() {
  const handleShowName = (name)=> {
    alert(name)
}
  return (

    <>
    <p className="title">Seven Wonders of The World</p>
   
    
    <div className="App">
      <WonderList handleClick={handleShowName} data= {sevenWonders}/>
      </div>

    </>
  )
}
export default App;

// export default App;
// import data.js on App
// create a WondersList component that will receive the data as props and render a WonderCard to each element of the array.
// on WonderCard, display the image, name, location and year of each wonder, and also a button.
// on App create a method handleShowName() that will receive the name of the wonder as a parameter and display it on an alert() .
// pass handleShowName() down to WondersList, and to each of WonderCard  components.
// when the button is clicked, it will trigger the function handleShowName() and will display the name of the wonder.
