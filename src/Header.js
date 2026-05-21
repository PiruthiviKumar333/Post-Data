import { Link } from "react-router-dom"

const Header = ({search,setSearch}) => {
  return (
    <div className='navbar'>
        <form onSubmit={(e)=>e.preventDefault()}>
      <label htmlFor="text">Search</label>
            <input type="text"
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
            />
        </form>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/posts"}>Newpost</Link></li>
        </ul>
    </div>
  )
}

export default Header