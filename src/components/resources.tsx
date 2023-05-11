import { ResourcesProps } from "../../types/instructions";
import ResourceCard from "./resourceCard";
const Resources: React.FC<ResourcesProps> = ({resourceCards}) => {
  return (
    <section className="resources text-gray-800 text-center p-4 bg-base-200 pt-20 pb-20">
      <h2 className="text-3xl font-bold mb-12">
        Resources
      </h2>
      <div className="flex justify-around flex-wrap gap-x-6 gap-y-6">
        {resourceCards.map(({ title, subtitle, image, link }, index) => {
          return (
            <ResourceCard
              title={title}
              subtitle={subtitle}
              image={image}
              link={link}
              key={`resourceCard${index}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Resources;
