import './navigation.scss'

const Navigation = (props) => {
    return ( 
        <div className="navigation">Home / <span className="navigation--bold">{props.title}</span></div>
     );
}
 
export default Navigation;