import Head from 'next/head';
import Layout from '../components/Layout';
import {StyledMainBackground} from "../styles/Home.style";
import MainCanvas from "../components/Home/MainCanvas";
import MainText from "../components/Home/MainText";
import MidText from "../components/Home/MidText";
import Cv from "../components/Cv";
import Introduce from "../components/Cv/Introduce";
const Index = () => (
    <Layout subtitle={'CV'}>
        <Cv />
    </Layout>
);

export default Index;
