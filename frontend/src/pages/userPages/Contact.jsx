// import React, { useState } from "react";
// import { FiPhoneCall } from "react-icons/fi";
// import { CgMail } from "react-icons/cg";
// import { CiLocationOn } from "react-icons/ci";
// import { FaStar } from "react-icons/fa";
// import { VscFeedback } from "react-icons/vsc";
// import axios from "axios";
// import Swal from "sweetalert2";

// const Footer = () => {
//   const [credentials, setCredentials] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [rating, setRating] = useState(0);

//   const handleRating = (value) => {
//     setRating(value);
//     setCredentials((prev) => ({ ...prev, rating: value }));
//   };

//   const handleChange = (e) => {
//     setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:8001/feedback", credentials, {
//         withCredentials: true,
//       });
//       Swal.fire({
//         title: "Success!",
//         text: "Message sent successfully! 😍",
//         icon: "success",
//         confirmButtonText: "OK",
//       });
//     } catch (err) {
//       console.error("Error:", err);
//       Swal.fire({
//         title: "Error",
//         text:
//           err?.response?.data?.error ||
//           "Something went wrong. Please try again.",
//         icon: "error",
//         confirmButtonText: "OK",
//       });
//     }
//   };

//   return (
//     <div className="w-full bg-[#222121] text-white">
//       <div className="max-w-6xl mx-auto py-10 px-6">
//         {/* Logo Section */}
//         <h1 className="text-yellow-400 text-center lg:text-start text-4xl font-bold font-serif">
//           DreamAmbition
//         </h1>

//         {/* Contact Info Section */}
//         <div className="max-w-4xl mx-auto mt-10">
//           <h1 className="text-center text-3xl font-semibold font-serif">
//             Contact Us
//           </h1>
//           <div className="flex flex-wrap justify-around items-center mt-8 gap-8">
//             {/* Phone Section */}
//             <div className="flex items-center gap-4">
//               <FiPhoneCall className="text-3xl" />
//               <div>
//                 <p>+91 XXXXXXXXXX</p>
//                 <p>+91 XXXXXXXXXX</p>
//               </div>
//             </div>

//             {/* Email Section */}
//             <div className="flex items-center gap-4">
//               <CgMail className="text-3xl" />
//               <div>
//                 <p>booking@dreamambition.com</p>
//                 <p>shukudream@.com</p>
//               </div>
//             </div>

//             {/* Address Section */}
//             <div className="flex items-center gap-4">
//               <CiLocationOn className="text-3xl" />
//               <div>
//                 <p>20, Kurji, Pani Tanki</p>
//                 <p>Patna, Bihar, 800012</p>
//               </div>
//             </div>
//           </div>

//           {/* Responsive Grid Section (Map & Form) */}
//           <div className="grid md:grid-cols-2 gap-10 mt-10">
//             {/* Google Map */}
//             <div className="w-full">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7193.928042124906!2d85.0894807!3d25.6393196!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59d13a4b560b%3A0xb7950e8e8cc670e7!2sKurji%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1739553996298!5m2!1sen!2sin"
//                 width="100%"
//                 height="600"
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 className="rounded-lg shadow-md"
//               ></iframe>
//             </div>

//             {/* Feedback Form */}
//             <div className="w-full max-w-lg bg-gray-800 rounded-lg p-6">
//               <form onSubmit={handleSubmit}>
//                 <h1 className="text-center text-yellow-400 text-2xl font-semibold flex items-center justify-center gap-2 pb-6">
//                   <VscFeedback /> Feedback
//                 </h1>

//                 <div className="flex flex-col gap-4">
//                   <label className="text-gray-300">
//                     Name
//                     <input
//                       type="text"
//                       id="name"
//                       onChange={handleChange}
//                       placeholder="Enter Your Name"
//                       className="mt-1 p-2 rounded-md w-full bg-gray-700 text-white outline-none"
//                       required
//                     />
//                   </label>

//                   <label className="text-gray-300">
//                     Email
//                     <input
//                       type="email"
//                       id="email"
//                       onChange={handleChange}
//                       placeholder="Enter Your Email"
//                       className="mt-1 p-2 rounded-md w-full bg-gray-700 text-white outline-none"
//                       required
//                     />
//                   </label>

//                   <label className="text-gray-300">
//                     Phone
//                     <input
//                       type="number"
//                       id="phone"
//                       onChange={handleChange}
//                       placeholder="Enter Your Mobile No"
//                       className="mt-1 p-2 rounded-md w-full bg-gray-700 text-white outline-none"
//                       required
//                     />
//                   </label>

