import Fahrenheit from "../../icon/Fahrenheit";
import Celsius from "../../icon/Celsius";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormMain = ({ type, ingress, setIngress, setTemp }) => {

  const handleConvertion = (ingressValue, typeTemp) => {
    console.log("type es: ",typeTemp)
    console.log("ingress es: ",ingressValue)

    console.log("Entre a la funcion");
    let result = 0;
    if (typeTemp === "celsius") {
      console.log("Entre al if celsius");
      result = (ingressValue * 1.8) + 32;
    }

    if (typeTemp === "fahrenheit") {
      console.log("Entre al if fahrenheit");
      result = (ingressValue - 32) / 1.8;
    }

    console.log("El resultado es: ",result);

    return Number.isInteger(result) ? result : result.toFixed(1);
  };

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
        alert(JSON.stringify(values, null, 2));
        setIngress(values.temperature);
        let res = handleConvertion(values.temperature, type);
        setTemp(res);
        actions.resetForm();
      }}
    >
      <Form className="p-5 flex flex-col md:flex-row justify-around items-center">
        <label htmlFor="temperature">
          Ingrese la temperatura en{" "}
          {type === "celsius" ? "Celsius" : "Fahrenheit"}
        </label>
        <Field
          type="number"
          placeholder="Ingrese un numero"
          className="my-4 md:mx-4 p-4 rounded-lg w-full"
          id="temperature"
          name="temperature"
        />
        <ErrorMessage component="a" name="temperature" />
        <button type="submit" className="mx-4 p-4 rounded-lg bg-red-300">
          {" "}
          convertir {type === "celsius" ? <Fahrenheit /> : <Celsius />}{" "}
        </button>
      </Form>
    </Formik>
  );
};

export default FormMain;
