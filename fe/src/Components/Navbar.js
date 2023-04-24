import {Link , Navlink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav-wrapper nav-wrapper-1">
            <nav className="effect-1">
                <ul>
                    <Link className='nav-link-item' to="/">Home</Link>
                    <Link className='nav-link-item' to="/about">About me</Link>
                    <Link className='nav-link-item' to="/portfolio">Portfolio</Link>
                    <Link className='nav-link-item' to="/gallery">Gallery</Link>
                    <Link className='nav-link-item' to="/contact">Contact</Link>
                </ul>
            </nav>
        </div>
    )    
}

export default Navbar;