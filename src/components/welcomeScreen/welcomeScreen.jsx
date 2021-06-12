import React from "react";
import '../welcomeScreen/welcomeScreen.css';

function WelcomeScreen(props) {
  return props.showWelcomeScreen 
    ? (
      // Start of welcome
        <div 
        className="WelcomeScreen d-flex flex-column justify-content-center position-fixed top-0 w-100 h-100 bg-dark text-white p-5">
          {/* Stater of welcome header */}
          <header className="welcome-header text-center mb-5">
            <h1 className="welcome-header_heading">Welcome to the Meet app</h1>
            <h4 className="welcome-header_sub-heading">
              Log in to see upcoming events around the world for full-stack developers
            </h4>
          </header>
          {/* End of welcome header */}
          {/* Start of welcome main */}
          <main className="button_cont mb-5" align="center">
            <div className="google-btn_container">
              <button onClick={() => { props.getAccessToken() }}
                rel="nofollow noopener"
                className="google-btn bg-light border-0 rounded py-1 px-2">
                <span className="google-icon pe-2">
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="42px" height="42px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
                </span>
                <b className="google-btn_text">Sign in with google</b>
              </button>
            </div>
          </main>
          {/* End of welcome main */}
          {/* Start of welcome footer */}
          <footer className="align-self-center">
            <a 
              className="fs-5 text-white-50 text-decoration-none"
              href="https://MarquezMoore.github.io/meet/privacy.html" 
              rel="nofollow noopener">
            Privacy policy
            </a>
          </footer>
          {/* Start of welcome footer */}
        </div>
        // End of welcome
    )
    : null
}

export default WelcomeScreen;