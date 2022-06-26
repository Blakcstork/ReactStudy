import {useState, useEffect} from "react";
import styles from "./App.module.css";


function App() {

  const [counter, setValue] = useState(0);

  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);

  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  const iRunOnlyOnce = () => {
     console.log("i run only once!");
  };

  useEffect(iRunOnlyOnce, []);

  useEffect(() => {
    if(keyword !== "" && keyword.length >= 5){
      console.log("SEARCH FOR ", keyword);
    }
  }, [keyword]);

  useEffect(() => {
      console.log("I run when counter active");
  }, [counter]);

  useEffect(() => {
    console.log("I run when counter active");
  }, [counter, keyword]);


  return (
    <div>
      <input
        value = {keyword}
        onChange = {onChange} 
        type = "text" 
        placeholder = "Search here..." />
      <h1 className = {styles.title}>{counter}</h1>
      <button onClick = {onClick}>Click me!</button>
    </div>
  );
}

export default App;
