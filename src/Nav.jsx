import { IoMdSearch } from "react-icons/io"; 


const Nav = () => {
return(
    <nav className="mainbar">
        <div className="navbar">
            <i className="search-icon"> <IoMdSearch /></i>
            <input type="text" placeholder="Search" />
        </div>
    </nav>
)
}

export default Nav;