import Invertir from "../../icon/Invertir";

const Title = ( { type, setType } ) => {

  const handleInvertir = () => {
    type === 'celsuis' ? setType('fahrenheit') : setType('celsius')
  }

  return (
    <section className="flex flex-col justify-center items-center my-5">
      <h1 className="text-4xl	mb-2"> {type === 'celsius' ? 'Celsius a Fahrenheit' : 'Fahrenheit a Celsius'}  </h1>
      <button onClick={handleInvertir} className="bg-red-300 px-6 py-5 text-lg rounded-xl flex flex-row">
       <p>Invertir</p>
       <Invertir />
      </button>
    </section>
  );
};

export default Title;
