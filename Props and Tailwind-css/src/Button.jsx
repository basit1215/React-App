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

const Button = ({name , age , arr}) => {   // ye destruct hai aisy bhi obj bana kar ye kam ho jayga
    return (
        <>
            <button>{name}</button>  
            <button>{age}</button> 
            <button>{arr}</button><br />
         
        </>
    )
}

export default Button