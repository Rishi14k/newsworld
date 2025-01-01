

const Header = ({ category }) => {
  // Capitalize the first letter of the category
  const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <>
      <h1 className="text-center head">
        {capitalizeFirstLetter(category)} <span className="span-news">News</span>
      </h1>
    </>
  );
};

export default Header;
