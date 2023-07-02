import "./serviceBtn.scss";

interface ServiceBtnProps {
  src: string;
  alt: string;
  onClick?: () => void;
}

function ServiceBtn({ src, alt, onClick }: ServiceBtnProps) {
  return (
    <div className="service_btn" onClick={onClick}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default ServiceBtn;
