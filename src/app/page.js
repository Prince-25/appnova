"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slider1 from "../assets/images/slider1.jpg";
import slider2 from "../assets/images/slider2.jpg";
import slider3 from "../assets/images/slider3.jpg";

import match1 from "../assets/images/mact1.svg";
import match2 from "../assets/images/mact2.svg";
import match3 from "../assets/images/mact3.svg";
import match4 from "../assets/images/mact4.svg";
import match5 from "../assets/images/mact5.svg";
import match6 from "../assets/images/mact6.svg";
import Image from "next/image";

export default function Home() {
  const slides = [slider1, slider2, slider3, slider2, slider1];

  console.log("slider1", slider1);

  return (
    // <div className={styles.page}>
    //   <main className={styles.main}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol>
    //       <li>
    //         Get started by editing <code>src/app/page.js</code>.
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className={styles.ctas}>
    //       <a
    //         className={styles.primary}
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className={styles.logo}
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className={styles.secondary}
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className={styles.footer}>
    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
    <>
      <div className="hero-slider">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          loop
        >
          {slides.map((src, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  backgroundImage: `url(${src.src})`,
                  height: "900px",
                  width: "100%",
                }}
              >
                <p>
                  The Next <span>Gen</span>
                </p>
                <h1>
                  WE PROVIDE SERVICES AND SOLUTIONS <span>To Enterprise</span>
                </h1>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <button className="cta-button">Let’s Talk</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* // how we can help */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">
            How We Can <span className="highlight">Help You</span>
          </h2>

          <div className="services-grid">
            {/* IT Services */}
            <div className="service-column">
              <h4 className="column-title">IT Services</h4>
              <div className="mil-divider mil-divider-left"></div>
              <div className="service-item">
                <div className="icon">
                  <Image
                    src={match1}
                    alt="Dedicated Team"
                    height="30px"
                    width="30px"
                  />
                </div>
                <div className="text">
                  <h5>
                    <span className="number">01</span> Dedicated Team
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </p>
                </div>
              </div>

              <div className="service-item">
                <div className="icon">
                  <Image
                    src={match2}
                    alt="QA and Testing"
                    height="30px"
                    width="30px"
                  />
                </div>
                <div className="text">
                  <h5>
                    <span className="number">02</span> QA and Testing
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </p>
                </div>
              </div>

              <div className="service-item">
                <div className="icon">
                  <Image src={match3} alt="SaaS" height="30px" width="30px" />
                </div>
                <div className="text">
                  <h5>
                    <span className="number">03</span> SaaS
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </p>
                </div>
              </div>
            </div>

            {/* IT Solutions */}
            <div className="service-column">
              <h4 className="column-title">IT Solutions</h4>
              <div className="mil-divider mil-divider-left"></div>
              <div className="service-item">
                <div className="icon">
                  <Image
                    src={match4}
                    alt="Blockchain"
                    height="30px"
                    width="30px"
                  />
                </div>
                <div className="text">
                  <h5>
                    <span className="number">01</span> Blockchain
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </p>
                </div>
              </div>

              <div className="service-item">
                <div className="icon">
                  <Image src={match5} alt="AI" height="30px" width="30px" />
                </div>
                <div className="text">
                  <h5>
                    <span className="number">02</span> Artificial Intelligence
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </p>
                </div>
              </div>

              <div className="service-item">
                <div className="icon">
                  <Image src={match6} alt="IoT" height="30px" width="30px" />
                </div>
                <div className="text">
                  <h5>
                    <span className="number">03</span> Internet of Things
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* // collab */}

      <section className="collab-section">
        <div className="collab-deco deco-top"></div>
        <div className="collab-deco deco-bottom"></div>

        <div className="container">
          <span className="collab-subtitle">Discover Our Company</span>
          <h2 className="collab-title">
            How We <span className="highlight">Collaborate</span> With You
          </h2>

          <div className="collab-grid">
            <div className="collab-item">
              <div className="collab-icon">
                <Image
                  src={match1}
                  alt="Thinking Big"
                  height="20px"
                  width="20px"
                />
              </div>
              <h5>Thinking Big</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="collab-item">
              <div className="collab-icon">
                <Image
                  src={match2}
                  alt="Starting Small"
                  height="20px"
                  width="20px"
                />
              </div>
              <h5>Starting Small</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="collab-item">
              <div className="collab-icon">
                <Image
                  src={match3}
                  alt="Creating Fast"
                  height="20px"
                  width="20px"
                />
              </div>
              <h5>Creating Fast</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="collab-item">
              <div className="collab-icon">
                <Image
                  src={match4}
                  alt="Innovating Scale"
                  height="20px"
                  width="20px"
                />
              </div>
              <h5>Innovating Scale</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* <div className="collab-buttons">
            <a href="#." className="btn-link">
              Learn More
            </a>
            <a href="#." className="btn-outline">
              How We Work
            </a>
          </div> */}
        </div>
      </section>

      {/* // contact us */}

      <section className="contact">
        <div className="contact-deco-accent"></div>
        <div className="container">
          <h2 className="contact-title">
            Contact <span>Us</span>
          </h2>
          <form className="contact-form">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label for="name">
                    Name <span className="required">Required</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <label for="email">
                    Email Address <span className="required">Required</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label for="phone">
                    Phone <span className="required">Optional</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-group">
                  <label for="message">Message <span className="required">Optional</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows="1"
                    placeholder="Write your message..."
                  ></textarea>
                </div>
              </div>
            </div>

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
