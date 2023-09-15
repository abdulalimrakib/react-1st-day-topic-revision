import { useEffect, useState } from "react";

function App() {
  // let flatMates = {
  //    names: ["Hamim", "Anik", "Tanvir"],
  //    age:[20, 21, 25, 19]
  // };

  //  let flatMates = [{name:"Rakib", age:22}, {name:"Hamim", age:21}, {name:"Tanvir", age:23}, {name:"Anik", age:23},]

   let [flatMates, setFlatMates] = useState([])

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(data => setFlatMates(data.results[0].name));
  }, []);
  return (
    <>
      {/* <Nayok name="Abdul Alim Rakib" age={flatMates.age[1]}></Nayok>
      <Nayok name={flatMates.names[0]} age={flatMates.age[0]}></Nayok>
      <Nayok name={flatMates.names[2]} age={flatMates.age[2]}></Nayok>
      <Nayok name={flatMates.names[1]} age={flatMates.age[3]}></Nayok> */}

      {
          <Nayok title={flatMates.title} first={flatMates.first} last={flatMates.last}></Nayok>

        // flatMates.age.map(ages => <Nayok age={ages}></Nayok>)
      }
    </>
  );
}

function Nayok(props) {
  let nayokStyle = {
    padding: "2px",
    margin: "5px",
    border: "2px solid red",
  };
  return (
    <>
      <div style={nayokStyle}>
        <h1>I am {props.title} {props.first} {props.last}</h1>
        {/* <h2>I am {props.age} years old</h2> */}
        <NumberOfEge />
      </div>
    </>
  );
}

function NumberOfEge() {
  let buttonStyle = {
    marginLeft: "20px",
    padding: "5px 4px",
    fonfontSize: "14px",
    fontWeight: "bold",
  };
  let [count, setCount] = useState(0);
  return (
    <>
      <button
        style={buttonStyle}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Ajk akta khaici
      </button>
      <button
        style={buttonStyle}
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Ferot dici
      </button>
      <h2>Total Dim Khaici: {count}</h2>
    </>
  );
}

export default App;
