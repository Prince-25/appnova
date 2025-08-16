
import Image from "next/image";
import mapImg from "../../assets/images/map.png";

import ownerImg from "../../assets/images/t2.png";

export default function About() {
  return (
    <>
      <div className="appnova-banner-sm appnova-deep-bg">
        <Image src={mapImg} alt="background" className="appnova-background-image" />
        <div
          className="appnova-deco appnova-deco-accent"
        
        ></div>
        <div className="appnova-banner-content">
          <div className="container position-relative">
            <ul className="appnova-breadcrumbs d-flex mb-5">
              <li>
                <a href="home-1.html">Home</a>
              </li>
              <li>
                <a href="about.html">About us</a>
              </li>
            </ul>
            <h2 className="appnova-about-heading">Enterprise</h2>
          </div>
        </div>
      </div>
    <section class="appnova-deep-bg appnova-p-120-60">
            <div class="appnova-top-deco"></div>
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <div class="col-lg-5 appnova-mb-60">

                        <div class="appnova-circle-illustration">
                            <div class="appnova-circle-bg"></div>
                            <div class="appnova-image-frame">
                                <Image src={ownerImg} alt="img" />
                            </div>
                        </div>

                    </div>
                    <div class="col-lg-6 appnova-mb-60">

                        <span class="appnova-suptitle appnova-suptitle-2 mb-5">IT Enterprise</span>
                        <h2 class="appnova-sub-title">Our Mission</h2>

                        <p class="appnova-para">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. There are many variations of passages majority.</p>

                        <ul class="appnova-simple-list">
                            <li>Accelerate innovation.</li>
                            <li>With world class tech teams.</li>
                            <li>Our all service offerings to enhance.</li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