//                   <label className="text-gray-300">
//                     Message
//                     <textarea
//                       id="message"
//                       onChange={handleChange}
//                       placeholder="Write your feedback here..."
//                       className="mt-1 p-2 rounded-md w-full h-24 bg-gray-700 text-white outline-none resize-none"
//                       required
//                     />
//                   </label>

//                   {/* Star Rating */}
//                   <div className="flex justify-center gap-2">
//                     {[1, 2, 3, 4, 5].map((value) => (
//                       <FaStar
//                         key={value}
//                         onClick={() => handleRating(value)}
//                         className={`cursor-pointer text-2xl transition-colors ${
//                           value <= rating ? "text-yellow-400" : "text-gray-500"
//                         }`}
//                       />
//                     ))}
//                   </div>

//                   <button
//                     type="submit"
//                     className="bg-yellow-400 p-3 rounded-md text-black font-semibold hover:bg-yellow-500 transition-all duration-300"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="text-center text-gray-400 mt-10 text-sm">
//           © {new Date().getFullYear()} DreamAmbition. All rights reserved.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React, { useState } from "react";
import Navbar from "../../components/dashboard/userDashboard/Navbar";
import Footer from "../../components/dashboard/userDashboard/Footer";
import homeimg from "../../assets/images/HallImage.jpg";
import logo from "../../assets/images/event5.png";
import { FaPhoneVolume } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";

