import React from "react";

function Landing() {
  return (
    <div id="landing">
      <div className="landing-title">
        <h1>
          Hi, I&#39;m
          <span className="highlight-title"> Dailyco</span>,
        </h1>

        <h1>
          <span id="txt-rotate" data-period="2000" data-rotate={["Name is YuJin Kim", "scroll down for more."]}></span>
        </h1>

        <div className="landing-icons">
          {/* user email */}
          <a className="social-link email" aria-label="My E-Mail" href="mailto:alwayspring103@gmail.com">
            <svg viewBox="0 0 200 200" className="circle">
              <circle cx="100" cy="100" r="80" />
            </svg>
            <div className="social">
              <svg className="social-svg" viewBox="0 0 48 48">
                <use x="12" y="12" width="24" height="24" viewBox="0 0 48 48" xlinkHref="/assets/img/solid.svg#envelope"></use>
              </svg>
            </div>
            <span className="label">E-Mail</span>
          </a>

          {/* github user */}
          <a className="social-link" aria-label="My GitHub" target="_blank" rel="noreferrer" href="https://github.com/dailyco">
            <svg viewBox="0 0 200 200" className="circle">
              <circle cx="100" cy="100" r="80" />
            </svg>
            <div className="social">
              <svg className="social-svg" viewBox="0 0 48 48">
                <use x="12" y="12" width="24" height="24" viewBox="0 0 48 48" xlinkHref="/assets/img/brands.svg#github"></use>
              </svg>
            </div>
            <span className="label">GitHub</span>
          </a>

          {/* condpen user */}
          {/* <a className="social-link" aria-label="My Codepen" target="_blank" rel="noreferrer" href="https://codepen.io/{{site.codepen_username}}">
            <svg viewBox="0 0 200 200" className="circle">
              <circle cx="100" cy="100" r="80" />
            </svg>
            <div className="social">
              <svg className="social-svg" viewBox="0 0 48 48">
                <use x="12" y="12" width="24" height="24" viewBox="0 0 48 48" xlink:href="{{ "/assets/img/brands.svg#codepen" | prepend: site.baseurl }}"></use>
              </svg>
            </div>
            <span className="label">CodePen</span>
          </a> */}

          {/* dev user */}
          {/* <a className="social-link" aria-label="My DEV" target="_blank" rel="noreferrer" href="https://dev.to/{{site.dev_username}}">
            <svg viewBox="0 0 200 200" className="circle">
              <circle cx="100" cy="100" r="80" />
            </svg>
            <div className="social">
              <svg className="social-svg" viewBox="0 0 48 48">
                <use x="12" y="12" width="24" height="24" viewBox="0 0 48 48" xlink:href="{{ "/assets/img/brands.svg#dev" | prepend: site.baseurl }}"></use>
              </svg>
            </div>
            <span className="label">DEV</span>
          </a> */}

          {/* linked-in user */}
          {/* <a className="social-link linkedin" aria-label="My LinkedIn" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/{{site.linkedin_username}}">
            <svg viewBox="0 0 200 200" className="circle">
              <circle cx="100" cy="100" r="80" />
            </svg>
            <div className="social">
              <svg className="social-svg" viewBox="0 0 48 48">
                <use x="12" y="12" width="24" height="24" viewBox="0 0 48 48" xlink:href="{{ "/assets/img/brands.svg#linkedin-in" | prepend: site.baseurl }}"></use>
              </svg>
            </div>
            <span className="label">LinkedIn</span>
          </a> */}

          {/* twitter user */}
          {/* <a className="social-link twitter" aria-label="My Twitter" target="_blank" rel="noreferrer" href="https://twitter.com/{{site.twitter_username}}">
            <svg viewBox="0 0 200 200" className="circle">
              <circle cx="100" cy="100" r="80" />
            </svg>
            <div className="social">
              <svg className="social-svg" viewBox="0 0 48 48">
                <use x="12" y="12" width="24" height="24" viewBox="0 0 48 48" xlink:href="{{ "/assets/img/brands.svg#twitter" | prepend: site.baseurl }}"></use>
              </svg>
            </div>
            <span className="label">Twitter</span>
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default Landing;
