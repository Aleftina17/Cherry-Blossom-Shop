import './navigation.scss'
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
    return ( 
        <div className="navigation"> <NavLink to='/'>Home</NavLink>  / <span className="navigation--bold">{props.title}</span></div>
     );
}
 
export default Navigation;