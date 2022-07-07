import FunFact from "./FunFact";

const Result = ({ ingress, type, temp }) => {
  return (
    <section className="flex flex-col justify-center items-center my-5 px-3">
      <h1 className="text-4xl mb-2 text-center">
        {ingress} {type === "celsius" ? " grados Celsius" : "grados Fahrenheit"}{" "}
        es equivalente a {ingress === 0 ? ( type === "celsius" ? 32 : -17.7) : temp}{" "}
        {type === "celsius" ? "grados Fahrenheit" : " grados Celsius"}
      </h1>
      <FunFact type={type} temp={ingress}/>
    </section>
  );
};

export default Result;
