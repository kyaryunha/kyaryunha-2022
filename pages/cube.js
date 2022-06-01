import Layout from '../components/Layout';
import MainCanvas from "../components/Home/MainCanvas";
import MainText from "../components/Home/MainText";
import {StyledMainBackground} from "../styles/Home.style";


const Home = () => (
    <>
        <Layout headerInterval={true}>
            <StyledMainBackground>
                <MainCanvas />
                <MainText />
            </StyledMainBackground>
        </Layout>
    </>
);

export default Home;
