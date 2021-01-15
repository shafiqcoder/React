import React, { useEffect, useState } from 'react';
import './App.css';
function App() {
  //useEffect takes two args , callback and array
  //all async task will be done in useEFFECT
  const [repos, setRepos] = useState([{}])
  useEffect(() => {
    async function getapi() {
      let str = `https://api.github.com/users/shafiqcoder/repos`
      const response = await fetch(str)
      const data = await response.json()
      setRepos(data)
    }
    getapi();
    // fetch('https://jsonplaceholder.typicode.com/posts/1')//this fetch fn returns a promise so we need .then()
    //   .then((response) => response.json())//this .then() again returns a promise so we need again .then()
    //   .then((json) => {
    //     setData(json)
  }, []);// this [] will set the condition for api calls, it will prevent infinte api calls/we can set flag
  return (
    <div className="App">
      <h1>My all repositories</h1>
      <h2>{ }</h2>
      <ul>
        {repos.map((repoObj, index) => {
          return (<li key={index} > { repoObj.name}</li>)
        })}
      </ul>
    </div >
  );
}
export default App;