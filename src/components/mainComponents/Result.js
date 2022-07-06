const Result = ({ ingress, type, temp }) => {
  return (
    <section className="flex flex-col justify-center items-center my-5">
      <h1 className="text-4xl mb-2">
        {ingress} {type === "celsius" ? " grados Celsius" : "grados Fahrenheit"}{" "}
        es equivalente a {temp}{" "}
        {type === "celsius" ? "grados Fahrenheit" : " grados Celsius"}
      </h1>
    </section>
  );
};

export default Result;