const Contact = ({user}) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8001/get-touch", credentials, {
        withCredentials: true,
      });
      toast.success("✅ Message sent! We'll contact you soon.");
    } catch (err) {
      console.log(err);
      toast.error(
        err?.response?.data?.error || "Something went wrong. Please try again."
      );
    }
  };
  return (
    <>
      <Navbar user={user} />
      <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-[100vh]">
        {/* home image */}
        <img
          src={homeimg}
          className="z-[-2] inset-0 w-full h-full object-cover filter fixed"
          alt="Background"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="absolute bottom-[20%] left-5 md:left-[6%] max-w-[90%] md:max-w-[60%] text-white">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-sm md:text-[13px] font-semibold">
            Need help planning your next event? Look no further than
            DreamAmbition Event Management Bihar!
          </p>
          <p className="mt-4 text-sm md:text-[13px] font-semibold">
            We can provide everything you need to ensure your event is a
            success.
          </p>
        </div>
        <div className="bg-green-500 h-[50px] w-[50px] text-white text-[30px] flex items-center justify-center rounded-[50%] fixed right-10 bottom-10 z-50">
          <a href="https://wa.me/917070243030" target="_blank">
            <FaWhatsapp />
          </a>
        </div>
      </div>
      {/* main div */}
      <div className="bg-white grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1 relative w-full min-h-[700px] md:min-h-[400px] lg:min-h-[400px]">
        {/* left div */}
        <div className="lg:pl-20 md:pl-15 pl-5 relative min-h-[300px]">
          {/* logo */}
          <div className="">
            <img src={logo} alt="" className="h-[150px] absolute left-9" />
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold absolute lg:top-[26%] md:top-[28%] top-[40%]">
              Want to Work with Us?
            </h1>
          </div>

          <div className="flex items-center absolute lg:top-[38%] md:top-[40%] top-[55%] gap-2">
            <div>
              <FaPhoneVolume className="text-5xl text-[rgb(26,46,111)]" />
            </div>
            <div>
              <h2 className="text-[#686767] text-xl">
                Talk to Our Client Support Team
              </h2>
              <h1 className="text-black font-bold lg:text-2xl md:text-[18px] text-[16px]">
                +91-000 -000-0000
              </h1>
            </div>
          </div>
          {/* gmail */}
          <div className="flex items-center absolute lg:top-[55%] md:top-[58%] top-[75%] gap-2">
            <div>
              <MdEmail className="text-5xl text-[rgb(26,46,111)]" />
            </div>
            <div>
              <h2 className="text-[#686767] text-xl">
                Write to us about your needs
              </h2>
              <h1 className="text-black font-bold lg:text-2xl md:text-[18px] text-[16px]">
                dreamambitioneventbihar@gmail.com
              </h1>
            </div>
          </div>
          <div className="absolute lg:bottom-[15%] md:bottom-[13%] left-[12%] bottom-[-6%] sm:gap-10 gap-4 sm:text-[25px] text-black list-none flex">
            <li
              className=" transition-all duration-300 cursor-pointer bg-[#FF0000] text-white p-2 rounded-[50%]"
              target="_blank"
            >
              <a href="#">
                <FaYoutube />
              </a>
            </li>
            <li
              className=" transition-all duration-300 cursor-pointer bg-[#d62976] text-white p-2 rounded-[50%]"
              target="_blank"
            >
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li
              className=" transition-all duration-300 cursor-pointer bg-[#316FF6] text-white p-2 rounded-[50%]"
              target="_blank"
            >
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li
              className=" transition-all duration-300 cursor-pointer bg-[#0077B5] text-white p-2 rounded-[50%]"
              target="_blank"
            >
              <a href="#">
                <FaLinkedin />
              </a>
            </li>
            <li
              className=" transition-all duration-300 cursor-pointer bg-[#1DA1F2] text-white p-2 rounded-[50%]"
              target="_blank"
            >
              <a href="#">
                <FaTwitter />
              </a>
            </li>
          </div>
        </div>
        {/* right div */}
        {/* Feedback Form */}
        <div className="w-full max-w-lg bg-white rounded-lg p-6">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                id="name"
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="mt-1 p-2 rounded-md w-full bg-white text-[#0f0f0f] outline-none 
                border-[1px] border-[grey]"
                required
              />

              <input
                type="email"
                id="email"
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="mt-1 p-2 rounded-md w-full bg-white text-[#0f0f0f] outline-none 
                border-[1px] border-[grey]"
                required
              />

              <input
                type="number"
                id="phone"
                onChange={handleChange}
                placeholder="Enter Your Mobile No"
                className="mt-1 p-2 rounded-md w-full bg-white text-[#0f0f0f] outline-none 
                border-[1px] border-[grey]"
                required
              />

              <textarea
                id="message"
                onChange={handleChange}
                placeholder="Message..."
                className="mt-1 p-2 rounded-md w-full bg-white text-[#0f0f0f] outline-none 
                border-[1px] border-[grey] h-24"
                required
              />

              <button
                type="submit"
                className="bg-yellow-400 p-3 rounded-md text-black font-semibold hover:bg-yellow-500 transition-all duration-300 w-36"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* map section */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-between h-auto bg-white">
        {/* map 1 */}
        <div className=" bg-[#fbefef] px-4">
          <div className="flex">
            <div className="text-8xl text-yellow-400">
              <MdLocationPin />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-[#727272]">
                Patna Branch
              </h1>
              <p>DreamAmbition Event Services</p>
              <p>Jamuna Apartment, Boring Road</p>
              <p>Patna, Bihar, 800012</p>
            </div>
          </div>
          <div className="w-full h-[450px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.660126076604!2d85.11209787396504!3d25.61620771460448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58257a0a593d%3A0xa539c70fd5a01032!2z4KSc4KSu4KWB4KSo4KS-IOCkheCkquCkvuCksOCljeCkn-CkruClh-CkguCknw!5e0!3m2!1shi!2sin!4v1740737240870!5m2!1shi!2sin"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
        <div className=" bg-[#fbefef] px-4">
          <div className="flex">
            <div className="text-8xl text-yellow-400">
              <MdLocationPin />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-[#727272]">
                Sheikhpura Branch
              </h1>
              <p>DreamAmbition Event Services</p>
              <p>Rohit Sound & Event, Deoley</p>
              <p>Sheikhpura, Bihar, 811105</p>
            </div>
          </div>
          <div className="w-full h-[450px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.375737426326!2d85.74206837394533!3d25.122984834705292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f25bdfb4ac768f%3A0x30f8e8b802fc869c!2z4KSw4KWL4KS54KS_4KSkIOCkuOCkvuCkieCkguCkoSDgpJTgpLAg4KSr4KS84KWI4KSC4KS44KWAIOCkn-Clh-CkguCknyDgpLngpL7gpIngpLg!5e0!3m2!1shi!2sin!4v1740739505682!5m2!1shi!2sin"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
        <div className=" bg-[#fbefef] px-4">
          <div className="flex">
            <div className="text-8xl text-yellow-400">
              <MdLocationPin />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-[#727272]">
                Gaya Branch
              </h1>
              <p>DreamAmbition Event Services</p>
              <p> North Church Road,Branch, Bihar</p>
              <p>Gaya, Bihar, 823001</p>
            </div>
          </div>
          <div className="w-full h-[450px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.1239125363913!2d84.9947726739323!3d24.791210148027734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32bff2d5aff81%3A0x6ea2a15df006ea3!2z4KSH4KS14KWH4KSC4KSf4KS_4KSV4KS-IOCkj-CkteClh-CkguCkn-CljeCknCAmIOCkhuCkr-CkoeCkv-Ckr-CkvuCknCDgpKrgpY3gpLDgpL7gpIfgpLXgpYfgpJ8g4KSy4KS_4KSu4KS_4KSf4KWH4KShKCDgpKYg4KS14KWH4KSh4KS_4KSC4KSXIOCkquCljeCksuCkvuCkqOCksCk!5e0!3m2!1shi!2sin!4v1740758403300!5m2!1shi!2sin"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
