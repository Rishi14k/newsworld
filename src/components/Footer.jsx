

const Footer = ({setCategory}) => {
  return (
    <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item" onClick={()=>setCategory("general")}><a href="#" className="nav-link px-2 text-body-secondary">General</a></li>
      <li className="nav-item" onClick={()=>setCategory("business")}><a href="#" className="nav-link px-2 text-body-secondary">Business</a></li>
      <li className="nav-item" onClick={()=>setCategory("entertainment")}><a href="#" className="nav-link px-2 text-body-secondary">Entertainment</a></li>
      <li className="nav-item" onClick={()=>setCategory("health")}><a href="#" className="nav-link px-2 text-body-secondary">Health</a></li>
      <li className="nav-item" onClick={()=>setCategory("science")}><a href="#" className="nav-link px-2 text-body-secondary">Science</a></li>
      <li className="nav-item" onClick={()=>setCategory("sports")}><a href="#" className="nav-link px-2 text-body-secondary">Sports</a></li>
      <li className="nav-item" onClick={()=>setCategory("technology")}><a href="#" className="nav-link px-2 text-body-secondary">Technology</a></li>
    </ul>
    <p className="text-center text-body-secondary">© 2025 Rishi, Inc.</p>
  </footer>
  )
}

export default Footer

//business entertainment general health science sports technology