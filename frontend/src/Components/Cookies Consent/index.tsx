import { ConsentWrapper } from "./styles";

const ConsentBanner = () => {

    function setConsent(consent: any) {
        const consentMode = {
        'functionality_storage': consent.necessary ? 'granted' : 'denied',
        'security_storage': consent.necessary ? 'granted' : 'denied',
        'ad_storage': consent.marketing ? 'granted' : 'denied',
        'analytics_storage': consent.analytics ? 'granted' : 'denied',
        'personalization': consent.preferences ? 'granted' : 'denied',
        };
        gtag('consent', 'update', consent);
        localStorage.setItem('consentMode', JSON.stringify(consentMode));
    }

    return(
        <ConsentWrapper>
            <div style={{
                display: 'flex',
                textAlign: 'center',
                height: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '30px 20px 0 20px'
            }}>We use cookies to improve your online experience, analyse how our site is performing and offer personalised ads and content. Please let us know if you are happy to accept all cookies.</div>
            <div style={{
                width: '100%',
                height: '40%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px'
            }}>
                <button style={{
                    color: 'white',
                    backgroundColor: 'grey',
                    borderRadius: '10px',
                    padding: '6px',
                    border: '1px solid black',
                    margin: '0'
                }}>Decline</button>

                <button style={{
                    backgroundColor: 'blue',
                    color: 'white',
                    width: '50%',
                    height: '55px',
                    margin: '0',
                    border: '1px solid black',
                    borderRadius: '10px'
                }} onClick={() => setConsent({
                    necessary: true,
                    analytics: true,
                    preferences: true,
                    marketing: true
                })}>
                    Accept
                </button>
            </div>
        </ConsentWrapper>
    )
}

export default ConsentBanner;