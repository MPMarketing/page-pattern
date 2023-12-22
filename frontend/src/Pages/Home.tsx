import TrueFooter from "../Components/Footers";
import { ImageWrap1 } from "../Components/Image Wrappers/styles";
import Header from "../Components/NavHead";
import GlobalStyle from "../Components/Styles/globalStyle";
import { Text1 } from "../Components/Texts/styles";
import Vturb from "../Components/Vturb";
import { WrapperB } from "../Components/Wrappers/style";

const Home = () => {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <WrapperB>
        <Vturb/>
        <Text1 style={{padding: '0.5rem'}}><span style={{color: 'red', fontWeight: 'bold'}}>IMPORTANT:</span> Your video may take up to 10 seconds to load. Make sure your sound is on.</Text1>
        <ImageWrap1 src="../../assets/james-miller.svg" alt="jamer-miller-signature"/>
      </WrapperB>
      <TrueFooter/>
    </>
    
  );
}

export default Home;
