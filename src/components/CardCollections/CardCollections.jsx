import './card-collections.scss'

const CardCollections = (props) => {
    return ( 
        <div className="card-collections" >
            <a href="#!" className="card-collections--link">
            <div className="card-collections__title">{props.title}</div>
            <div className="card-collections__img">
                <img src={props.img} alt="collection" />
            </div>
            </a>
        </div>
     );
}
 
export default CardCollections;