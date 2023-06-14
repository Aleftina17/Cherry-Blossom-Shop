import Address from '../../components/Address/Address';
import Blogs from '../../components/Blogs/Blogs';
import Collections from '../../components/Collections/Collections';
import Faq from '../../components/Faq/Faq';
import FollowUs from '../../components/FollowUs/FollowUs';
import Hero from '../../components/Hero/Hero';
import Subscribe from '../../components/Subscribe/Subscribe';
import TopRated from '../../components/TopRated/TopRated';
import WhyChoose from '../../components/WhyChoose/WhyChoose';



const Home = () => {
    return ( 
        <>
        <Hero />
        <TopRated />
        <Collections />
        <WhyChoose />
        <Subscribe />
        <Faq />
        <FollowUs />
        <Blogs />
        <Address />
        </>
     );
}
 
export default Home;