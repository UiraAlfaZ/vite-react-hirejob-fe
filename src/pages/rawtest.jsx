// import React from 'react';
// import './pages.css'
// import NavProfile from '../components/navbar/navprofile';
// import Navlogin from '../components/navbar/navlogin';
// import NavnoLogin from '../components/navbar/navnologin';
// import tokped from '../assets/img/tokped.png';
// import img1 from '../assets/img/remainder.png';
// import img2 from '../assets/img/remainder2.png';
// import img3 from '../assets/img/social.png';
// import img4 from '../assets/img/social2.png';
// import img5 from '../assets/img/management.png';
// import img6 from '../assets/img/management2.png';

// const RawTest = () => {
//   return (
//     <>
//     <div className='d-flex justify-content-center' style={{ margin: "0" }}>
//     <div className='container mt-4 border border-primary' style={{width:"50vw", height:"50vw"}}>
//       <div className='row'>
//         <div className='col'>

//         </div>
//         <div className='col'>

//         </div>
//       </div>
//     </div>
//     </div>
//     </>
//   );
// };

// export default RawTest;

import { useEffect, useState } from 'react';

function App() {
const [counter, setCount] = useState(0)

const sum = () => {
  setCount(counter + 1)
}

const deplet = () => {
  setCount(counter - 1)
}
// useEffect(() => {
//   setTimeout(() => {
//     setCount((counter) => counter + 1);
//   }, 1000);
// });
  return (
    <div>
      <header>
        <h2>
          Count
        </h2>
        <p>{counter}</p>
        <button onClick={sum}>tambah + 1</button>
        <button onClick={deplet}>kurang - 1</button>
      </header>
    </div>
  );
}

export default App;
