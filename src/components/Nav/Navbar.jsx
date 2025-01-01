

// const Navbar = ({setCategory}) => {
//   return (
//     <div className="container">
//     <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
//       <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
//         <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
//         <span className="fs-4">news-world</span>
//       </a>

//       <ul className="nav nav-pills">
//         <li className="nav-item"><a href="#" className="nav-link" aria-current="page" onClick={()=>setCategory("general")}>General</a></li>
//         <li className="nav-item"><a href="#" className="nav-link" onClick={()=>setCategory("business")}>Business</a></li>
//         <li className="nav-item"><a href="#" className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</a></li>
//         <li className="nav-item"><a href="#" className="nav-link" onClick={()=>setCategory("health")}>Health</a></li>
//         <li className="nav-item"><a href="#" className="nav-link" onClick={()=>setCategory("science")}>Science</a></li>
//         <li className="nav-item"><a href="#" className="nav-link" onClick={()=>setCategory("sports")}>Sports</a></li>
//         <li className="nav-item"><a href="#" className="nav-link" onClick={()=>setCategory("technology")}>Technology</a></li>
//       </ul>
//     </header>
//   </div>
   
//   );
// };

// export default Navbar;


//business entertainment general health science sports technology


import { useState } from "react";
import "./Navbar.css";

const Navbar = ({ setCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <header className="navbar">
        <div className="logo">
          <a href="/">news-world</a>
        </div>
        <button className="toggle-btn" onClick={handleToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#" onClick={() => setCategory("general")}>General</a></li>
          <li><a href="#" onClick={() => setCategory("business")}>Business</a></li>
          <li><a href="#" onClick={() => setCategory("entertainment")}>Entertainment</a></li>
          <li><a href="#" onClick={() => setCategory("health")}>Health</a></li>
          <li><a href="#" onClick={() => setCategory("science")}>Science</a></li>
          <li><a href="#" onClick={() => setCategory("sports")}>Sports</a></li>
          <li><a href="#" onClick={() => setCategory("technology")}>Technology</a></li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;







