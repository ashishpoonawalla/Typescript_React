import React from 'react';
import "./App.css";


let name: string = "Ashish";
let age: number | string | boolean;
let isStd: boolean = true;
let hobbies: string[] = ['music', 'cricket'];
let role: [number, string]; // tuple

let school: any; // -------------------any datat type
let mychoice: unknown;


//-------------------
let showName: (name: string) => void;

let showAge: (age: number) => number;

let showPlace: (place: string) => never; //----------- return any type 

function printName(name: string)
{
  console.log(name)
}

printName('Test')

//-------------------- Object
type Person = {
  name: string;
  age?: number;   // ? means optional
};

let person: Person = {
  name: 'Ashish',
  age: 40,
};

//-------------------- Interface

interface Employee{
  name: string;
  age: number;
}


function App() {
  return (
    <div className="App">
      {name}
    </div>
  );
}

export default App;
