import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import homeimg from "../../../../assets/images/Corporate1.jpg";
import corporateImg from "../../../../assets/images/corporate10.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { NavLink } from "react-router-dom";
import TalkToExpert from "../../../../pages/userPages/TalkToExpert";

const MusicEntertainment = ({user}) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Navbar user={user} />
      <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-[100vh]">
        <img
          src={homeimg}
          className="z-[-2] inset-0 w-full h-full object-cover filter fixed blur-sm"
          alt="Background"
        />
        <div className="absolute bottom-[10%] left-5 md:left-10 max-w-[90%] md:max-w-[60%] text-white">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Corporate Event Management <br className="hidden md:block" />{" "}
            Companies in Patna
          </h1>
          <p className="mt-4 text-sm md:text-lg">
            Experience the magic of Bihar’s top corporate event management
            companies. If you want to make a statement at your next corporate
            event, partner with DreamAmbition.
          </p>
          <div className="flex gap-5 mt-6">
            <button
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 via-blue-400/60 to-yellow-400 text-black px-4 py-2 rounded-full text-sm md:text-lg hover:bg-blue-700 transition-all delay-300"
              onClick={() => setShowForm(true)}
            >
              <MdOutlineWifiCalling3 /> Talk to Expert
            </button>
            {showForm && <TalkToExpert setShowForm={setShowForm} />}
            <button className="flex items-center gap-2 bg-gradient-to-r from-green-500 via-green-400/60 to-yellow-400 text-black px-4 py-2 rounded-full text-sm md:text-lg hover:bg-green-700 transition-all delay-200">
              <a
                href="https://wa.me/917070243030"
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaWhatsapp /> Whatsapp Us
              </a>
            </button>
          </div>
        </div>
        <div className="bg-green-500 h-[50px] w-[50px] text-white text-[30px] flex items-center justify-center rounded-[50%] fixed right-10 bottom-10">
          <a href="https://wa.me/917070243030" target="_blank">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="max-w-[1400px] bg-white mx-auto p-5 md:p-10">
        <h1 className="text-3xl md:text-4xl font-semibold">
          The Leading Corporate Event Management Group in Patna, Bihar
        </h1>
        <p className="text-gray-600 mt-4 text-sm md:text-lg">
          Business meetings and corporate events are the best and most novel
          ways to stimulate the team and get them thinking creatively and
          outside the box. If your team members are new, then it enables them to
          interact with other existing employees, which can even result in a new
          fantastic business idea.
        </p>
        <p className="text-gray-600 mt-4 text-sm md:text-lg">
          With DreamAmbition, corporate event management companies in Patna,
          Bihar goes beyond just planning a meeting. Besides arranging meetings
          and conferences, we also plan and execute corporate hospitality,
          conventions, exhibitions, client entertainment, incentive travel
          reward programmes, motivational events, team-building activities, and
          more.
        </p>
        <p className="text-gray-600 mt-4 text-sm md:text-lg">
          We organize and carry out corporate event packages, which might
          involve multiple phases and a number of organizational tasks
          distributed over several months. As one of the leading corporate event
          management companies in Patna, Bihar, DreamAmbition specializes in the
          nuances of corporate events such as theming, décor, and style. We also
          take care of signage,
          <span className="text-blue-600">entertainment</span>, and venue
          sourcing, all of which are supportive activities that keep an event
          alive from the beginning to its end.
        </p>
        <p className="text-gray-600 mt-4 text-sm md:text-lg">
          Our approach to event curation is straightforward. We pay close
          attention to our customer’s demands and objectives and collaborate
          with them to realize their vision. Our experts possess the necessary
          skills and resources to make any corporate event a resounding success.
        </p>
        <p className="text-gray-600 mt-4 text-sm md:text-lg">
          We take great pride in our keen eye for detail and innovative thinking
          while managing every part of the corporative event management in
          Patna, from concept up to execution. Our aim is to relieve our
          customers from the burden of planning so that they can focus on more
          important aspects of the meeting.
        </p>

        <div>
          <p className="text-gray-600 mt-4 text-sm md:text-lg">
            Nowadays, entertainment has become a crucial aspect of Southern
            Indian weddings, especially in Kerala. Various forms of
            entertainment, such as live music bands, Punjabi dances, flamenco
            dances, Sufi dances, DJs, live water drummers, and traditional
            Indian dances like oppana dances, bharatanatyam, mohiniyattom and
            kathakali are incorporated into every part of the wedding events.
            This entertainment is embraced by all communities, including Hindus,
            Christians, and Muslims. Even the Kerala Muslim community, including
            the Orthodox Muslim community, incorporates entertainment in their
            unique way.
          </p>
          {/* <iframe
      width="1170"
      height="415"
      src="https://www.youtube.com/watch?v=qHxxmWySb6c&t=16s&pp=ygU8YmVzdCBpbmRpYW4gd2VkZGluZyB2aWRlbyBpbiBiaWhhciBzaG9ydCBub3QgbG9uZyB2ZXJ0aWNhbGx5"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe> */}
        </div>

        <p className="text-gray-600 mt-4 text-sm md:text-lg">
          Our approach to event curation is straightforward. We pay close
          attention to our customer’s demands and objectives and collaborate
          with them to realize their vision. Our experts possess the necessary
          skills and resources to make any corporate event a resounding success.
        </p>
        <p className="text-gray-600 mt-4 text-sm md:text-lg">
          We take great pride in our keen eye for detail and innovative thinking
          while managing every part of the corporative event management in
          Patna, from concept up to execution. Our aim is to relieve our
          customers from the burden of planning so that they can focus on more
          important aspects of the meeting.
        </p>

        <div className="mt-8">
          <img
            src={corporateImg}
            className="w-full rounded-lg shadow-lg h-[80%] aspect-square"
            alt="Corporate Event"
          />
        </div>
        <p className="text-gray-600 mt-4 text-sm md:text-lg">
          In Bihar there are many corporate event management companies in Patna,
          but{" "}
          <NavLink to="/" className="text-blue-600">
            DreamAMbition Events
          </NavLink>{" "}
          stands out as the best.
        </p>
        <div className="mt-8">
          <h2 className="text-sm md:text-3xl font-semibold text-gray-600">
            Different Types of Corporate Events
          </h2>
          <p className="text-gray-600 mt-4 text-sm md:text-lg">
            Business events might include team outings, client hospitality, and
            internal seminars. Consequently, we also evaluate business events in
            terms of their scale when making planning decisions. DreamAmbition
            Event Management Company in Patna, Bihar, specializes in various
            types of corporate events.
          </p>
          <div className="space-y-6 mt-6 text-gray-600 text-sm md:text-lg">
            <div>
              <h3 className="text-xl font-bold text-black">Conferences</h3>
              <p className="text-gray-600 mt-4 text-sm md:text-lg">
                People within similar industries can exchange ideas and interact
                at conferences. These gatherings span several days and feature
                innumerable workshops and guest speakers. Frequently,
                conferences involve guest lectures, networking opportunities and
                breakout sessions. For large events, we get you a complete
                convention center or a big space to conduct the event.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">Seminars</h3>
              <p className="text-gray-600 mt-4 text-sm md:text-lg">
                Similar to conferences, seminars bring experts in the same field
                together to learn more about a specific subject. Yet, seminars
                are compact gatherings compared to conferences. These normally
                last only a few hours and can be highly interactive. A seminar
                can comprise people giving lectures by a group or individual.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">Trade Shows</h3>
              <p className="text-gray-600 mt-4 text-sm md:text-lg">
                Trade Shows are excellent venues for businesses to network,
                generate leads, and advertise their goods and services. They are
                especially beneficial for companies that want to increase
                face-to-face encounters with potential clients, vendors, and
                suppliers. Therefore, as one of the leading corporate event
                management companies in Patna, Bihar,{" "}
                <NavLink
                  className="text-blue-400 font-bold"
                  target="_blank"
                  to="/"
                >
                  DreamAmbition
                </NavLink>{" "}
                identifies the right convention center, hotel, or arenas that
                are frequent venues for trade exhibitions. Attended by several
                organizations from the same industry, these businesses erect
                booths or may even sponsor the trade show itself for more
                visibility.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">Product Launches</h3>
              <p className="text-gray-600 mt-4 text-sm md:text-lg">
                The release of a new product assists businesses in creating a
                constructive discussion around its most recent goods and
                services. Media representatives may also be invited to write
                about the new introduction into the market, giving the product
                enough leverage and propaganda. This particular corporate event
                may involve inviting guest lecturers, celebrity guests,
                entertainment, and giving away goodie bags. Melodia executes all
                formalities involved in a product launch event.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">
                Corporate Dinners
              </h3>{" "}
              <p className="text-gray-600 mt-4 text-sm md:text-lg">
                Corporate Dinners come in a variety of formats and comprise
                various goals and a variety of guests. Business meals during
                these times are not uncommon, and new members may be welcomed to
                the team. The event is held to reward employees, boost their
                morale, and mark milestones. A business-related meal has a
                specific objective in mind and is more likely a strategy
                session. Therefore, we book a prestigious restaurant and a
                sophisticated meal that might even be held to please a new
                client or seal a contract.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">Team-Building</h3>
              <p className="text-gray-600 mt-4 text-sm md:text-lg">
                Employees can interact with each other and enhance communication
                and develop problem-solving skills while tightening the team’s
                relationship through team-building activities. These last less
                than a day or, sometimes, even an entire day. A variety of
                instructive, inspiring, and enjoyable activities, including
                games, obstacle courses, and scavenger hunts, are held. We
                provide you with a range of physical and mental challenges
                throughout the event that promotes team-building.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">Board Meetings</h3>
              <p className="text-gray-600 mt-4 text-sm md:text-lg">
                Typically, board meetings happen once or twice a year. During
                this time, the company’s financial situation and general health
                are examined, and in case of any discrepancies, the board
                revises certain strategies and other crucial business choices in
                light of its findings. The board must meet at a stipulated place
                and time to make wise and informed decisions, preferably in a
                high-end hotel with an exclusive space.{" "}
                <NavLink to="/" target="_blank">
                  Bihar’s DreamAmbition Event Management
                </NavLink>
                company, books the best venues and the most palatable menus for
                your board meetings.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">
                Planning a great corporate event
              </h3>
              <p className="text-gray-600 mt-4 text-sm md:text-lg">
                From pre-event planning to executing the event, Melodia takes
                care of every element keeping in mind the budgetary constraints
                of every client.
              </p>
              <p className="text-gray-600 mt-4 text-sm md:text-lg">
                During the pre-event planning stage, we set the goals and
                objectives while identifying the occasion’s theme and the
                attendees, clearly keeping their expectations in mind.
              </p>
              <p className="text-gray-600 mt-4 text-sm md:text-lg">
                Thereafter, we set the event’s budget considering each possible
                expense. We allocate resources according to your monetary
                strengths if price negotiations are inevitable.
              </p>
              <p className="text-gray-600 mt-4 text-sm md:text-lg">
                Guest list preparation is a tedious task. That is why we deploy
                experts who will closely collaborate with you to invite the
                right clients and those who can positively contribute to the
                event. Where required, we also create attractive invitation
                cards for them. As a premium corporate event management
                companies in Patna, we fully understand your objectives before
                accomplishing these tasks.
              </p>
              <p className="text-gray-600 mt-4 text-sm md:text-lg">
                You must choose a venue that appeals to your target audience,
                which your clients and employees will appreciate. We also narrow
                down the theme of the event to aptly reflect the goals of the
                occasion.
              </p>
              <p className="text-gray-600 mt-4 text-sm md:text-lg">
                Where required, DreamAmbition Corporate Event Management
                Companies in Patna, Bihar, spends time on marketing and
                advertising your event to garner enough attention and excite the
                audience. The activity is bound to keep you ahead on the
                competitive leaderboard
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MusicEntertainment;
