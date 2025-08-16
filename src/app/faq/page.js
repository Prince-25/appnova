
import Image from "next/image";
import mapImg from "../../assets/images/map.png";

export default function Faq() {
  return (
    <div className="appnova-banner-sm appnova-deep-bg">
      <Image
        src={mapImg}
        alt="background"
        className="appnova-background-image"
      />
      <div className="appnova-deco appnova-deco-accent"></div>
      <div className="appnova-banner-content">
        <div className="container position-relative">
          <ul className="appnova-breadcrumbs d-flex mb-5">
            <li>
              <a href="home-1.html">Home</a>
            </li>
            <li>
              <a href="about.html">FAQ</a>
            </li>
          </ul>
          <h2 className="appnova-about-heading">FAQ</h2>
        </div>
      </div>
    </div>
  );
}
