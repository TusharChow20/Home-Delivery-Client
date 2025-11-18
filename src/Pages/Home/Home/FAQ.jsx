import React from "react";

const FAQ = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked Question (FAQ)
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>
        <div className="space-y-4">
          <div className="collapse collapse-arrow bg-white shadow-md rounded-2xl border border-teal-200">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title text-lg font-semibold text-gray-800">
              How does this posture corrector work?
            </div>
            <div className="collapse-content text-gray-600">
              <p>
                A posture corrector works by providing support and gentle
                alignment to your shoulders, back, and spine, encouraging you to
                maintain proper posture throughout the day. Here's how it
                typically functions: A posture corrector works by providing
                support and gentle alignment to your shoulders.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-white shadow-md rounded-2xl border border-gray-200 hover:border-teal-200 transition-colors">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-semibold text-gray-800">
              Is it suitable for all ages and body types?
            </div>
            <div className="collapse-content text-gray-600">
              <p>
                Yes, most posture correctors are designed to be adjustable and
                accommodate various body types and ages. However, it's
                recommended to check the specific product's sizing guide and
                consult with a healthcare professional if you have any concerns.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-white shadow-md rounded-2xl border border-gray-200 hover:border-teal-200 transition-colors">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-semibold text-gray-800">
              Does it really help with back pain and posture improvement?
            </div>
            <div className="collapse-content text-gray-600">
              <p>
                Yes, when used consistently and correctly, posture correctors
                can help reduce back pain by promoting proper spinal alignment
                and reducing strain on muscles. They work best when combined
                with strengthening exercises and mindful posture habits.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-white shadow-md rounded-2xl border border-gray-200 hover:border-teal-200 transition-colors">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-semibold text-gray-800">
              Does it have smart features like vibration alerts?
            </div>
            <div className="collapse-content text-gray-600">
              <p>
                Some advanced posture correctors include smart features such as
                vibration alerts that remind you when you're slouching. These
                models often connect to smartphone apps for tracking and
                personalized feedback.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-white shadow-md rounded-2xl border border-gray-200 hover:border-teal-200 transition-colors">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-semibold text-gray-800">
              How will I be notified when the product is back in stock?
            </div>
            <div className="collapse-content text-gray-600">
              <p>
                You can sign up for email notifications on the product page.
                Once the item is back in stock, you'll receive an automatic
                email alert so you can place your order immediately.
              </p>
            </div>
          </div>
        </div>

        {/* See More Button */}
        <div className="flex justify-center mt-10">
          <button className="btn btn-lg bg-gradient-to-r from-lime-300 to-lime-400 hover:from-lime-400 hover:to-lime-500 border-none text-gray-800 font-semibold rounded-full px-8 shadow-lg hover:shadow-xl transition-all">
            See More FAQ's
            <div className="bg-gray-800 rounded-full p-2 ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 11l5-5m0 0l5 5m-5-5v12"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
