import { Navbar1 } from "../Components/Navbars/styles";
import { WrapperA, WrapperB } from "../Components/Wrappers/style";
import GlobalStyle from "../Components/Layouts/globalStyle";
import { Tittle1 } from "../Components/Tittles/styles";
import { VideoWrap1 } from "../Components/Vídeo Wrappers/styles";

const Home = () => {
  return (
    <>
      <GlobalStyle/>
      <WrapperA>
        <Navbar1>
          <WrapperB>
            DO NOT CLOSE OR REFRESH THIS PAGE OR THERE MAY BE AN ERROR IN YOUR PURCHASE
          </WrapperB>
        </Navbar1>

        <Tittle1>
          <WrapperB>
            PLEASE LISTEN CAREFULLY THIS MESSAGE FROM JAMES MILLER
          </WrapperB>
        </Tittle1>

        <VideoWrap1>
          <iframe title="teste" width="420" height="315" src="https://www.youtube.com/watch?v=LrWrfLFm9gg"></iframe>
        </VideoWrap1>
      </WrapperA>
    </>
    
  );
}

export default Home;
