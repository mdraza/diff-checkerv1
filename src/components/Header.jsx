import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <div className="w-100 py-2 md:py-4 bg-[#4608ad] dark:bg-[#1e1e1e] px-[10px] md:px-[60px] flex justify-between items-center flex-col md:flex-row gap-2">
      <h2 className="text-xl md:text-2xl text-white">
        Difference Checker for Cybage BS Team
      </h2>
      <DarkModeToggle />
    </div>
  );
};

export default Header;
