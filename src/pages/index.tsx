import Logo from "@/components/Logo";
import StatCard from "@/components/StatCard";
import { useIsVisible } from "@/hooks/useIsVisible";
import { api } from "@/utils/api";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const owo = api.location.location.useQuery({}, {refetchOnWindowFocus: false});

  const [happened, setHappened] = useState(false);

  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
  const isVisible = useIsVisible(ref);

  useEffect(() => {
    if (isVisible && !happened) {
      setTimeout(() => {
        setHappened(true);
      }, 600);
    }
  }, [isVisible]);

  return (
    <>
      {/* hero */}
      <section className="w-full relative">
        <img className="w-full" src="/wolfy.png" alt="" />
        <h1 className="font-inter text-white xl:text-[6rem] lg:text-[5rem] md:text-[3rem] text-[2rem] xl:leading-[9rem] lg:leading-[6rem] absolute xl:top-[5%] lg:top-[8%] top-[10%] text-center w-full font-bold">BE A VOICE <br /> FOR WILDLIFE</h1>
        <h3 className="font-inter text-white xl:text-[3rem] lg:text-[2.5rem] md:text-[2rem] xl:mt-8 text-[1.0rem] lg:leading-[5rem] absolute top-[55%] text-center w-full px-[8rem]">Uniting for the Healing and Conservation of Our Wild Companions</h3>
      </section>

      {/* location and thingies near me */}
      <section className="w-full">
        <div ref={ref} className="flex lg:flex-row flex-col lg:justify-between lg:items-center py-10 px-20">
          {/* left location */}
          <div className={`lg:w-[55%] bg-wild-300 flex flex-col rounded-3xl ${happened ? "" : isVisible ? "animate-in" : "opacity-0"} lg:slide-in-from-left lg:fade-in-image duration-500`}>
            {/* percise location */}
            <div className="text-center text-7xl">
              <div className="py-3"></div>
              <label className="text-white font-inter">Location</label>
              <div className="py-2" />
              <label className="text-[#E29E44] text-5xl font-inter">{owo.data ? owo.data.city + ", " + owo.data.region : "Loading"} </label>
              <div className="py-4" />
            </div>
            <div className="h-2 w-full bg-white" />
            {/* learn more */}
            <div className="flex justify-between items-center py-16 px-8">
              <p className="text-white text-xs 2xl:text-2xl xl:text-xl lg:text-base md:text-lg sm:text-sm  w-[65%]">Encountered an <strong className="text-[#E29E44]">Injured or Lost Animal?</strong> <br/> <strong>Talk to our <span className="text-[#E29E44]">Chatbot</span></strong> to Determine if Calling a Rehabilitation Center is Needed!</p>
              <a href="/animalgpt" className="coolBtn">LEARN MORE</a>
            </div>
            <p className="text-white text-2xl">{owo.data ? !owo.data.isInNJ ? "*You aren't in NJ, so we've set your location to Lambertville" : "" : ""}</p>
          </div>
          {/* right map */}
          <div className={`lg:w-[40%] lg:mt-0 mt-6 block ${happened ? "" : isVisible ? "animate-in" : "opacity-0"} lg:slide-in-from-right duration-500`}>
            <iframe className="w-full border-4 border-wild-300 rounded-3xl" src={owo.data ? 
              owo.data.rehab ? owo.data.rehab.src 
              : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12172.065935309933!2d-74.76881695000002!3d40.29759295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3fd2cf2d88343%3A0x47f2b1997c276cc2!2sJazzercise!5e0!3m2!1sen!2sus!4v1691886766069!5m2!1sen!2sus"
              : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12172.065935309933!2d-74.76881695000002!3d40.29759295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3fd2cf2d88343%3A0x47f2b1997c276cc2!2sJazzercise!5e0!3m2!1sen!2sus!4v1691886766069!5m2!1sen!2sus"
            } width="600" height="450" loading="lazy" allowFullScreen={false} referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
      <div className="opacity-0" ref={ref}></div>
      {/* STATS */}
      <section className="w-full">
        <div className="flex lg:flex-row flex-col py-10 px-20 lg:space-x-8 space-x-0 space-y-8 lg:space-y-0">
          <StatCard 
            title="20,000" 
            desc={<p className="font-inter font-medium text-[#84A98C] text-xl">wild animals <strong>every year</strong> in New Jersey are injured, orphaned, or sick, requiring urgent care and rehabilitation to survive.</p>}
            imgSrc="/deer.png"
          />
          <StatCard 
            title="80%" 
            desc={<p className="font-inter font-medium text-[#84A98C] text-xl">of wildlife admitted to rehabilitation centers are <strong>directly or indirectly affected by human activities</strong>, underscoring the urgent need for conservation efforts.</p>}
            imgSrc="/doggo.png"
          />
          <StatCard
            title="67%"
            desc={<p className="font-inter font-medium text-[#84A98C] text-xl">of these animals suffer from head trauma, shock, dehydration, and fractures due to various factors in their environment, often tainted as a result of <strong>human activities</strong></p>}
            imgSrc="/cat.png"
          />
        </div>
      </section>
      {/* LOGO */}
      <section className="w-full flex flex-col justify-center items-center">
        <Logo classes="w-[12rem]"/>
        <p className="font-Inter text-[#52796F] py-10 px-20 text-xl text-center">
          <strong>Amidst our natural world, countless wild beings silently battle challenges. Some are wounded, orphaned, or affected by human actions. Others yearn to help but lack direction. Enter Wildlife Connect - a beacon for change.</strong>
          <br />
          We emerge from a shared drive to aid these creatures. Our mission: Empower you to support wildlife rehabilitation. We illuminate pathways to assist, welcoming volunteers and contributions to alleviate the struggles of our wild companions.
        </p>
      </section>
      {/* Images */}
      <section className="w-full">
        <div className="py-10 px-20 flex lg:flex-row flex-col space-y-8 lg:space-y-0 space-x-0 lg:space-x-8 justify-center items-center">
          <img src="./tree girl.png" alt="tree girl" />
          <img src="./world.png" alt="world" />
          <img src="./leaves.png" alt="leaves" />
        </div>
      </section>
      {/* EMAIL US BITCH */}
      <section className="w-full">
        <div className="py-10 xl:px-[5rem] lg:px-[8rem] px-[7rem]">
          <div className="bg-wild-200 px-[4rem] py-[2rem] flex lg:flex-row flex-col-reverse items-center justify-center space-x-0 lg:space-x-8 rounded-3xl">
            <p className="font-inter text-3xl leading-[3rem] text-center text-white mt-8 lg:mt-0">
            Get in Touch and Make a Difference! Reach Out to Us at <span className="text-[#E29E44]">info@wildlifeconnect.org</span> for More Exciting Details!
            </p>
            <img className="w-[10rem]" src="handshake.png" alt="handshake" />
          </div>
        </div>
      </section>
    </>
  );
}
