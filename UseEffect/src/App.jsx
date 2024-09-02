import React, { useEffect, useState } from 'react'
import Card from './Components/Card'

const App = () => {
  const [counter, setcounter] = useState(0);

  // useEffect(() =>{
  // console.log("Effect running...");
  // }
  // ) but jab bhi screen m render wala kam ya kuch bhi change ya add hoga to ye useEffect dobara chalta rhy ga bar bar.

  useEffect(() => {
    console.log("Effect running...")
  }, [lessCounter])


  function addCounter() {
    setcounter(preVal => preVal + 1);
    setcounter(preVal => preVal + 2);
    setcounter(preVal => preVal + 3);

    // setcounter(counter + 5);
    // setcounter(counter + 2);
    // setcounter(counter + 10);
    // setcounter(counter + 1);
  }

  function lessCounter() {
    setcounter(counter - 1);
  }

  return (
    <>
      <div>
        <h1>Hello World! {counter}</h1>
        <button onClick={addCounter}>Add counter</button> <br /><br />
        <button onClick={lessCounter}>Remove</button>
      </div>
      <Card title="iPhone 15 Pro Max" description="Apple iPhone 15 Pro Max - The Future Flagship By Apple! " price="474,999" />
      <Card title="Apple iPhone 14 Pro Max" description="Apple iPhone 14 Pro Max - A Powerful Smartphone In The Market" price="565,999" />
    </>
  )
}

export default App

