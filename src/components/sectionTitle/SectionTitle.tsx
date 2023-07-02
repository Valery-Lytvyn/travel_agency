import "./sectionTitle.scss";

interface SectionTitleProps {
  title: string;
}
function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h1 className="section_title">
      {[...title].map((item, index) => (
        <span className="section_title_letter" key={index}>
          {item}
        </span>
      ))}
    </h1>
  );
}

export default SectionTitle;
