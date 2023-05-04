import { Nav, NavLink, NavItem } from 'reactstrap';
import { Link } from "react-router-dom";

const NavComponent = () => {
    return (
            <Nav tabs>
                <NavItem>
                    <NavLink active tag={Link} to="/"> Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/posts">
                        Posts
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/comments">
                        Comments
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/albums">
                        Albums
                    </NavLink>
                </NavItem>
                
                {/* <NavItem>
                    <NavLink disabled href="#">
                        Disabled Link
                    </NavLink>
                </NavItem> */}
            </Nav>
    );
};

export default NavComponent;