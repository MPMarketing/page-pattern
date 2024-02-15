import { Helmet } from 'react-helmet';
import { Diveturb } from './styles';

const VturbYT = () => {
    return(
        <Diveturb>
          <div id="vid_65ce2d9ac157b20007785568" style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}>
            <img
              alt='vturb-yt'
              id="thumb_65ce2d9ac157b20007785568"
              src="https://images.converteai.net/4fc732ef-52cc-458d-82c3-f067ec86c320/players/65ce2d9ac157b20007785568/thumbnail.jpg"
              style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div
              id="backdrop_65ce2d9ac157b20007785568"
              style={{ position: 'absolute', top: '0', width: '100%', height: '100%', WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)' }}
            ></div>
          </div>
            <Helmet>
            <script type="text/javascript" id="scr_65ce2d9ac157b20007785568">var s=document.createElement("script");s.src="https://scripts.converteai.net/4fc732ef-52cc-458d-82c3-f067ec86c320/players/65ce2d9ac157b20007785568/player.js",s.async=!0,document.head.appendChild(s);</script>
            </Helmet>
        </Diveturb>
    )
}

export default VturbYT;