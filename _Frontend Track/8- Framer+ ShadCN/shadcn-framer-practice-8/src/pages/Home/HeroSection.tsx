import { fixedValues } from "@/assets/data";
import Container from "@/components/layouts/Container";
import { Button } from "@/components/ui/button";
import macbookImage from '@/assets/images/macbook-exposed.png'
const HeroSection = () => {
  return (
    <Container className="h-[calc(100vh-16px)] grid grid-cols-2 items-center ">
      <div >
        <h1 className="text-8xl font-bold text-gray">
          <span className="">Don't worry.</span>
          <br />
          <span>We'll fix it.</span>
        </h1>
        <p>
          Welsomce to <span>{fixedValues.COMPANY_NAME}</span>, your one-stop
          palce for all kinds of <span>Repairing items</span> and diagonistic
        </p>
        <Button variant={"destructive"}>Book a Service</Button>
      </div>
      <div className="">
        <img src={macbookImage} alt="" />
      </div>
    </Container>
  );
};

export default HeroSection;
