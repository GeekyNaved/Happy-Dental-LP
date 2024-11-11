import React from "react";

const ContactCard = ({icon, title, subtitle, onClick}) => {
  return (
    <div className="flex items-center gap-4 bg-white rounded-md shadow-lg px-2 py-4 md:px-4 md:py-6 hover:scale-105 duration-200">
      <div className="rounded-full p-2 text-white bg-blue-500 md:text-4xl text-3xl font-bold">
        {icon}
      </div>
      <div className="">
        <h4 className="text-lg font-medium">{title}</h4>
        <p className="text-slate-600">{subtitle}</p>
        {title == "Office Timings" ? (
          <p className="text-slate-600">Sunday (Closed)</p>
        ) : null}
      </div>
    </div>
  );
};

export default ContactCard;
