import {
  FaSnowflake,
  FaRunning,
  FaThermometerEmpty,
  FaCity,
  FaThermometerFull,
} from "react-icons/fa";

const FunFact = ({ type, temp }) => {
  let data = "";
  const handleFact = (typeTemp, valueTemp) => {
    if (
      (typeTemp === "celsius" && valueTemp === -273.1) ||
      (typeTemp === "fahrenheit" && valueTemp === -459.6)
    ) {
      data = (
        <div className="flex flex-col justify-center items-center">
          <FaThermometerEmpty size={30} className="mb-1"/>
          <p className="text-center flex flex-column justify-center">
          <span className="font-bold">Fun Fact:</span> esta temperatura es el cero absoluto
          </p>
          <FaThermometerEmpty  size={30} className="mt-1" />
        </div>
      );
    }

    if (
      (typeTemp === "celsius" && valueTemp === 0) ||
      (typeTemp === "fahrenheit" && valueTemp === 32)
    ) {
      data = (
        <div className="flex flex-col justify-center items-center px-2">
          <FaSnowflake size={30} className="mb-1"/>
          <p className="text-center text-xl">
            <span className="font-bold">Fun Fact:</span> esta temperatura es el punto de congelación - fusión del
            agua
          </p>
          <FaSnowflake size={30} className="mt-1"/>
        </div>
      );
    }

    if (
      (typeTemp === "celsius" && valueTemp === 21) ||
      (typeTemp === "fahrenheit" && valueTemp === 69.8)
    ) {
      data = (
        <div className="flex flex-col justify-center items-center">
          <FaCity size={30} className="mb-1"/>
          <p className="text-center flex flex-column justify-center">
          <span className="font-bold">Fun Fact:</span> esta es la temperatura ambiente
          </p>
          <FaCity  size={30} className="mt-1"/>
        </div>
      );
    }

    if (
      (typeTemp === "celsius" && valueTemp === 37) ||
      (typeTemp === "fahrenheit" && valueTemp === 98.6)
    ) {
      data = (
        <div className="flex flex-col justify-center items-center">
          <FaRunning size={30} className="mb-1"/>
          <p className="text-center flex flex-column justify-center">
          <span className="font-bold">Fun Fact:</span> esta temperatura es la corporal promedio
          </p>
          <FaRunning  size={30} className="mt-1"/>
        </div>
      );
    }
    if (
      (typeTemp === "celsius" && valueTemp === 100) ||
      (typeTemp === "fahrenheit" && valueTemp === 212)
    ) {
      data = (
        <div className="flex flex-col justify-center items-center">
          <FaThermometerFull size={30} className="mb-1" />
          <p className="text-center flex flex-column justify-center">
          <span className="font-bold">Fun Fact:</span> esta temperatura es el punto de ebullición del agua
          </p>
          <FaThermometerFull  size={30} className="mt-1"/>
        </div>
      );
    }
    console.log(data);
    return data;
  };
  return <div className="my-3"> {handleFact(type, temp)} </div>;
};

export default FunFact;
