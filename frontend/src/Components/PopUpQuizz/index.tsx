import { useState } from "react";
import { PopUp } from "./styles";

const PopUpQuizz = () => {

    const [popupVisible, setPopupVisible] = useState(true);

    const closePopup = () => {
        setPopupVisible(false);
    };

    return(
    
        <>
        {popupVisible && (
             <PopUp>
                <h4>
                    Congratulations!<br/>
                    You are eligible to be part of our program. At this moment, it is of utmost importance that you watch Dr. James Miller's presentation until the end. <br/>
                    Only then will you understand how the Nighttime Protocol will change your life forever!
                </h4>
                <button onClick={closePopup}>
                    Reveal this secret now!
                </button>
            </PopUp>
        )}
        </>
    )
};

export default PopUpQuizz;