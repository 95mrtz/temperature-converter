
import { TbBrandReactNative, TbBrandTailwind, TbHeart} from "react-icons/tb";

const Footer = () => {
  return (
    <header className="h-12 w-full bg-gray-500 rounded-t-lg flex flex-col justify-center items-center">
      <div className="flex flex-row justify-around items-center">
        < TbBrandReactNative size={30} /> 
        < TbHeart size={24} className="mx-2 text-red-400"/>
        < TbBrandTailwind size={30}/>
      </div>
    </header>
  );
};

export default Footer;
