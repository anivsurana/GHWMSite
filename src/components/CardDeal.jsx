import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Higher Credit Limit, <br className="sm:block hidden" /> Unlock Your Potential!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Expand your horizons and seize financial freedom with an elevated credit limit, empowering your aspirations like never before
      </p>
      <a href="https://verified.capitalone.com/auth/signin" target="_blank">
        <Button styles={`mt-10`} />
      </a>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
