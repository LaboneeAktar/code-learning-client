import React from "react";
import skill1 from "../../assets/images/top-skills-designer-twt.png";
import skill2 from "../../assets/images/Skills.PNG";
import responsibility from "../../assets/images/resposibility.jpg";

const Skills = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse p-10">
          <img src={skill1} className="rounded-lg lg:w-1/2 shadow-2xl" alt="" />
          <div>
            <h1 className="text-3xl">Focus on Your Skills!!</h1>
            <p className="py-6 pr-6 text-[18px]">
              Web designers plan, create and code internet sites and web pages,
              many of which combine text with sounds, pictures, graphics and
              video clips. Learning web design theory is important because there
              are certain foundational principles for creating excellent
              websites, including color theory, structure and user experience.
            </p>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row p-10">
          <img src={skill2} className="rounded-lg lg:w-1/2 shadow-2xl" alt="" />
          <div>
            <h1 className="text-3xl pl-6">Learn Powerfull Skills!!</h1>
            <p className="py-6 pl-6 text-[18px]">
              These three tools dominate web development. Every library or tool
              seems to be centered around HTML, CSS, and JS. So if you want to
              become a web developer, you need to learn them well. Also known
              about GitHub, React.js, Node.js, Database.
            </p>
          </div>
        </div>
      </div>
      <div className="hero mb-10">
        <div className="hero-content flex-col lg:flex-row-reverse p-10">
          <img
            src={responsibility}
            className="rounded-lg lg:w-1/2 shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-3xl">Responsibilites!!</h1>
            <p className="py-6 pr-6 text-[18px]">
              Learning how to code allows you to bring out your personality on
              your own website, enables you to stand out from the crowd,
              contribute to projects better, helps you understand and explore
              other languages and provides you with an opportunity to transition
              into a different career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
