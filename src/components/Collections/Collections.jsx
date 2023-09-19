import CardCollections from "./../CardCollections/CardCollections";
import "./collections.scss";
import collectionsData from "../../data/collections";

const Collections = () => {
  return (
    <section className="section-collections">
      <div className="container">
        <div className="collections">
          <h2 className="collections__title">OUR COLLECTIONS</h2>
          <div className="collections__cards">
            {collectionsData.map((collection) => {
              return (
                <CardCollections
                  key={collection.id}
                  title={collection.title}
                  img={collection.img}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
