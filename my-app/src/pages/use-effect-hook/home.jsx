import React, { useEffect, useState } from 'react'
import Header from '../../component/use-effect-hook/Header'
export default function Home() {
  console.log("init Render");
  const [name,setName] = useState("hagfgg")
  useEffect(()=>{
    // Api call
   console.log("Mounting");
   console.log(name);
   
  //  let count =0
  //  هر چند ثانیه یک بار هی انجام بده 
  //  const counter = setInterval(()=>{
  //   count+=1,
  //   console.log();
    
  //  },1000)
  //  زمانی که خارج بشیم از صفحه برای ما نمایش داده میشه
  // return ()=>{
  //  console.log("UnMounting");
  //  زمانی که از کامپوننت خارج میشیم آن مونت هست
       // باید خارج شدن از کامپوننت بایسته نباید ادامه دار بشه زمانی که میریم داخل یک کامپوننت دیگ
  //  clearInterval(counter)
  // }
  // داخل  این ارایه هرچی بزاریم با هر تغییر خودش مقدارش هم تغییر میکنه یعنی اگر نام رو بزاریم با هر تغییر نام هی تغییر میکنه
  // یکی از کاربردهای دیگش تو پیجینیشن هست
  // dependency هست
},[]);
  return (
    <div>
       <Header/>
       {/* اینجا هم میتونیم کانتر رو صدا بزنیم که نمایش بده تو صفحه */}
       <h1>Home</h1>
       <button onClick={()=>setName("jjjjj")}>change</button>
    </div>
  )
}
