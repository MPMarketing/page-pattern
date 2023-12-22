import { Helmet } from 'react-helmet';
import { Diveturb } from './styles';

const Vturb = () => {
    return(
        <Diveturb>
            <div dangerouslySetInnerHTML={{ __html: 
                '<div id="vid_6584c42f54f1fd00093e63c0" style="position:relative;width:100%;padding: 56.25% 0 0;"><img id="thumb_6584c42f54f1fd00093e63c0" src="https://images.converteai.net/4fc732ef-52cc-458d-82c3-f067ec86c320/players/6584c42f54f1fd00093e63c0/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"><div id="backdrop_6584c42f54f1fd00093e63c0" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div></div>'
            }} />
            <Helmet>
            <script type="text/javascript" id="scr_6584c42f54f1fd00093e63c0">
                var s=document.createElement("script");s.src="https://scripts.converteai.net/4fc732ef-52cc-458d-82c3-f067ec86c320/players/6584c42f54f1fd00093e63c0/player.js",s.async=!0,document.head.appendChild(s);
            </script>
            </Helmet>
        </Diveturb>
    )
}

export default Vturb;