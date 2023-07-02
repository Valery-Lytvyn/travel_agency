import "./textButton.scss";

interface TextButtonProps {
  text: string;
  onClick?: () => void;
}

function TextButton({ text, onClick }: TextButtonProps) {
  return (
    <div className="text_button" onClick={onClick}>
      {text}
    </div>
  );
}

export default TextButton;
