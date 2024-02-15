// import { useState } from "react";
import { PopUp } from "./styles";

const PopUpQuizz = () => {

    // const [popupVisible, setPopupVisible] = useState(true);

    const closePopup = () => {
        window.location.href = 'https://thenighttimeprotocol.com/quizz-completed';
        // setPopupVisible(false);
    };

    return(
    
        <>
        
             <PopUp>
                <h4>
                    Congratulations!<br/><br/>
                    <span style={{color: 'red'}}>You are eligible to be part of our program.</span><br/><br/> At this moment, it is of utmost importance that you watch Dr. James Miller's presentation until the end. <br/><br/>
                    Only then will you understand how the Nighttime Protocol will change your life forever!
                </h4>
                <img src="./assets/quizz-bck.png" alt="" />
                <button onClick={closePopup}>
                    Reveal this secret now!
                </button>
            </PopUp>
        
        </>
    )
};

export default PopUpQuizz;