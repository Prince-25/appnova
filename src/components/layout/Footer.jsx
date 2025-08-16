import Image from "next/image";
import mapImg from "../../assets/images/map.png";
import logoImg from "../../assets/images/logo-light.png";

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "YouTube", href: "#" },
  ];

  const footerLinks = [
    { name: "Terms & Condition", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Sitemap", href: "#" },
  ];

  return (
    <footer className="footer">
      <Image src={mapImg} alt="background" className="mil-footer-bg" />
      <div className="container">
        <div className="footer__content">
          {/* Left Section - Logo and Description */}
          <div className="footer__left">
            <div className="footer__logo">
              <Image src={logoImg} alt="" height={23} width={140} />
            </div>

            <p className="footer__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>

            {/* App Store Buttons */}
            <div className="app-buttons">
              <div className="app-button">
                <svg className="app-button__icon" width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.685 12l2.013-2.491zM5.864 2.658L16.802 8.99 14.5 11.293 5.864 2.658z"/>
                </svg>
                <div className="app-button__text">
                  <div className="app-button__subtitle">Available on the</div>
                  <div className="app-button__title">Google Play</div>
                </div>
              </div>

              <div className="app-button">
                <svg className="app-button__icon" width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="app-button__text">
                  <div className="app-button__subtitle">Download on the</div>
                  <div className="app-button__title">App Store</div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Section - Newsletter */}
          <div className="footer__center">
            <div className="newsletter">
              <h3 className="newsletter__title">
                Join The <span className="newsletter__highlight">ITSulu</span>
              </h3>
              <h3 className="newsletter__title">Experience</h3>
              <p className="newsletter__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                diam nonummy.
              </p>
            </div>
          </div>

          {/* Right Section - Empty for spacing */}
          <div className="footer__right">
            <div className="newsletter__form">
              <input
                type="email"
                placeholder="Your email address"
                className="newsletter__input"
              />
              <button className="newsletter__button">Subscribe Now</button>
            </div>
          </div>
        </div>
        <div className="mil-divider"></div>
        {/* Bottom Section */}
        <div className="footer__bottom">
          <div className="footer__bottom-content">
            {/* Social Links */}
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="social-links__item"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Footer Links */}
            <div className="footer-links">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="footer-links__item"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="copy-footer-bottom">
        <div className="container">
          <p className="copy-text-sm copy-light">© ITSulu 2023.</p>
          <p className="copy-text-sm copy-light">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
