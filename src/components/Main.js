import Title from "./mainComponents/Title";
import FormMain from "./mainComponents/Form.js";
import Resultado from "./mainComponents/Resultado";
import { useState } from "react";

const Main = () => {
  const [dataIngress, SetDataIngress] = useState(0);
  const [tempResult, setTempResult] = useState(0);
  const [typeTemp, setTypeTemp] = useState("celsius");

  return (
    <main className="h-1/5 sm:h-2/5 md:h-4/5 flex flex-col justify-around items-center">
      <Title type={typeTemp} setType={setTypeTemp} />
      <FormMain
        type={typeTemp}
        ingress={dataIngress}
        setIngress={SetDataIngress}
        setTemp={setTempResult}
      />
      <Resultado temp={tempResult} />
    </main>
  );
};

export default Main;
