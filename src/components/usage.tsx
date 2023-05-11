import { UsageProps } from "../../types/instructions";
import VideoPlayer from "./videoPlayer";

const Usage: React.FC<UsageProps> = ({ main, features, videoPlayer }) => {
  return (
    <div className="features hero flex flex-col gap-10 justify-center from-primary md:p-7 to-accent text-primary-content min-h-screen bg-gray-600">
      <div className="text-base-content glass md:rounded-box flex justify-center min-w-full min-h-gap-4 bg-opacity-60 xl:pb-0">
        <div className="hero-content flex justify-center flex-col px-4 ">
          <h2 className="m5-20 mb-2 text-lg md:text-4xl font-extrabold">
            {main}
          </h2>
          <div className="my-2 flex max-w-lg flex-col gap-2 text-xs sm:text-base text-left">
            {features.map((feature, index) => {
              return (
                <div key={`feature${index}`} className="flex gap-2">
                  <svg
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  {feature}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <VideoPlayer {...videoPlayer} />
    </div>
  );
};

export default Usage;
