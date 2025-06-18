import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavLink from "./assets/components/navbar";
import Header from "./assets/components/header";
import BottomNavBar from "./assets/components/bottomnavbar";
import AboutMe from "./assets/components/about";
import Card from "./assets/components/card";
import ButtonCard from "./assets/components/buttomCard";
import ProjectCard from "./assets/components/projectCard";

function App() {
  useEffect(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
}, []);

  return (
    <>
      
      <div className="px-4 sm:px-8 md:px-18 lg:px-42 xl:px-60 pt-20" data-aos="fade-down">
        <Header />
        <p className="text-3xl md:text-3xl font-semibold text-center mt-10" data-aos="fade-down"> About Me</p>
        <AboutMe />
        <p className="text-3xl md:text-3xl font-semibold text-center mt-10 mb-10" data-aos="fade-down"> Experience</p>
        <div className="flex flex-col justify-center items-center">
          <Card text={"Fieldy AI"} img={"src/assets/fieldy.png"} description={"Customer Experience Specialist"} />
          <div className="w-px h-12  border-dashed border-1"></div>
          <Card text={"Cyber Care"} img={"src/assets/cc.png"} description={"Customer Success Manager"} />
          <div className="w-px h-12  border-dashed border-1"></div>
          <Card text={"Cloud Counselage"} img={"src/assets/cloud.png"} description={"Flutter Developer Intern"} />
          <div className="w-px h-12  border-dashed border-1"></div>
          <Card text={"Google Developers Student Club"} img={"src/assets/google.png"} description={"Tech Team"} />
        </div>
        <p className="text-3xl md:text-3xl font-semibold text-center mt-10 mb-10" data-aos="fade-up"> Skills</p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <ButtonCard image={"src/assets/flutter.png"} text={"Flutter"} />
          <ButtonCard image={"src/assets/react.png"} text={"React"} />
          <ButtonCard image={"src/assets/ui.png"} text={"UI/UX"} />
          <ButtonCard image={"src/assets/python.png"} text={"Python"} />
          <ButtonCard image={"src/assets/java.png"} text={"Java"} />
          <ButtonCard image={"src/assets/firebase.png"} text={"Firebase"} />
        </div>
        <p className="text-3xl md:text-3xl font-semibold text-center mt-10 mb-10" data-aos="fade-up">Acheivments</p>
        <div className="flex flex-col justify-center items-center">
          <Card text={"Cloud Counselage Pvt.Ltd"} img={"src/assets/cup.png"} description={"Winner of National level mobile app development hackathon"} />
          <div className="w-px h-12  border-dashed border-1"></div>
          <Card text={"Hackfest2022- PSG iTech"} img={"src/assets/cup.png"} description={"Selected as Top 25 among 600 Teams"} />
        </div>
        <p className="text-3xl md:text-3xl font-semibold text-center mt-10 mb-10" data-aos="fade-up">Projects</p>
         <div className="flex flex-wrap justify-center gap-4 mb-20">
        <ProjectCard img={"src/assets/p1.png"} text={"Avail"} description={"A community app that reduces food waste by connecting restaurants with people in need, while also linking NGOs to orphanages for essential support."} />
        <ProjectCard img={"src/assets/p2.png"} text={"LeafWatch"} description={"Monitor your plants in real-time with LeafWatch — get insights on health, soil, and growth to keep your garden thriving."} />
        <ProjectCard img={"src/assets/p3.png"} text={"TastyPal"} description={"TastyPal is your smart culinary companion scan food labels, detect allergens with GPT, explore personalized recipes, and enjoy safe, delightful meals."} />
        <ProjectCard img={"src/assets/p4.png"} text={"SolarScope"} description={"SolarScope guides you toward sustainable living with real-time solar insights, cost estimates, and energy trends — making clean energy simple and empowering."} />
        </div>

        
        <div className="flex flex-col items-center justify-center text-center py-10 px-4">
  <h2 className="text-3xl font-bold mb-4 text-[#393E46]" data-aos="fade-up">Contact Me!</h2>
  <p className="text-lg text-[#393E46] max-w-xl" id="subhead">
    If you have any questions or would like to get in touch, please feel free to reach out to me at<br />
    <a href="mailto:abhishekarvind07@gmail.com" className="text-[#DAC5A7] underline">
      abhishekarvind07@gmail.com
    </a>
  </p>
</div>

      </div>
      <NavLink />
      <BottomNavBar/>

    </>
  );
}

export default App;
