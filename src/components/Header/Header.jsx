import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
           
            <nav>
                <span>My Website</span>
                <Link to="/">Home</Link>
                <Link to="/Users">Users</Link>
                <Link to="/about">About</Link>
                <Link to ="/contact">Contact us</Link>
                
            </nav>
        </div>
    );
};

export default Header;