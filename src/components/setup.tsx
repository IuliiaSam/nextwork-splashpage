import { UsageInstructions } from "../../types/instructions";
import MockUpCode from "@/components/mockUpCode";

const Setup: React.FC<UsageInstructions> = ({
  title,
  instructions,
  codeExamples,
  packageJson: { title: packageTitle, script },
}) => {
  return (
    <div className="setup flex items-center ">
      <div className="text-base-content mx-auto min-h-screen max-w-md md:max-w-full">
        <div className="px-4 text-center md:px-0 mb-20">
          <h2 className="mb-10 text-4xl font-extrabold md:text-3xl">{title}</h2>
          {instructions.map((instruction, index) => {
            return (
              <p
                key={`instruction${index}`}
                className="mx-auto mb-5 w-full max-w-lg"
              >
                {instruction}
              </p>
            );
          })}
          <div className="mb-20 flex flex-col lg:flex-row">
            <MockUpCode codeExample={codeExamples[0]} />
            <div className="divider text-base-content/50 lg:divider-horizontal">
              Then
            </div>
            <MockUpCode codeExample={codeExamples[1]} />
          </div>
          <p className="mb-5">{packageTitle}</p>
          <MockUpCode codeExample={script} />
        </div>
      </div>
    </div>
  );
};

export default Setup;
