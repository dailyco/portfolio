import React from "react";

function Contact() {
  return (
    <>
      <h1 className="title">Contact Me</h1>
      <p className="subtitle">description...</p>

      <div className="contact-icons">
        <a className="social-link" aria-label="My E-Mail" href="mailto:alwayspring103@gamil.com">
          <div className="social">
            <svg className="social-svg" viewBox="0 0 48 48">
              <use x="12" y="12" width="24" height="24" viewBox="0 0 48 48" xlinkHref="/assets/img/solid.svg#envelope"></use>
            </svg>
          </div>
        </a>

        <a className="social-link" aria-label="My GitHub" target="_blank" rel="noreferrer" href="https://github.com/dailyco">
          <div className="social">
            <svg className="social-svg" viewBox="0 0 48 48">
              <use x="12" y="12" width="24" height="24" viewBox="0 0 48 48" xlinkHref="/assets/img/brands.svg#github"></use>
            </svg>
          </div>
        </a>

        {/* codepen user
        <a className="social-link black" aria-label="My Codepen" target="_blank" rel="noreferrer" href="https://codepen.io/{{site.codepen_username}}">
          <div className="social">
            <svg className="social-svg" viewBox="0 0 48 48">
              <use x="12" y="12" width="24" height="24" viewBox="0 0 48 48" xlink:href="{{ "/assets/img/brands.svg#codepen" | prepend: site.baseurl }}"></use>
            </svg>
          </div>
        </a> */}

        {/* dev user
        <a className="social-link black" aria-label="My DEV" target="_blank" rel="noreferrer" href="https://dev.to/{{site.dev_username}}">
          <div className="social">
            <svg className="social-svg" viewBox="0 0 48 48">
              <use x="12" y="12" width="24" height="24" viewBox="0 0 48 48" xlink:href="{{ "/assets/img/brands.svg#dev" | prepend: site.baseurl }}"></use>
            </svg>
          </div>
        </a> */}

        {/* linked-in user
        <a className="social-link linkedin" aria-label="My LinkedIn" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/{{site.linkedin_username}}">
          <div className="social">
            <svg className="social-svg" viewBox="0 0 48 48">
              <use x="12" y="12" width="24" height="24" viewBox="0 0 48 48" xlink:href="{{ "/assets/img/brands.svg#linkedin-in" | prepend: site.baseurl }}"></use>
            </svg>
          </div>
        </a> */}

        {/* twitter user
        <a className="social-link twitter" aria-label="My Twitter" target="_blank" rel="noreferrer" href="https://twitter.com/{{site.twitter_username}}">
          <div className="social">
            <svg className="social-svg" viewBox="0 0 48 48">
              <use x="12" y="12" width="24" height="24" viewBox="0 0 48 48" xlink:href="{{ "/assets/img/brands.svg#twitter" | prepend: site.baseurl }}"></use>
            </svg>
          </div>
        </a> */}
      </div>
    </>
  );
}

export default Contact;
