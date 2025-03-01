import { fixedValues } from "@/assets/data";
import Container from "@/components/layouts/Container";
import { Button } from "@/components/ui/button";
import macbookImage from "@/assets/images/macbook-exposed.png";
import { motion } from "motion/react";
const intro = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const introChildren = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  visible: {
    opacity: 1,
    y: 0,
    tansition: {
      duration: 10,
      type: "spring",
      bounce: 2,
    },
  },
};

const laptop = {
  initial : {y : 0, rotate : 0,scale : 5},
 animate : {
  y : 20,
  rotate : -30,
  scale : 1,
  transition : {
    duration : 1,
     y : {
      duration : 2,
      repeat : Infinity,
      repeatType : 'reverse',
      ease : 'easeInOut',
     }

  }
}

}


const HeroSection = () => {
  return (
    <div className="overflow-hidden">
    <Container className="pt-16 h-screen grid grid-cols-1 lg:grid-cols-2 content-center " >
      <motion.div variants={intro} initial="hidden" animate="visible">
        <motion.h1
          className="text-8xl font-bold text-gray text-nowrap"
          variants={introChildren}
        >
          <span className="">Don't worry.</span>
          <br />
          <span>We'll fix it.</span>
        </motion.h1>
        <motion.p
          className="text-dark-gray max-w-[50ch] mt-10 mb-5 text-lg"
          variants={introChildren}
        >
          Welsomce to{" "}
          <span className="text-primary font-semibold">
            {fixedValues.COMPANY_NAME}
          </span>
          , your one-stop palce for all kinds of{" "}
          <span className="text-primary font-semibold">Repairing items</span>{" "}
          and diagonistic
        </motion.p>
        <motion.div variants={introChildren}>
          <Button variant={"destructive"}>Book a Service</Button>
        </motion.div>
      </motion.div>
      <motion.div className="mt-10 w-3/4 lg:w-full mx-auto" variants={laptop} initial='initial' animate= "animate">
        <img
          src={macbookImage}
          alt=""
          className=" h-[95%] object-contain"
        />
      </motion.div>
    </Container>
    </div>
  );
};

export default HeroSection;
