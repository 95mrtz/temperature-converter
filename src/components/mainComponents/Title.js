import { FaExchangeAlt } from "react-icons/fa";

const Title = ({ type, setType }) => {
  const handleInvertir = () => {
    type === "celsius" ? setType("fahrenheit") : setType("celsius");
  };

  return (
    <section className="flex flex-col justify-center items-center my-1 sm:my-5">
      <p className="text-center text-xl sm:2xl">
        <span className="font-bold">Historia:</span> <br/>
        <span className="font-bold"> Anders Celsius </span> definió su escala en 1742 considerando las temperaturas de ebullición y de congelación del agua,
         el grado Celsius​ (símbolo °C) reemplaza, desde 1948,​ a los grados centígrados​ en el Sistema Internacional de Unidades. <br />
         <span className="font-bold">Daniel Gabriel Fahrenheit</span> ecidió crear una escala de temperatura basada en tres puntos de temperatura fijos: la del agua congelada, la temperatura del cuerpo humano y el punto más frío en el que podría enfriar una y otra vez la solución de agua, hielo Y una especie de sal, el cloruro de amonio.  
         Esta escala se utilizaba en la mayoría de los países anglosajones y Puerto Rico para todo tipo de uso. 
      </p>
      <h1 className="text-2xl sm:text-3xl md:text-4xl	mb-2">
        {" "}
        {type === "celsius"
          ? "Celsius a Fahrenheit"
          : "Fahrenheit a Celsius"}{" "}
      </h1>
      <button
        onClick={handleInvertir}
        className="bg-purple-400 px-2 sm:px-6 py-3 sm:py-5 text-lg rounded-xl flex flex-row"
      >
        <p className="flex flex-row justify-center items-center">
          Invertir <FaExchangeAlt className="mx-2" />
        </p>
      </button>
    </section>
  );
};

export default Title;
