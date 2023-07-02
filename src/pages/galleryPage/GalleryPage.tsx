import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { galleryDataArr } from "../../constant/galleryData";
import GalleryItem from "../../components/galleryItem/GalleryItem";

function GalleryPage() {
  return (
    <section className="section">
      <SectionTitle title="gallery" />
      <div className="cards_wrap">
        {galleryDataArr.map((item) => (
          <GalleryItem item={item} key={item} />
        ))}
      </div>
    </section>
  );
}

export default GalleryPage;
