import { useEffect, useState, type JSX } from "react";

export default function Playground(): JSX.Element {
  const [numberOfDogs, setNumberOfDogs] = useState<number>(0);
  const [numberOfBirds, setNumberOfBirds] = useState<number>(10);
  function handleAddDogs(): void {
    setNumberOfDogs(numberOfDogs + 1);
  }
function handleOfBirds(): void{
    setNumberOfBirds(numberOfBirds + 10)
}
// useEffect
  // позволяет вызвать функцию
  // на каком-нибудь из этапов жизни компонента
  // - принимает колбек функцию и второй опиональный параметр -
  // массив зависимостей

  // 1. piemers - tukss atkariibu masiivs
  useEffect(() => {
console.log("useEffect 1, ar tuksu masiivu, tikai pie pirmaa rendering === mount");
  },[]);

  //2. piemers - bez masiiva 
  useEffect(()=>{
    console.log("useEffect 2, bez masiiva, tikai pie pirmaa rendering (mount) un pie katram izmainjam");
  });
  //3.piemers - ar noraditam atkaribam
  useEffect(()=>{
    console.log("useEffect 3, pie pirmas rendercijas (mount), pie mainiga, numberOfDogs, izmainjam");
  },[numberOfDogs]);
  return <div>

    <h1>Playground</h1>
    <p>Number of dogs: {numberOfDogs}</p>
    <p>Number of birds: {numberOfBirds}</p>
    <button type="button" onClick={handleAddDogs}>Let the dog in</button>
    <button type="button" onClick={handleOfBirds}>New birds</button>
  </div>;
}
