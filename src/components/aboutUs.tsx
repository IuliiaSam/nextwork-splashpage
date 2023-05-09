import { AboutUsProps } from "../../types/instructions";
import TeamProfileCard from "./teamProfileCard";
const AboutUs: React.FC<AboutUsProps> = ({ devProfiles }) => {
  return (
    <section className=" text-gray-800 text-center p-4 bg-slate-300">
      <h2 className="text-3xl font-bold mb-12">
        Meet the <u className="text-blue-600">team</u>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-xl-12">
        {devProfiles.map(({ name, image, title }, index) => {
          return (
            <TeamProfileCard
              name={name}
              image={image}
              title={title}
              key={`devName${index}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AboutUs;
