import Header from "../Components/NavHead";
import Questionary from "../Components/Questionary";
import GlobalStyle from "../Components/Styles/globalStyle";
import { WrapperB } from "../Components/Wrappers/style";

const Quizz = () => {
    return(
        <>
            <GlobalStyle/>
            <Header/>
            <WrapperB>
                <Questionary />
            </WrapperB>
        </>
    )
}

export default Quizz;