
// use-context-hook
// import { Route, Routes } from "react-router-dom";
// import { useState } from "react";

// import Home from "./pages/use-contex/home/home";
// import Articles from "./pages/use-contex/articles/article";
// import Login from "./component/use-contex-hook/login/login";
// import { AppContext } from "./context/use-contex/app-context";

// export default function App() {
//   const [isLogin, setIsLogin] = useState(false);

//   return (
//     // اینجا setIsLogin
//     // رو بهش پاس دادیم و حالا باید روی اون دکمه لاگین کلیک کرد محتویات رو داد اونجا این اجرا بشه که داخل فقط لاگین اون دکمه کلیک هست
//     <AppContext.Provider value={{ isLogin, setIsLogin }}>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/articles" element={<Articles />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </AppContext.Provider>
//   );
// }
// ..................................................................................


// use state 

// import React, { useState } from 'react'

// export default function App() {
//   // در پرانتز مقدار اولیه بهش میدیم
//   // هرنوع مقداری میشه داخل پرانتز نوشت استرینگ یا بول یا..
//   // const [state,setState] = useState("هتاابیتظدب")
//   const [state,setState] = useState({
//      name:"hanna",
//      age:26,
//   })
//   console.log(state);
//   // اینجا مقدار جدید رو میگیره و نمایش میده
//    const handleChangeName =()=>{
//     // prev یعنی استیت قبلی 
    
//     // این رو باید داخل یک فانکشن قرار بدم به علت این که داخل فانکشن قرار ندم میاد ری رندر میشه مدام
//     // به علت همین ارور rerender میگیریم
//     setState(prevState=>({
//       //مقدار اولیشو میاد میگیره با سه نقطه بعدش هرچی خواستیم تغییر کنه را میگیم
//       ...prevState,
//       age:29
//     }))
//    }
//   return (
//     <div className='App'>
//        <button onClick={handleChangeName}>click</button>
//     </div>
//   )
// }


// ...........................................................
// useEffect
// import { Route, Routes } from "react-router-dom";
// import About from "./pages/use-effect-hook/Aboute";
// import Home from "./pages/use-effect-hook/home";

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//     </Routes>
//   );
// }

// ................................................................
// use ref
// import React, { useState, useRef } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(0);

//   const handleIncrease = () => {
//     setCount(count + 1);
//   };
//  const handleIncreaseRef=()=>{
//   countRef.current++
//  }
//   return (
//     <div>
//       <h1>state:{count}</h1>

//       <button onClick={handleIncrease}>
//         Add State
//       </button>

//       <br />
//       <br />

//       <h1>ref:{countRef.current}</h1>
//       <button onClick={handleIncreaseRef}>Add Ref</button>
//     </div>
//   );
// }
// use ref mesal 2

import React, { useRef } from 'react'

export default function App() {
  const tagRef = useRef(null);
  const inputRef = useRef(null);
  const handleChangeColor = ()=>{
    tagRef.current.style.backgroundColor = "#777"
  }
  const handleFocusInput =()=>{
   inputRef.current.focus()
  }
  return (
    <div>
      <h1 ref={tagRef}>Hello</h1>
      <button onClick={handleChangeColor}>Change Color</button>
      <br/>
      <input ref={inputRef}/>
      <button onClick={handleFocusInput}>Focus</button>
    </div>
  )
}

