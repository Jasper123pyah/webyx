import './App.css'
import {useEffect} from "react";

function App() {

  useEffect(() => {
    window.location.href = "https://www.jaspervandenmeiracker.com";
  }, []);

  return (
    <>
      <img src={"/webyx.svg"}/>
      <h1>Hello! We are currently still under construction.</h1>
      <h2>Check back soon!</h2>
      <h3>
        To learn more about me you can visit <a href="https://www.jaspervandenmeiracker.com/">my personal website</a>.
      </h3>
    </>
  )
}

export default App
