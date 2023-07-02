import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LazyImage from "../../components/lazyImage/LazyImage";
import TextButton from "../textButton/TextButton";
import { INITIAL_POSITION } from "../../constant/indexData";
import "./galleryItem.scss";

interface GalleryItemProps {
  item: string;
}

function GalleryItem({ item }: GalleryItemProps) {
  const [isDescriptionShow, setIsDescriptionShow] = useState(false);

  return (
    <div
      className="section_card gallery_card"
      onMouseEnter={() => {
        setIsDescriptionShow(true);
      }}
      onMouseLeave={() => {
        setIsDescriptionShow(false);
      }}
    >
      <LazyImage src={item} alt="Landscape" />
      <AnimatePresence>
        {isDescriptionShow && (
          <motion.div
            initial={{ y: INITIAL_POSITION }}
            animate={{ y: 0 }}
            exit={{ y: INITIAL_POSITION }}
            transition={{ duration: 0.5 }}
            className="hidden_description"
          >
            <h2 className="description_title">Amazing places</h2>
            <p>Lorem ipsum dolor sit dolor sit.</p>
            <TextButton text="See more" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default GalleryItem;
