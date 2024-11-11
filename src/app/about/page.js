import DoctorsSection from '@/components/DoctorsSection'
import DrCard from '@/components/DrCard'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
      <div className="py-10 md:py-20 px-4 bg-blue-50">
        <section className="text-center">
          <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold">
            About Us
          </h1>
        </section>
        <main className="grid md:grid-cols-3 md:gap-16 mt-12">
          <section className='md:col-span-2'>
            <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold">
              Our Mission
            </h2>
            <p className="text-slate-600 py-4 text-justify">
              At Northern Heights Dental, people come first. We help each of our patients to achieve optimal wellness and health by using a whole body approach to oral health. This means not just focusing on cavities, but focusing on; cranio-facial development, bite and joint balance, oral flora, proper muscle balance/function, and bio-compatibility of dental materials. Great care and planning ensure that everything we do helps promote overall health and well being.
            </p>
            <p className="md:text-3xl sm:text-2xl text-xl mt-10">
              More than anything else we love creating happy, healthy smiles.
            </p>
            <p className="text-slate-600 py-4 text-justify">
              We work hard to stay up to date with the most advanced techniques and technologies to ensure that our patients receive the best care possible. Our office utilizes 3D CBCT radiographs to allow for guided surgical and endodontic protocols. This enables these procedures to performed digitally before they are performed surgically to ensure optimal results. 3D imaging also is utilized for the analysis of airway growth and development. We also use the best 3D optical scanner for all of our dental restoration and Invisalign impressions. Dr Williams is a strong advocate for using microsurgical techniques, this means less discomfort and faster healing times.
            </p>
          </section>
          <section>
            <Image
              src="/about.png"
              alt="about image"
              className="w-full h-auto"
              width={300}
              height={300}
              priority
            />
          </section>
        </main>

      </div>
      <DoctorsSection />
    </>
  )
}

export default About