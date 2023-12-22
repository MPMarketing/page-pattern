import { LogoWrapper } from "../Image Wrappers/styles";
import { WrapperD } from "../Wrappers/style";
import { HeaderContent } from "./styles";

const Header = () => {
    return(
        <>
            <HeaderContent>
                <WrapperD>
                    <LogoWrapper src="../../assets/logo-landing.svg" alt="logo-mp" />
                </WrapperD>
            </HeaderContent>
        </>
    )
}

export default Header;