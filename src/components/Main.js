import Title from "./mainComponents/Title";
import Form from "./mainComponents/Form.js";

const Main = () => {
    return ( 
        <main className="h-screen flex flex-col justify-around items-center">
            <Title />
            <Form />

            

        <h1> El "numero ingresado" en celsius es "este numero" en Fahrenheit</h1>
        
        </main>
     );
}
 
export default Main;