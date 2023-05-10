import { MockUpCodeProps } from "../../types/instructions";

const MockUpCode: React.FC<MockUpCodeProps> = ({ codeExample }) => {
  return (
    <div className="flex w-full flex-col items-center text-left">
      <div className="mockup-code w-full max-w-xs flex-grow shadow-lg sm:max-w-md">
        <pre>
          <code>{codeExample}</code>
        </pre>
      </div>
    </div>
  );
};

export default MockUpCode;

// w - full;
// mx - auto;
