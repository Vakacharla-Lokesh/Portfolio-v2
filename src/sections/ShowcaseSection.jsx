import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section
      id="work"
      className="app-showcase"
      ref={sectionRef}
    >
      <div className="w-full">
        <div className="showcaselayout">
          {/* Project 1 - GameHub */}
          <div
            className="first-project-wrapper"
            ref={project1Ref}
          >
            <div className="image-wrapper">
              <img
                src="/images/gamehub.png"
                alt="GameHub"
              />
            </div>
            <div className="text-content">
              <h2>
                GameHub — Play your favourite games all in one place with this
                fullstack gaming platform.
              </h2>
              <p className="text-white-50 md:text-xl">
                Built with modern web technologies to bring multiple games into
                a single immersive experience.
              </p>
            </div>
          </div>

          {/* Project 2 - Store */}
          <div className="project-list-wrapper overflow-hidden">
            <div
              className="project"
              ref={project2Ref}
            >
              <div className="image-wrapper bg-[#ffefdb]">
                <img
                  src="/images/store.png"
                  alt="Cloud Storage Platform"
                />
              </div>
              <h2>Store — A cloud-based storage solution</h2>
            </div>

            {/* Project 3 - Blog Page */}
            <div
              className="project"
              ref={project3Ref}
            >
              <div className="image-wrapper bg-[#ffe7eb]">
                <img
                  src="/images/blog.png"
                  alt="Blog Page"
                />
              </div>
              <h2>Blog Page — Share your thoughts and ideas with the world</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
