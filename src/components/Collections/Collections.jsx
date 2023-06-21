import CardCollections from "./../CardCollections/CardCollections";
import "./collections.scss";

const Collections = () => {
  return (
    <section className="section-collections">
      <div className="container">
        <div className="collections">
          <h2 className="collections__title">OUR COLLECTIONS</h2>
          <div className="collections__cards">
            <CardCollections key={1} title='BIRTHDAY' img={require('./../../assets/img/collections/collections-1.jpg')}/>
            <CardCollections key={2} title='WEDDING' img={require('./../../assets/img/collections/collections-2.jpg')}/>
            <CardCollections key={3} title='ANNIVERSARY' img={require('./../../assets/img/collections/collections-3.jpg')}/>
            <CardCollections key={4} title='NEW BABY' img={require('./../../assets/img/collections/collections-4.jpg')}/>
            <CardCollections key={5} title='LUXURY' img={require('./../../assets/img/collections/collections-5.jpg')}/>
            <CardCollections key={6} title='GRADUATION' img={require('./../../assets/img/collections/collections-6.jpg')}/>
            <CardCollections key={7} title='NEW YEAR' img={require('./../../assets/img/collections/collections-7.jpg')}/>
            <CardCollections key={8} title='VALENTINE’S DAY' img={require('./../../assets/img/collections/collections-8.jpg')}/>
            <CardCollections key={9} title='SYMPATHY' img={require('./../../assets/img/collections/collections-9.jpg')}/>
            <CardCollections key={10} title='LOVE AND ROMANCE' img={require('./../../assets/img/collections/collections-10.jpg')}/>
            <CardCollections key={11} title='THANK YOU' img={require('./../../assets/img/collections/collections-11.jpg')}/>
            <CardCollections key={12} title='TOYS' img={require('./../../assets/img/collections/collections-12.jpg')}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
