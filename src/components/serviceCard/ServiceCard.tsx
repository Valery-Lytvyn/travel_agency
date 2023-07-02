import "./serviceCard.scss";

interface ServiceCardProps {
  id: number;
  title: string;
  serviceLogo: string;
  description: string;
}

function ServiceCard({
  id,
  description,
  serviceLogo,
  title,
}: ServiceCardProps) {
  return (
    <div key={id} className="section_card service_card">
      <div className="service_logo">
        <img src={serviceLogo} alt={title} />
      </div>
      <h2 className="card_title">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
