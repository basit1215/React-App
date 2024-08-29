// import React from 'react'

// const Button = (props) => {       // ye normal obj hai,  destrcture  use lar ky bhi ye kam same aise hi kar sakty hai
//     console.log(props);
//     return (
//         <>
//             <button>{props.name}</button>
//             {/* <button>{props.age}</button>
//             <button>{props.arr}</button> */}
//         </>
//     )
// }

// export default Button

import React from 'react'
import './App.css'

const Button = ({name , age , arr , func}) => {   // ye destruct hai aisy bhi obj bana kar ye kam ho jayga
    return (
        <>
            <button onClick={func} className='btns1 px-3 py-1  rounded-lg mt-8 mr-5 bg-lime-600 text-red-900 hover:bg-lime-400 hover:text-black hover:font-bold border  border-black  border-solid'>{name}</button>  
            <button  className='btns2 px-3 py-1 rounded-lg bg-red-400 mt-8 mr-5  hover:bg-red-200 hover:text-black hover:font-bold  border  border-black  border-solid' >{age}</button> 
            <button  className='btns3 px-3 py-1 rounded-lg bg-yellow-600 mt-8 mr-5  hover:bg-yellow-200 hover:text-black hover:font-bold  border  border-black  border-solid'>{arr}</button><br />
         
        </>
    )
}

export default Button