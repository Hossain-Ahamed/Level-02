import Container from "@/components/layouts/Container";
import BatteryReplacement from "@/components/ServiceTiles/BatteryReplacement";
import ChipsetReplacement from "@/components/ServiceTiles/ChipsetReplacement";

const SevicesSection = () => {
  return (
    <Container className="my-40">
      <div className="text-center flex flex-col justify-between items-center">
        <h1>Services that we provide</h1>
        <p className="max-w-[80ch]">
            All our tenchnicians are fully qualified and licensed. Moreover,
            ther are incredibly skillful and proficient in various aspects of
            computer repair.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <BatteryReplacement ></BatteryReplacement>
        <div className="bg-red-100 col-span-12 rounded-2xl h-[415px]"></div>
      <ChipsetReplacement/>
        <div className="bg-red-100 col-span-6 lg:col-span-7 rounded-2xl h-[415px]"></div>
        <div className="bg-red-100 col-span-12 rounded-2xl h-[415px]"></div>
        <div className="bg-red-100 col-span-12 md:col-span-6 lg:col-span-4 rounded-2xl h-[415px]"></div>
        <div className="bg-red-100 col-span-12  md:col-span-6 lg:col-span-4 rounded-2xl h-[415px]"></div>
        <div className="bg-red-100 col-span-12 lg:col-span-4 rounded-2xl h-[415px]"></div>
      </div>

    </Container>
  );
};

export default SevicesSection;
