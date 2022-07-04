import TitleHeader from "./HeaderComponents/TitleHeader"
import Icons from "./HeaderComponents/Icons"

const Header = () => {
    return (
      <header className="h-32 w-full bg-gray-100 flex flex-row justify-around items-center">
        <TitleHeader />
        <Icons />
      </header>
    );
  };
  
  export default Header;