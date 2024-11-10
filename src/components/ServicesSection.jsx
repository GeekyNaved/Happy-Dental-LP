"use client";
import ServicesCard from "./ServicesCard";

const ServicesSection = () => {
  return (
    <div className="bg-blue-50 py-10 px-4">
      <div className="max-w-screen-xl mx-auto">
        <section className="grid md:grid-cols-3 gap-2 md:gap-8">
          <ServicesCard
            imgPath="/teeth.png"
            imgAlt="teeth image"
            title="Root Canal Treatment"
            description=" Root canal treatment (endodontics) is a dental procedure used to treat
        infection at the centre of a tooth."
          />
          <ServicesCard
            imgPath="/smile.png"
            imgAlt="smile image"
            title="Cosmetic Dentist"
            description="Cosmetic dentistry is the branch of dentistry that focuses on
              improving the appearance of your smile."
          />
          <ServicesCard
            imgPath="/implant.png"
            imgAlt="implant image"
            title="Dental Implants"
            description="A dental implant is an artificial tooth root that’s placed into
              your jaw to hold a prosthetic tooth or bridge."
          />
        </section>
      </div>
    </div>
  );
};

export default ServicesSection;
