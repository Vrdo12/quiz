import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';



const Footer = () =>{
    return(
        <>
            <div className="fcontainer">
                <div className="fbody">
                    <div className="terms">
                        <ul>
                            <li><a href="https://www.socialsweethearts.de/terms.html" target="_blank" rel="noopener noreferrer">Terms and conditions</a></li>
                            <li><a href="https://www.socialsweethearts.de/privacy.html" target="_blank" rel="noopener noreferrer">Privacy</a></li>
                            <li><a href="https://www.socialsweethearts.de/de_DE/imprint" target="_blank" rel="noopener noreferrer">Imprint</a></li>
                            <li><a href="https://www.socialsweethearts.de/de_DE/press-2" target="_blank" rel="noopener noreferrer">Press</a></li>
                            <li><a href="https://feedback.socialsweethearts.de/?data=eyJmYmlkIjogIiIsICJmaXJzdF9uYW1lIjogIiIsICJsYXN0X25hbWUiOiAiIiwgIm5hbWUiOiAiIiwgImVtYWlsIjogIiIsICJob21ldG93biI6ICIiLCAibG9jYXRpb24iOiAiIiwgImxvY2FsZSI6ICIiLCAidGltZXpvbmUiOiAiIiwgInVybCI6ICJodHRwczovL2VuMi5uYW1ldGVzdHMuY29tLyIsICJhcHBfaWQiOiAibmFtZXRlc3RzLmNvbSIsICJhcHBfbmFtZSI6ICJuYW1ldGVzdHMuY29tIn0%3D" target="_blank" rel="noopener noreferrer" >Feedback</a></li>
                            <li><a href="https://www.socialsweethearts.de/en_US/it-career" target="_blank" rel="noopener noreferrer">Jobs</a></li>
                            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdanj1dniSSTXBaTbSepwBct9rGSZpB392JbyRBwC4ladeb7Q/viewform" target="_blank" rel="noopener noreferrer">Become a partner</a></li>
                        </ul>
                    </div>
                    <div className="disclaimer">
                        <a href="https://www.socialsweethearts.de/terms.html">Disclaimer: All content is provided for fun and entertainment purposes only</a>
                    </div>
                    <div className="info">
                        <p>This app uses data and contents only if they are publicly available or with the consent of the users. We kindly ask you to use the app only, if other users will not be affected adversely.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;