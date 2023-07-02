import { servicesDataArr } from "../../constant/servicesData";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import ServiceCard from "../../components/serviceCard/ServiceCard";

function ServicesPage() {
  return (
    <section className="section">
      <SectionTitle title="Services" />
      <div className="cards_wrap">
        {servicesDataArr.map(({ id, description, serviceLogo, title }) => (
          <ServiceCard
            key={id}
            id={id}
            title={title}
            description={description}
            serviceLogo={serviceLogo}
          />
        ))}
      </div>
    </section>
  );
}

export default ServicesPage;
