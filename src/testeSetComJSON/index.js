import { useState } from "react"

const TesteEstado = () =>{
    const numeros = {num1: "um", num2: "dois"};
    const numeros2 = {num1: 1, num2: 2};
    const numerosDuasFormasDeEscrita = [numeros, numeros2];

    const jsonString = JSON.stringify(numerosDuasFormasDeEscrita);
    localStorage.setItem("Numeros", jsonString);

    const [numerosEstado, setNumeros] = useState([]);

    const numerosEstadoConvertidos = JSON.parse(jsonString);
    function chamarSetState(){
      setNumeros(numerosEstadoConvertidos);
      console.log(numerosEstadoConvertidos);
      
    }
    return (
        <div>
            {jsonString}
            <button onClick={chamarSetState}>

            </button>
        </div>
    )
}
export default TesteEstado