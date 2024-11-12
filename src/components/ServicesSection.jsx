"use client";
import ServicesCard from "./ServicesCard";

const ServicesSection = () => {
  return (
    <div className="bg-blue-50 py-10 px-4">
      <section className="text-center">
        <h1 className="md:text-5xl text-4xl font-bold underline underline-offset-12 decoration-4 decoration-blue-500">
          Services
        </h1>
        <p className="text-slate-600 py-4 max-w-2xl mx-auto">
          We use only the best quality materials on the market in order to
          provide the best products to our patients.
        </p>
      </section>
      <section className="grid md:grid-cols-3 gap-2 md:gap-8 md:mt-10 mt-5">
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
  );
};

export default ServicesSection;
