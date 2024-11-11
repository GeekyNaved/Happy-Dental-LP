import React from "react";
import DrCard from "./DrCard";

const DoctorsSection = () => {
  return (
    <section className="py-10 px-4">
      <h1 className="text-center md:text-5xl sm:text-4xl text-3xl font-bold">
        Meet our specialists
      </h1>
      <div className="text-center text-slate-600 py-4">
        We use only the best quality materials on the market in order to provide
        the best products to our patients.
      </div>
      <section className="mt-10 mx-auto max-w-screen-lg">
        <DrCard
          imgPath="/dr1.png"
          imgAlt="dr1 image"
          name="DR. Brent"
          job="Specility in General & Cosmetic Service"
          desc="Dr. Brent provides general and cosmetic dentistry services at Northern
          Heights Dental in Flagstaff, Arizona. He has extensive experience in
          general and cosmetic dentistry, including full mouth restoration,
          dental veneers, crowns, bridges, dental implants, wisdom teeth
          extractions, Invisalign, and dentures. Dr. Brent and his younger
          sister grew up in Massachusetts with a mother who worked as a
          hygienist and a grandfather who was a general dentist."
        />
        <DrCard
          imgPath="/dr2.png"
          imgAlt="dr2 image"
          name="DR. Ashish J. Vashi"
          job="Specility in implant dentistry"
          desc="Dr. Ashish J. Vashi has been practicing general, 
            cosmetic and implant dentistry in California for over 18 years. He 
            believes in giving the highest quality dentistry in a comfortable, 
            caring environment. He strives to get to know his patients, not just their teeth.
            including full mouth restoration, dental veneers, crowns, bridges, dental implants, 
            wisdom teeth extractions, Invisalign, and dentures."
        />
        <DrCard
          imgPath="/dr3.png"
          imgAlt="dr3 image"
          name="Dr. James Connors"
          job="Specility in Oral Surgeon"
          desc="When it comes to oral surgeons, few can compare to the modern-day legend
             that is Dr. James Connors. As our oral and maxillofacial surgery specialist, 
             Dr. Connors will brighten your day with his seasoned expertise, welcoming conversations, 
             and – of course – his signature rotation of fun bowties. Dr. Connors and his younger sister
             grew up in Massachusetts with a mother who worked as a hygienist and a grandfather who was a 
             general dentist."
        />
      </section>
    </section>
  );
};

export default DoctorsSection;
