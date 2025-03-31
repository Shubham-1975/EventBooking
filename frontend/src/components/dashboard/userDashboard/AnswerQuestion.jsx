import React, { useState } from "react";
const AnswerQuestion = ({ faqs, faqs2 }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [openIndex2, setOpenIndex2] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleAnswer2 = (index) => {
    setOpenIndex2(openIndex2 === index ? null : index);
  };
  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mb-10 mt-10">
        {/* Left Questions */}
        <div className="rounded-lg">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-[#595959]">
              <div
                className="flex justify-between items-center p-4 text-xl font-semibold text-[#585757] cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h1>{faq.question}</h1>
                <span className="text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <div className="p-4 bg-gray-100 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Right Questions (if needed) */}
        <div className=" rounded-lg">
          {faqs2.map((faq, index) => (
            <div key={index} className="border border-[#595959]">
              <div
                className="flex justify-between items-center p-4 text-xl font-semibold text-[#585757] cursor-pointer"
                onClick={() => toggleAnswer2(index)}
              >
                <h1>{faq.question}</h1>
                <span className="text-2xl">
                  {openIndex2 === index ? "−" : "+"}
                </span>
              </div>
              {openIndex2 === index && (
                <div className="p-4 bg-gray-100 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnswerQuestion;
