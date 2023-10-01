//This is the Official IEEE Website for the year 2023
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const data = [
  {
    title: "The Mentor Mentee League",
    date: "Thursday; 30 March, 2023",
    content:
      "The Fun-Tech Fusion Challenge' a unique event fabricated for IEEE members, combining technology and entertainment. The event was structured into two engaging rounds, with the first round featuring a head-to-head battle between teams. The victor advanced to the final round, where all teams participated in a Kahoot quiz. With robust participation highlighted dedication, with seamless synergy among organizers, mentors, and participants driving success, the event set a promising precedent for future events, fostering learning, camaraderie, and excellence among IEEE members.",
  },
  {
    title: "Accreditation process by NAAC",
    date: "Thursday; 25 th May, 2023",
    content:
      "Hybrid Mode The NAAC accreditation, an informative session, chaired by esteemed guests from Indian universities and IEEE chapters, was a success, providing knowledge about the accreditation process in higher education. Speakers like Prof. Buta Singh, Prof. Pratosh Bansal, and Prof. Saikat Maitra discussed the importance of NAAC accreditation in providing quality education.",
  },
  {
    title: "Data Science 101",
    date: " Saturday;10th June, 2023",
    content:
      "IEEE NSUT in collaboration with IBM hosted Data Science 101, aiming to enhance skills in data science and contribute to India's digital skilling revolution. Occurring in the India Council and Delhi Section, celebrated IEEE's significant contribution to technology and education. The session was conducted by a renowned data science expert, covering various aspects of data science. Participants earned a certificate showcasing their proficiency in the Data Science 101 course",
  },
  {
    title: "Advance Control Techniques for Inverters in Autonomous Power ",
    date: "Wednesday; 26th July, 2023",
    content: `The IEEE NSUT PES chapter held a session on "Advanced Control Techniques for Inverters in Autonomous Power Systems" led by Dr. Dushyant Sharma. The session emphasized the importance of advanced control techniques in power systems and the need for students to develop these. Dr. Sharma's personalized approach and expertise in one-to-one interactions boosted students' interest and enthusiasm, inspiring them to embrace the challenges and possibilities of autonomous power systems.`,
  },
  {
    title: "Education Week",
    date: "Sunday; 2 nd April, 2023",
    content: `The IEEE Education Week, held in the presence of esteemed IEEE chairs. The event unfolded with dynamic sessions on "From Coding to Class: Managing your Time Effectively" by Keerti Purswani  and "Leveraging LinkedIn for Professional Growth and Web Development Success." by Ajay Suneja. The event instilled inspiration and equipped students with practical skills, fostering their growth as future technology leaders.`,
  },
  {
    title: "Cryptic Hunt (NSUT Thon)",
    date: "18th January",
    content: `At the IEEE NSUT event, 'MysteryQue AI-Reboot,' participants embarked on a thrilling journey during Freshers' Week. This event transported them to a futuristic world where humans clashed with AI in a battle for supremacy. It challenged attendees to put their problem-solving skills and determination to the test as they deciphered clues and unraveled a captivating mystery. 'MysteryQue AI-Reboot' provided an exciting adventure, promising a unique opportunity to have fun while exploring the enigmatic world of AI and competing in an epic battle of wits.`,
  },
  {
    title: "Learning League 3.0",
    date: "21st to 27th June, 2023",
    content: `Learning League 3.0, a multi-phase event organized by IEEE NSUT, has left an indelible mark on the academic and career journeys of countless students. In its first phase, held from June 21st to June 27th, 2023, the event kicked off with an inspiring talk by Kartik Mathur, an esteemed NSIT alumnus and the Founding Member and Academics Head at Coding Blocks. His insights into coding and technology set the tone for an enlightening week ahead.
The subsequent sessions featured a lineup of accomplished speakers, including Sanidhya Saxena, Nidhi Sharma, Arsh Goyal, and Vibhu B. Gupta. These experts shared their knowledge and experiences in fields ranging from core engineering to software development and non-tech placements. Their invaluable guidance and advice resonated with over 100 eager attendees, who gained insights on diverse career paths and learned how to craft winning resumes.
Phase 2 of Learning League 3.0, in collaboration with ARES Robotics Society of NSUT, continued the mission to inspire and educate. IEEE NSUT members visited Rajkiya Pratibha Vikas Vidyalaya, Hari Nagar, where they showcased robotics and technology, answered students' queries, and provided information on career options. This initiative emphasized the importance of inclusivity, challenging norms, and creating a more equitable engineering community. Learning League 3.0 has truly ignited ambitions and opened doors to a brighter future for young minds.
`,
  },
  {
    title: "TechWeek 2023",
    date: "21st to 27th June, 2023",
    content: `TechWeek 2023, a spectacular series of events organized by IEEE NSUT, promised to be a week filled with innovation, competition, and exploration of the latest technological frontiers. This exciting extravaganza spanned a diverse range of activities, catering to tech enthusiasts and creative minds alike. From the Write-o-Tech technical blog writing competition to the electrifying ROBOWAR event, TechWeek 2023 offered a platform for students to express their views, tackle real-world problems, and engage in cutting-edge technology.
Frontend Fiésta took center stage, challenging participants to transform web design and development through innovation, while HackNSUT 2023 pushed the boundaries of coding and innovation with its two-day hackathon. Quizomania offered an exhilarating tech quiz, and Stratazenith brought forth a strategy case competition, testing participants' strategic thinking and determination. Chamber of Secrets, a treasure hunt event, added a dash of mystery, and the Design-A-Thon provided a unique opportunity for designers to showcase their talents.
TechWeek 2023 was not just an event; it was an immersive experience that ignited creativity, fostered innovation, and celebrated the limitless possibilities of technology. Participants joined from February 8th to February 12th, 2023, at Netaji Subhas University Of Technology, Delhi, and were part of this exhilarating journey into the world of technology and innovation. Prizes worth up to ₹70k awaited those who dared to embrace the challenges and opportunities that TechWeek 2023 had to offer
`,
  },
];
export default function PastEvents() {
  return (
    <React.Fragment>
      <h1 className="text-white text-center text-3xl font-bold uppercase">
        Past Events
      </h1>
      <VerticalTimeline>
        {data.map((element) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#39c0d2", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #39c0d2" }}
            date={element.date}
            iconStyle={{ background: "#39c0d2", color: "#000" }}
          >
            <h3 className="vertical-timeline-element-title">{element.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {element.date}
            </h4>
            <p className="line-clamp-[10]">{element.content}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </React.Fragment>
  );
}
