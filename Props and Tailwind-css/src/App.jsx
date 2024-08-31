
import { useState } from 'react'
import './App.css'
import Button from './Button';
import NavBar from './NavBar';
import Footer from './Footer';
import Video from './Video';

function App() {
  const [data, setData] = useState(20);
 
  function addCounter(){
    setData(data + 1)
  }
  return (
    <>
      <NavBar/>
      <h1 className=''>Hello World! {data}</h1>
      <div>
        <Button  name="Submit" age={20} arr={["Apple", "Mango", "Banana"]} func={addCounter} />
        <Button name="Click"  age={22} arr={["Banana", "Mango", "Apple"]} />
        <Button name="Add Me"  age={24} arr={[ "Mango", "Banana"]} />
        <Button name="Subscribe"  age={26} arr={["Apple", "Mango"]} />
        <Button  name="Read More"  age={28} arr={["Apple", "Banana"]} />
        <Video />
         <Footer />
      </div>
    </>
  )

}

export default App
