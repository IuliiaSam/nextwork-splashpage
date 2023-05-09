import { MockUpCodeProps } from "../../types/instructions";

const MockUpCode: React.FC<MockUpCodeProps> = ({ codeExample }) => {
  return (
    <div className="flex w-full flex-col text-left">
      <div className="mockup-code mx-auto w-full max-w-xs flex-grow shadow-lg sm:max-w-md">
        <pre>
          <code>{codeExample}</code>
        </pre>
      </div>
    </div>
  );
};

export default MockUpCode;
