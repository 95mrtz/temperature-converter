import funFact from "./funFact";

 function resultText(ingress, type, temp) {
  return (
    <section className="flex flex-col justify-center items-center my-5 px-3">
      <h1 className="text-lg md:text-4xl mb-2 text-center">
        {ingress} {type === "celsius" ? " grados Celsius" : "grados Fahrenheit"}{" "}
        es equivalente a {temp}{" "}
        {type === "celsius" ? "grados Fahrenheit" : " grados Celsius"}
      </h1>
      {funFact(type, ingress)}
    </section>
  );
}

export default resultText;
