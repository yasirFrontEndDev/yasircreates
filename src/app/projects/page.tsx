import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Devzone - A community chat app for devs",
      description:
        `DevZone is the ultimate chat platform for developers
to connect, collaborate, and code together. Join the conversation and level up your coding journey.`,
      tags: ["Zustand", "Supabase", "Shadcn Ui", "Nextjs"],
      link: "https://devzone-ti.vercel.app/",
    },
   
    {
      title: "ic360- Empowering Integrity.Redefining Compliance.",
      description:
        "IC360's mission is to set new standards by providing unparalled services that ensure integrity, transparency, and compliance at the intersection of the rapidly evolving global sports betting market and sports integrity. ",
      tags: ["Framer Motion","Nextjs", "Typescript", "Shadcn Ui"],
      link: "https://ic360.io/",
    },
    {
      title: "Gunners- Latest Arsenal News",
      description:"The ultimate Arsenal fan community. All the latest Arsenal news, transfer gossip, live scores and videos in one place. ",     
      tags: ["Angular", "Typescript", "Laravel"],
      link: "https://www.gunners.com/",
    },
    // {
    //   title: "Mixcn-ui- Reusable components for Nextjs",
    //   description:
    //     "This is Nextjs app with a Collection of Nextjs Components - (Currently under Devlelopment) ",
    //   tags: ["Nextjs", "Shadcnui", "Npx","Library"],
    //   link: "https://mixcn-ui.vercel.app",
    // },
    {
      title: "Rupeespot- All deals Product in one place",
      description:
        "This is a free tool to check price history charts for millions of products for popular Indian stores such as Amazon and Flipkart. ",
      tags: ["Nextjs", "Freelancing", "MySQL"],
      link: "https://rupeespot.com/",
    },
    {
      title: "SwiftReels- Faceless Videos on Auto-Pilot",
      description:
        "Our advanced AI video creation platform empowers you to fully automate your faceless channel with ease and efficiency.",
      tags: ["Python" , "Reactjs", "Shadcnui", "Laravel", "Bootstrap"],
      link: "https://swiftreels.com/",
    },
    
    {
      title: "KryptoKapital- Investing in Cryptocurreny",
      description:
        "This is a platform for learning about cryptocurrency with many tools and festures. It is very big project. ",
      tags: ["Nextjs", "Freelancing", "Supabase"],
      link: "https://pro.kryptokapital.info/",
    },
    {
      title: "Blissiree - Wellness and Mental Health App",
      description:
        "Blissiree is an app that helps people suffering from anxiety, depression, limiting beliefs and more. It’s evidence-based and can be used from the comfort of your own home. ",
      tags: ["Angular", "OAuth", "Typescript", "Laravel"],
      link: "https://blissiree.com/",
    },
    {
      title: "Berain- Berain Water",
      description:
        "We make it easier for you to choose the perfect drinking water for you and your family, with world-class quality and a range of sizes to suit all occasions.",
      tags: ["Wordpress", "laravel", "woocommerce"],
      link: "https://berain.com.sa",
    },
    {
      title: "99Gens - By robots, for humans.",
      description:
        "99GENS is a platform that allows users to generate or submit art and quickly publish 30 (and growing) Print-on-demand merchandise products such as All-over Print backpacks, hoodies, sweatshirts, jackets, dresses and more. In less than 60 seconds you can preview and purchase your artwork on multiple print-on-demand products.",
      tags: ["Reactjs", "Python", "nodejs" , "AI", "Replicate" , "Printful"],
      link: "https://preview.99gens.com/",
    },
    // {
    //   title: "CrouMaker - A Crousal Maker App",
    //   description:
    //     "Crousal Maker is a tool with in-built crousals templates edit and download it in any format.",
    //   tags: ["Nextjs", "jsPDF", "html2canvas", "Shadcn Ui"],
    //   link: "https://github.com/taqui-786/crousal-maker",
    // },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Layers className="h-4 w-4" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
