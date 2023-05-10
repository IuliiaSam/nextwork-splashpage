import { ChatBubbles } from "../../types/instructions";
const ChatBubble: React.FC<ChatBubbles> = ({texts}) => {

  const chatBubbleParams = {
    colors: ['chat-bubble-primary',
    'chat-bubble-secondary',
    'chat-bubble-accent',
    'chat-bubble-info',
    'chat-bubble-success',
    'chat-bubble-warning',
    'chat-bubble-error'],
    alignment: ['chat-start', 'chat-end'],
    position: ['row-start-1', 'row-start-3']
  };

  const getRandomValue = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

  const chatBubbleColor = getRandomValue(chatBubbleParams.colors);
  const chatBubbleAlignment = getRandomValue(chatBubbleParams.alignment);
  const chatBubblePosition = getRandomValue(chatBubbleParams.position);

  const chatClasses = `chat ${chatBubbleAlignment} ${chatBubblePosition}`;
  const chatBubbleClasses = `chat-bubble ${chatBubbleColor} opacity-80`;
  const chatBubbleText = getRandomValue(texts);

  return (
    <div className={chatClasses}>
      <div className={chatBubbleClasses}>
        {chatBubbleText}
        <span className="text-sm font-medium italic"> Yours, Server
        </span>
      </div>
    </div>     
  );
};

export default ChatBubble;