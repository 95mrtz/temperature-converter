import TitleHeader from "./HeaderComponents/TitleHeader"
import Icons from "./HeaderComponents/Icons"

const Header = () => {
    return (
      <header className="h-20 sm:h-40 w-full flex flex-row justify-around items-center rounded-b-lg ">
        <TitleHeader />
        <Icons />
      </header>
    );
  };
  
  export default Header;