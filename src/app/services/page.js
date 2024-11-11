import AboutusCall2Action from '@/components/AboutusCall2Action'
import ServicesCard from '@/components/ServicesCard'
import React from 'react'

const Services = () => {
  return (
    <>
      <div className="py-10 md:py-20 px-4 bg-blue-50">
        <section className="text-center">
          <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold">
            Services
          </h1>
          <header className="text-slate-600 py-4">
            We use only the best quality materials on the market in order to
            <p>
              provide the best products to our patients.
            </p>
          </header>
        </section>
        <section className="grid md:grid-cols-3 gap-2 md:gap-8 mt-8">
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
          <ServicesCard
            imgPath="/tooth.png"
            imgAlt="tooth image"
            title="Teeth Whitening"
            description="It's never been easier to brighten your smile at home. There are all kinds of products you can try."
          />
          <ServicesCard
            imgPath="/dental.png"
            imgAlt="dental image"
            title="Emergency Dentistry"
            description="In general, any dental problem that needs immediate treatment to stop bleeding, alleviate severe pain."
          />
          <ServicesCard
            imgPath="/dentalCare.png"
            imgAlt="dentalCare image"
            title="Prevention"
            description="Preventive dentistry is dental care that helps maintain good oral health. a combination of regular dental."
          />
        </section>
      </div>
      <div className='mt-5'>
        <AboutusCall2Action />
      </div>
    </>
  )
}

export default Services