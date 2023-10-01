//This is the Official IEEE Website for the year 2023
import { chapters } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Chapters = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Chapters and Affinity group <br className="sm:block hidden" />
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Chapters and affinity groups are the key segments of IEEE architecture
          that provides customized opportunities to students
        </p>
      </div>
    </div>

    <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
      {chapters.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Chapters;
