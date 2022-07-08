import { WiCelsius, WiFahrenheit } from "react-icons/wi";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import conversionFormula from "./formFunctions/conversionFormula";

const FormMain = ({ type, ingress, setIngress, setTemp }) => {
  const loginSchema = Yup.object().shape({
    temperature: Yup.number()
      .required("Debe ingresar un numero")
      .min(type === "celsius" ? -273.15 : -459.67),
  });

  return (
    <Formik
      initialValues={{
        temperature: "",
      }}
      validationSchema={loginSchema}
      onSubmit={(values, actions) => {
        setIngress(values.temperature);
        let res = conversionFormula(values.temperature, type);
        setTemp(res);
        actions.resetForm();
      }}
    >
      <Form className="w-full p-5 flex flex-col justify-around items-center">
        <label htmlFor="temperature" className="text-lg sm:text-xl">
          Ingrese la temperatura en{" "}
          {type === "celsius" ? "Celsius" : "Fahrenheit"}
        </label>
        <Field
          type="number"
          placeholder="Ingrese un numero"
          className="my-4 md:mx-4 p-2 sm:p-4 rounded-lg w-full md:w-1/2 text-gray-800"
          id="temperature"
          name="temperature"
        />
        <ErrorMessage component="a" name="temperature" className="mb-2" />
        <button
          type="submit"
          className="px-2 sm:px-4 py-1 rounded-lg bg-purple-400 flex flex-row justify-center items-center"
        >
          <p className="text-lg font-bold"> convertir a</p>
          {type === "celsius" ? (
            <WiFahrenheit size={36} className="mx-1" />
          ) : (
            <WiCelsius size={36} className="mx-1" />
          )}{" "}
        </button>
      </Form>
    </Formik>
  );
};

export default FormMain;
