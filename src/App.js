import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menubar from "./Components/Menubar/Menubar";
import AllProducts from "./Components/AllProducts/AllProducts";
import { useState,useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [count, setCount] = useState(0);

  const setCartCount = () => {
    setCount(count + 1);
  };

  const setCardCounts=()=>{
    setCount(count-1);
  }

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      {/* <Test></Test> */}
      <Menubar count={count}></Menubar>
      <AllProducts setCardCounts={setCardCounts} setCartCount={setCartCount}></AllProducts>
    </div>
  );
}

// function App() {
//   const [count, setCount] = useState("Hamid Hosen");
// setCount("EDU");

// console.log(count);

// const count=(num)=>{
//   console.log(num);
// }

//   return (
//     <div className="App">
//       {/* <Menubar country="Bangladesh"></Menubar> */}

//       <h1>0</h1>
//       <Test count={count}></Test>
//     </div>
//   );
// }

export default App;