// import { useEffect, useState } from "react";

// export default function App(){
//   // set میاد استیت و اپدیت میکنه
//   const [advice,setAdvice] = useState("")
//   const [count,setCount] = useState(0)
//   async function getAdvice(params) {
//     const res = await fetch("https://api.adviceslip.com/advice");
//     const data =  await res.json();
//     // اون استیت و تغییر میده 
//     setAdvice(data.slip.advice);
//     setCount((c)=>c+1);
    
//   }
//   useEffect(function(){
//     getAdvice();
//   },[])
//   return (
//     <div>
//       {/* اینم میاد اون استیت که تغییر کرده نمایش میده */}
//        <h1>{advice}</h1>
//        <button onClick={getAdvice}>getAdvice</button>
//         <Message count={count}/>
//     </div>
//   )
// }


// function Message(props){
//   return <p>read <strong>{props.count}</strong></p>

// }
import { Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";

import Home from "./pages/home/home";
import Articles from "./pages/articles/article";
import Login from "./component/login/login";

export const AppContext = createContext(null);

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AppContext.Provider value={{ isLogin, setIsLogin }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AppContext.Provider>
  );
}