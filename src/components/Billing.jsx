import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Unlimited Access. <br className="sm:block hidden" /> Premium Perks. <br className="sm:block hidden" /> Exclusive.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Developed by Golden Horizon Wealth Management, this state of the art CapitalOne Quantum Premium Card will allow access to unlimited resources
        and premium offerings.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <a href="https://apps.apple.com/us/app/capital-one-mobile/id407558537" target="_blank" rel="noopener noreferrer">
          <img src={apple} alt="appstore" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"/>
        </a>

        <a href="https://play.google.com/store/apps/details?id=com.konylabs.capitalone&hl=en_US&gl=US&pli=1" target="_blank" rel="noopener noreferrer">
          <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
        </a>
      </div>
    </div>
  </section>
);

export default Billing;
