import Collections from '../../components/Collections/Collections';
import Navigation from '../../components/Navigation/Navigation';
import './collections-page.scss'

const CollectionsPage = () => {
    return ( 
        <section className="section-collections-page">
            <div className="container">
                <Navigation title="Collections"/>
                <Collections />
            </div>
        </section>
     );
}
 
export default CollectionsPage;