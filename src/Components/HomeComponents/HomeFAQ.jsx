import React, { useState } from 'react';

const HomeFAQ = () => {

    const [openFAQ, setOpenFAQ] = useState(0);

    // Function to toggle the open state of an FAQ
    const toggleFAQ = (index) => {
      setOpenFAQ(openFAQ === index ? null : index);
    };


    return (
        <section className="py-20 bg-neutral-50 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h6 className="text-2xl text-orange-600 font-semibold text-center mb-2">
          Your Queries, Our Priority
          </h6>
          <h2 className="text-lg font-manrope text-center font-semibold text-gray-900 leading-[3.25rem]">
          Quick and Clear Answers to Help You Navigate Our Tech Services
          </h2>
        </div>

       <div className='flex items-center gap-6'>
       <div className='w-[40%] '>
            <img src="https://www.shutterstock.com/image-vector/flat-con…ometric-illustration-looking-260nw-1856335144.jpg" alt="" />
        </div>

        <div className="accordion-group  w-[60%]">
          {[
            {
              question: "How do I update my billing information?",
              answer:
                "To update your billing information, go to the billing section of your account settings and update your payment details.",
            },
            {
              question: "How can I contact customer support?",
              answer:
                "To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.",
            },
            {
              question: "How do I update my profile information?",
              answer:
                "To update your profile information, navigate to your profile settings and edit your personal details there.",
            },
            {
              question: "How do I find my purchase history?",
              answer:
                "You can find your purchase history in the orders section of your account dashboard.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="accordion py-4 px-6 border-b bg-white border-solid border-gray-200 transition-all duration-500 rounded-xl shadow-md hover:shadow-lg shadow-orange-100 my-5 "
              id={`basic-heading-${index}`}
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left "
                aria-controls={`basic-collapse-${index}`}
                onClick={() => toggleFAQ(index)}
              >
                <h5 className='font-bold'>{item.question}</h5>
                <svg
                  className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <div
                id={`basic-collapse-${index}`}
                className={`accordion-content w-full px-0 overflow-hidden transition-max-height duration-500 ease-in-out ${
                  openFAQ === index ? 'max-h-40' : 'max-h-0'
                }`}
                aria-labelledby={`basic-heading-${index}`}
                style={{ maxHeight: openFAQ === index ? '150px' : '0' }}
              >
                <p className="text-base text-gray-900 leading-6">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
       </div>

      </div>
    </section>
                                              
    );
};

export default HomeFAQ;