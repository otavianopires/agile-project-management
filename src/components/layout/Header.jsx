import MenuButton from "../elements/MenuButton";
import Logo from "./Logo";

const Header = ({ handleMenuClick }) => {

  return (
    <header className="header z-10 fixed h-16 w-full px-4 lg:px-6 grid grid-cols-header items-center gap-5 bg-white border-b border-solid border-slate-300">
      <MenuButton onClick={handleMenuClick} />
      <Logo />
    </header>
  )
}

export default Header;