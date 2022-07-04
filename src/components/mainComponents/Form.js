import Fahrenheit from "../../icon/Fahrenheit";

const Form = () => {
  const handleSubmit = (e) => {};
  return (
    <form
      onSubmit={handleSubmit}
      className="p-5 flex flex-col md:flex-row justify-around items-center"
    >
      <input
        type="number"
        placeholder="Ingrese un numero"
        min="273,15"
        max="1000"
        className="my-4 md:mx-4 p-4 rounded-lg w-full"
      ></input>
      <button type="submit" className="mx-4 p-4 rounded-lg bg-red-300">
        {" "}
        convertir <Fahrenheit />{" "}
      </button>
    </form>
  );
};

export default Form;
