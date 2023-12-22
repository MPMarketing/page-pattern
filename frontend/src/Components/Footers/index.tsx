import { Text2, Text3 } from "../Texts/styles";
import { WrapperA, WrapperC } from "../Wrappers/style";
import { LinksFooter, MainFooter } from "./styles";

const TrueFooter = () => {
    return(
        <WrapperA>
            <MainFooter>
                <WrapperC>
                    <Text2>                      
                        This presentation is not intended to diagnose, treat, cure, or prevent any disease. Results may vary from person to person. This information does not constitute medical advice and should not be considered as such. Consult your doctor before modifying your regular medical regimen. This is a video presentation and not a news article or blog.
                    </Text2>
                    <br/>
                    <Text2>
                        Av. Setecentos - Terminal Intermodal da Serra. Serra/ES. - ZIP Code: 29161-414 - <br/>MP Digital Marketing Ltda, CNPJ 43.652.395.0001-00 <br/>Email: mp.directresponse@gmail.com
                    </Text2>
                    <br/>

                    <Text3>
                        Copyright 2023 – MP Digital Marketing ®
                    </Text3>
                    <Text3>
                        All rights reserved.
                    </Text3>
                    <LinksFooter>
                        <a href="/terms-of-use">Terms of Use</a>
                        <a href="/privacy">Privacy</a>
                    </LinksFooter>
                </WrapperC>
            </MainFooter>
        </WrapperA>
    )
}

export default TrueFooter;