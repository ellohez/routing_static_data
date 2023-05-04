// import { Nav, NavLink, NavItem } from 'reactstrap';
import { Link } from "react-router-dom";

const NavComponent = () => {
    return (
        <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>                
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>                    
                </li>
            </ul>
        </nav>
       </div>
        // <Nav tabs>
        //     <NavItem>
        //         <NavLink active href="#home">
        //             Home
        //         </NavLink>
        //     </NavItem>
        //     <NavItem>
        //         <NavLink href="#">
        //             Another Link
        //         </NavLink>
        //     </NavItem>
        //     <NavItem>
        //         <NavLink disabled href="#">
        //             Disabled Link
        //         </NavLink>
        //     </NavItem>
        // </Nav>
    );
};

export default NavComponent;