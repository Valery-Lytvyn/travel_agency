import "./textButton.scss";

interface TextButtonProps {
  text: string;
}

function TextButton({ text }: TextButtonProps) {
  return <div className="text_button">{text}</div>;
}

export default TextButton;
