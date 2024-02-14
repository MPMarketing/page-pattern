import { Helmet } from 'react-helmet';
import { Diveturb } from './styles';

const Vturb = () => {
    return(
        <Diveturb>
            <div id="vid_65cd34b2def8620008d2a95d" style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}>
      <img
        id="thumb_65cd34b2def8620008d2a95d"
        src="https://images.converteai.net/4fc732ef-52cc-458d-82c3-f067ec86c320/players/65cd34b2def8620008d2a95d/thumbnail.jpg"
        style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        alt=''
      />
      <div
        id="backdrop_65cd34b2def8620008d2a95d"
        style={{ position: 'absolute', top: '0', width: '100%', height: '100%', WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)' }}
      ></div>
    </div>
            <Helmet>
            <script type="text/javascript" id="scr_65cd34b2def8620008d2a95d">var s=document.createElement("script");s.src="https://scripts.converteai.net/4fc732ef-52cc-458d-82c3-f067ec86c320/players/65cd34b2def8620008d2a95d/player.js",s.async=!0,document.head.appendChild(s);</script>
            </Helmet>
        </Diveturb>
    )
}

export default Vturb;