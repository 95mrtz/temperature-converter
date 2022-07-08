import {
  FaSnowflake,
  FaRunning,
  FaThermometerEmpty,
  FaCity,
  FaThermometerFull,
} from "react-icons/fa";

  function funFact(typeTemp, valueTemp) {
  let data = "";
  if ((typeTemp === "celsius" && valueTemp === -273.1) ||
    (typeTemp === "fahrenheit" && valueTemp === -459.6)) {
    data = (
      <div className="flex flex-col justify-center items-center px-2 mt-2">
        <p className="text-center text-md sm:text-xl">
          <span className="font-bold">Fun Fact:</span> esta temperatura es el cero absoluto
        </p>
        <FaThermometerEmpty size={30} className="mx-1" />
      </div>
    );
  }

  if ((typeTemp === "celsius" && valueTemp === 0) ||
    (typeTemp === "fahrenheit" && valueTemp === 32)) {
    data = (
      <div className="flex flex-col justify-center items-center px-2 mt-2">
        <p className="text-center text-md sm:text-xl">
          <span className="font-bold">Fun Fact:</span> esta temperatura es el punto de congelación - fusión del
          agua
        </p>
        <FaSnowflake size={30} className="mx-1" />
      </div>
    );
  }

  if ((typeTemp === "celsius" && valueTemp === 21) ||
    (typeTemp === "fahrenheit" && valueTemp === 69.8)) {
    data = (
      <div className="flex flex-col justify-center items-center px-2 mt-2">
        <p className="text-center text-md sm:text-xl">
          <span className="font-bold">Fun Fact:</span> esta es la temperatura ambiente
        </p>
        <FaCity size={30} className="mx-1" />
      </div>
    );
  }

  if ((typeTemp === "celsius" && valueTemp === 37) ||
    (typeTemp === "fahrenheit" && valueTemp === 98.6)) {
    data = (
      <div className="flex flex-col justify-center items-center px-2 mt-2">
        <p className="text-center text-md sm:text-xl">
          <span className="font-bold">Fun Fact:</span> esta temperatura es la corporal promedio
        </p>
        <FaRunning size={30} className="mx-1" />
      </div>
    );
  }
  if ((typeTemp === "celsius" && valueTemp === 100) ||
    (typeTemp === "fahrenheit" && valueTemp === 212)) {
    data = (
      <div className="flex flex-col justify-center items-center px-2 mt-2">
        <p className="text-center text-md sm:text-xl">
          <span className="font-bold">Fun Fact:</span> esta temperatura es el punto de ebullición del agua
        </p>
        <FaThermometerFull size={30} className="mx-1" />
      </div>
    );
  }
  return data;
}

export default funFact;
