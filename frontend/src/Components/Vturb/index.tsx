import { Helmet } from 'react-helmet';
import { Diveturb } from './styles';

const Vturb = () => {
    return(
        <Diveturb>
            <div dangerouslySetInnerHTML={{ __html: '<script type="text/javascript" id="scr_65b25d187d14870008a0e9be"></script>' }} />
            <Helmet>
            <script type="text/javascript">var s=document.createElement("script");s.src="https://scripts.converteai.net/4fc732ef-52cc-458d-82c3-f067ec86c320/ab-test/65b25d187d14870008a0e9be/player.js",s.async=!0,document.head.appendChild(s);
            </script>
            </Helmet>
        </Diveturb>
    )
}

export default Vturb;