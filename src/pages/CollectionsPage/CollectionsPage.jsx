import React, { lazy, Suspense } from 'react';
import './collections-page.scss';

const Navigation = lazy(() => import('../../components/Navigation/Navigation'));
const Collections = lazy(() => import('../../components/Collections/Collections'));

const CollectionsPage = () => {
  return (
    <section className="section-collections-page">
      <div className="container">
        <Suspense fallback={<h5>Loading...</h5>}>
          <Navigation title="Collections" />
        </Suspense>
        <Suspense fallback={<h5>Loading...</h5>}>
          <Collections />
        </Suspense>
      </div>
    </section>
  );
};

export default CollectionsPage;
