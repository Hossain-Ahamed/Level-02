import Container from '@/components/layouts/Container';
import HeroSection from './HeroSection';
import AboutUsSection from './AboutUsSection';

const Home = () => {
    return (
        <Container>
            <HeroSection/>
            <AboutUsSection/>
        </Container>
    );
};

export default Home;