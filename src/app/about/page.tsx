import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
const page = () => {
  const items = [
    { hobby: "Coding" },
    { hobby: "Playing Games" },
    { hobby: "Watching Movies/Web Series" },
    { hobby: "Tech Blog Writing" },
    { hobby: "Creating Cool Projects" },
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <User2 className="h-4 w-4" />
        About me
      </Badge>
      <div className="flex flex-col gap-5">
        <Heading>
          Software Engineer And Web <br /> Developer, Based In Pakistan.
        </Heading>

        <FramerWrapper y={0} x={100}>
          <p className=" font-poppins text-xl w-full text-primary max-sm:text-lg ">
          With over 8 years of experience in full-stack development, I
have worked extensively across backend and frontend
technologies, specializing in Python, JavaScript, PHP, and
Node.js. My expertise spans API development, system
integrations, and scalable backend solutions, along with
crafting intuitive and high-performance web applications.
On the frontend, I bring 4+ years of experience in building and
maintaining responsive, user-friendly interfaces using HTML5,
CSS3, JavaScript, Vue.js, ReactJS, Bootstrap 4-5, and jQuery. I
have a strong focus on performance optimization, user
experience, and clean, maintainable code.
My ability to work across the entire stack allows me to develop
robust, scalable, and efficient web solutions tailored to diverse
business needs. I thrive in collaborative environments, ensuring
seamless integration between frontend and backend systems
to deliver exceptional digital experiences.

          </p>
        </FramerWrapper>
      </div>
      <FramerWrapper
        className="w-full flex flex-row justify-between max-lg:flex-col "
        y={100}
        delay={0.3}
      >
        <Aboutfooter />
      </FramerWrapper>
      <FramerWrapper className="block" y={100} delay={0.31}>
        <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
          {" "}
          <Heart className="h-8 w-8" /> Hobbies
        </h1>
        <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
          {items.map((val, indx) => {
            return (
              <div
                key={indx}
                className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start "
              >
                <Circle className="h-3 w-3" /> {val.hobby}
              </div>
            );
          })}
        </div>
      </FramerWrapper>
    </div>
  );
};

export default page;
