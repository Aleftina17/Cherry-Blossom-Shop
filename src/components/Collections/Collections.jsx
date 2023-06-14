import CardCollections from "./../CardCollections/CardCollections";
import "./collections.scss";

const Collections = () => {
  return (
    <section className="section-collections">
      <div className="container">
        <div className="collections">
          <h2 className="collections__title">OUR COLLECTIONS</h2>
          <div className="collections__cards">
            <CardCollections title='BIRTHDAY' img={require('./../../assets/img/collections/collections-1.jpg')}/>
            <CardCollections title='WEDDING' img={require('./../../assets/img/collections/collections-2.jpg')}/>
            <CardCollections title='ANNIVERSARY' img={require('./../../assets/img/collections/collections-3.jpg')}/>
            <CardCollections title='NEW BABY' img={require('./../../assets/img/collections/collections-4.jpg')}/>
            <CardCollections title='LUXURY' img={require('./../../assets/img/collections/collections-5.jpg')}/>
            <CardCollections title='GRADUATION' img={require('./../../assets/img/collections/collections-6.jpg')}/>
            <CardCollections title='NEW YEAR' img={require('./../../assets/img/collections/collections-7.jpg')}/>
            <CardCollections title='VALENTINE’S DAY' img={require('./../../assets/img/collections/collections-8.jpg')}/>
            <CardCollections title='SYMPATHY' img={require('./../../assets/img/collections/collections-9.jpg')}/>
            <CardCollections title='LOVE AND ROMANCE' img={require('./../../assets/img/collections/collections-10.jpg')}/>
            <CardCollections title='THANK YOU' img={require('./../../assets/img/collections/collections-11.jpg')}/>
            <CardCollections title='TOYS' img={require('./../../assets/img/collections/collections-12.jpg')}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
