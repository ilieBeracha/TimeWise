import { useEffect, useState } from 'react';
import Header from "../../Components/Header/Header";
import "./Home.css";
import { gmailService } from '../../services/GmailService';

function Home(): JSX.Element {
    const [accessToken, setAccessToken] = useState('');

    const CLIENT_ID = "609235366614-aao1puese6ch6lcm62sk743ja5oa6af4.apps.googleusercontent.com";
    const REDIRECT_URI = "http://localhost:5173";
    const SCOPES = "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/gmail.readonly";

    const handleAuthClick = () => {
        // const params = new URLSearchParams({
        //     client_id: CLIENT_ID,
        //     redirect_uri: REDIRECT_URI,
        //     response_type: 'token',
        //     scope: SCOPES,
        // });

        // const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;

        
        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?scope=${encodeURIComponent(SCOPES)}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=token&client_id=${CLIENT_ID}`;
        window.location.href = authUrl;
        console.log(authUrl);
        
    };

   

    // useEffect(() => {
    //     const hashParams = new URLSearchParams(window.location.hash.substr(1));
    //     const token:any = hashParams.get('access_token');
    //     setAccessToken(token);
    //     gmailService.getMails(token);
    // }, []);

    return (
        <div className="Home">
            <Header />
            <button onClick={handleAuthClick}>Authorize</button>
            <div>Access Token: {accessToken}</div>
        </div>
    );
}

export default Home;
