import React from "react";

function Footer() {
  const dnt = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;

  return (
    <>
      <footer className="footer">
        <p>
          &copy; 2020 Designed &amp; Developed by
          <a className="highlight-link" href="https://longpdo.github.io/" target="_blank" rel="noreferrer">
            Long Do
          </a>
        </p>
        <p>
          Built with
          <a className="highlight-link" href="https://jekyllrb.com/" target="_blank" rel="noreferrer">
            Jekyll
          </a>
          and powered by
          <a className="highlight-link" href="https://pages.github.com/" target="_blank" rel="noreferrer">
            Github Pages
          </a>
        </p>
      </footer>

      {/* Google Analytics */}
      <script>
        {/* {if (dnt != "1" && dnt != "yes") {
    (function (i, s, o, g, r, a, m) {
      i["GoogleAnalyticsObject"] = r;
      (i[r] =
        i[r] ||
        function () {
          (i[r].q = i[r].q || []).push(arguments);
        }),
        (i[r].l = 1 * new Date());
      (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m);
    })(
      window,
      document,
      "script",
      "https://www.google-analytics.com/analytics.js",
      "ga"
    );
    ga("create", "UA-150778693-1", "auto");
    ga("send", "pageview");
  }} */}
      </script>
    </>
  );
}

export default Footer;
