import { FaExchangeAlt } from "react-icons/fa";

const Title = ({ type, setType }) => {
  const handleInvertir = () => {
    type === "celsius" ? setType("fahrenheit") : setType("celsius");
  };

  return (
    <section className="flex flex-col justify-center items-center my-5">
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
