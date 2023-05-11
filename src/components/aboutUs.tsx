import { AboutUsProps } from "../../types/instructions";
import TeamProfileCard from "./teamProfileCard";

const AboutUs: React.FC<AboutUsProps> = ({ devProfiles }) => {
  return (
    <section className="about text-gray-800 text-center p-4 pt-20 pb-20">
      <h2 className="text-3xl font-bold mb-12">
        Meet the team
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-xl-12">
        {devProfiles.map(({ name, image, title, linkedIn, github }, index) => {
          return (
            <TeamProfileCard
              name={name}
              image={image}
              title={title}
              linkedIn={linkedIn}
              github={github}
              key={`devName${index}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AboutUs;
