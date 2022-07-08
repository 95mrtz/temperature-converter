import Title from "./mainComponents/Title";
import FormMain from "./mainComponents/Form.js";
import Resultado from "./mainComponents/Resultado";
import History from "./mainComponents/History.js"
import { useState } from "react";

const Main = () => {
  const [dataIngress, SetDataIngress] = useState(0);
  const [tempResult, setTempResult] = useState(0);
  const [typeTemp, setTypeTemp] = useState("celsius");

  return (
    <main className="h-screen flex flex-col justify-around items-center">
      <Title type={typeTemp} setType={setTypeTemp} />
      <FormMain
        type={typeTemp}
        ingress={dataIngress}
        setIngress={SetDataIngress}
        setTemp={setTempResult}
      />
      <Resultado temp={tempResult} />
      <History />
    </main>
  );
};

export default Main;
