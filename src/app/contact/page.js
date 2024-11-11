import ContactCard from '@/components/ContactCard'
import React from 'react'
import { CiClock1 } from "react-icons/ci";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="min-h-screen py-10 md:py-20 px-4 bg-blue-50">
      <section className="text-center">
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold">
          Get In Touch
        </h1>
        <div className="text-center text-slate-600 py-4">
          Book an Appointment to treat your teeth right now.
        </div>
      </section>
      <main className="mt-10 mx-auto max-w-screen-lg grid md:grid-cols-2 md:gap-16 gap-4">
        <section>
          <div className='border-2 border-blue-500 rounded-md p-1 shadow-md'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9941.857184117842!2d-0.455051!3d51.4679914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767234cdc56de9%3A0x8fe7535543f64167!2sHeathrow%20Airport!5e0!3m2!1sen!2sin!4v1728704131027!5m2!1sen!2sin"
              width="100%"
              height="400rem"
              style={{ border: 0 }}
              allowFullScreen={undefined}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </section>
        <section className='flex flex-col gap-4 md:gap-8'>
          <ContactCard
            icon={<CiClock1 />}
            title="Office Timings"
            subtitle="Monday - Saturday (9:00am to 5pm)"
          />
          <ContactCard
            icon={<MdOutlineAttachEmail />}
            title="Email Address"
            subtitle="happy-dental@gmail.com"
          />
          <ContactCard
            icon={<IoCallOutline />}
            title="Phone Number"
            subtitle="+91 9876543210"
          />
        </section>
      </main>
    </div>
  )
}

export default Contact