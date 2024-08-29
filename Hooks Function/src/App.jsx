
// This func. work but click button only work console, screen m work nh kar rha hai, because React m aise var nh bnaty, Q ky react dom manipulation khod control karta hai. jaise var aagy change hoga react khod update kardeta ha likn aise var sy nh kary ga.

import { useState } from "react"

// function App() {

//   let num = 10;
//   function AddNum() {
//     num = num + 1;
//     console.log(num);
//   }
//   return (
//     <>
//       <h1>Hello World</h1>
//       <button onClick={AddNum} >Click Me</button>
//     </>
//   )
// }

// export default App



// This func. work both console and screen, on click button  console, screen m work  kar rha hai, because React m var hamesha aise banaty hai, Q ky react dom manipulation khod control karta hai. ab var aagy khod  change hoga react khod update kardeta ha likn aise var banany sy  kary ga sirf.

function App() {

  let [num, setNum] = useState(10);

  function addNum() {
    setNum(num + 1);
    console.log(num)
  }

  function subtractNum() {

    if (num === 0) {
      console.log("Enough");
    }
    else {
      setNum(num - 1);
    }
    console.log(num);

  }

  return (
    <>
      <h1>Check Number</h1>
      <h2>{num}</h2>
      <br />
      <button onClick={addNum}>+</button>
      <button onClick={subtractNum}>-</button>
    </>
  )
}

export default App
