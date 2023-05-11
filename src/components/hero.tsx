import { HeroProps } from "../../types/instructions";
import dynamic from "next/dynamic";
const ChatBubble = dynamic(() => import("./chatBubble"), { ssr: false });

const Hero: React.FC<HeroProps> = ({ title, subtitle, image, chatBubbles }) => {
  return (
    <div
      className="hero min-h-screen grid-rows-3 mb-20"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-overlay row-start-1 row-span-3 bg-opacity-60"></div>
      <ChatBubble {...chatBubbles} />
      <div className="hero-content row-start-2 text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5">{subtitle}</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
