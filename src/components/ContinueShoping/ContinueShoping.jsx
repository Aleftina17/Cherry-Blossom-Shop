import './continue-shoping.scss'

import { NavLink } from 'react-router-dom'

const ContinueShoping = () => {
    return ( 
        <NavLink to="/catalog">
            <div className="continue-shoping--link">Continue shopping</div>
          </NavLink>
     );
}
 
export default ContinueShoping;