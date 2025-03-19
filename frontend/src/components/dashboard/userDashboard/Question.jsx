import React, { useState } from "react";

const Question = () => {
  const faqs = [
    {
      question: "How much does event management cost in Bihar?",
      answer:
        "The cost varies depending on the services, location, and scale of the event. It typically ranges from ₹50,000 to ₹5,00,000.",
    },
    {
      question: "What are the best wedding venues in Bihar?",
      answer:
        "Some of the top venues include heritage hotels, banquet halls, and resorts in Patna, Gaya, and Muzaffarpur.",
    },
    {
      question: "Do you provide catering services along with venue booking?",
      answer:
        "Yes, we offer complete event solutions, including catering, decoration, and entertainment.",
    },
    {
      question: "Do You Arrange Weddings on a Budget?",
      answer:
        "Yes, we arrange weddings on a budget while ensuring elegance and quality. By selecting affordable venues, simplifying décor, keeping guest lists intimate, and optimizing catering choices, we create a memorable experience without overspending. Our team helps negotiate vendor deals, find cost-effective photography and entertainment, and offer smart shopping options for attire and accessories. With careful planning and creativity, we make your dream wedding both beautiful and budget-friendly.",
    },
  ];

  const faqs2 = [
    {
      question:
        "Can I contact your past clients or references? Can I attend one of your upcoming events nearby?",
      answer:
        "Yes, we can provide references from past clients upon request, allowing you to hear firsthand about their experience with our services. Additionally, if there is an upcoming event nearby, we can arrange for you to attend and see our work in action, ensuring transparency and confidence in our event planning expertise.",
    },
    {
      question: "Who is the owner of DreamAmbition Event Management Company?",
      answer:
        "DreamAmbition Event Management Company is owned by Shubham Rawat, who leads the team with expertise and dedication to creating unforgettable events.",
    },
    {
      question: "How much does a destination wedding cost in Bihar?",
      answer:
        "The cost of a destination wedding in Bihar typically ranges from ₹5 lakh to ₹20 lakh or more, depending on factors like the venue, décor, catering, and guest count. Budget-friendly options include banquet halls and community centers, while mid-range and luxury weddings take place in heritage properties or five-star hotels with premium services. Costs can be optimized by selecting off-season dates, negotiating with vendors, and choosing local suppliers.",
    },
    {
      question:
        "Why is entertainment important in weddings? Do you offer entertainment services?",
      answer:
        "Entertainment is essential in weddings as it keeps guests engaged, creates a lively atmosphere, and enhances the overall experience with music, dance, and performances. It helps set the mood, makes moments more memorable, and ensures a joyful celebration. Yes, we offer entertainment services, including live bands, DJs, traditional performances, and customized acts to suit your wedding theme and preferences.",
    },
    {
      question:
        "What sets your event management company apart and how can clients trust that their events will be handled with excellence?",
      answer:
        "Our event management company stands out due to our personalized approach, attention to detail, and commitment to creating unforgettable experiences. We prioritize client satisfaction by offering tailored planning, expert vendor coordination, and seamless execution. Transparency, professionalism, and a proven track record of successful events build trust, ensuring that every event is handled with excellence and care.",
    },
  ];

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
      <h1 className="text-[#af43ca] text-center text-lg font-semibold pt-11">
        Do you have any other questions?
      </h1>
      <h1 className="text-[#232323] text-3xl text-center py-5 font-bold">
        Please check these FAQs.
      </h1>
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

export default Question;
