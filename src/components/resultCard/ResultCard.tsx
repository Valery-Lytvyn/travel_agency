import { useState } from "react";
import LazyImage from "../lazyImage/LazyImage";
import "./resultCard.scss";

interface CountryName {
  common?: string;
  nativeName?: any;
}

interface Languages {
  [key: string]: string;
}

interface Flag {
  png?: string;
  svg?: string;
  alt?: string;
}

interface ResultCardProps {
  countryName?: CountryName;
  capital?: string[];
  lang?: Languages;
  flags?: Flag;
  population?: number;
  area?: number;
}

function ResultCard({
  countryName,
  flags,
  capital,
  lang,
  population,
  area,
}: ResultCardProps) {
  const [isFlagVisibly, setIsFlagVisibly] = useState(false);
  const { common } = countryName || {};
  const { png, svg, alt } = flags || {};
  const numberWithSpaces = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  const languages = Object.values(lang || {});
  const countryPopulation = population
    ? numberWithSpaces(population)
    : undefined;
  const countryArea = area ? numberWithSpaces(area) : undefined;

  return (
    <div
      className="section_card result_card"
      onMouseEnter={() => setIsFlagVisibly(true)}
      onMouseLeave={() => setIsFlagVisibly(false)}
    >
      {common && (
        <div className="row">
          <span>Country:</span>
          <div className="value">
            <h2>{common}</h2>
          </div>
        </div>
      )}
      {population && (
        <div className="row">
          <span>Area:</span>
          <div className="value">
            <h2>{countryArea}</h2>
            <span>km</span>
            <span>
              <sup>2</sup>
            </span>
          </div>
        </div>
      )}
      {capital && capital[0] && (
        <div className="row">
          <span>Сapital:</span>
          <div className="value">
            <h2>{capital[0]}</h2>
          </div>
        </div>
      )}
      {population && (
        <div className="row">
          <span>Population:</span>
          <div className="value">
            <h2>{countryPopulation}</h2>
          </div>
        </div>
      )}

      {languages && (
        <div className="row">
          <span>{languages.length !== 1 ? "languages:" : "language:"}</span>
          <div className="value">
            {languages.map((item, index) => (
              <h2 key={index + item}>{(index ? "," : "") + item}</h2>
            ))}
          </div>
        </div>
      )}
      {isFlagVisibly && (
        <div className="flag">
          {(png || svg) && (
            <LazyImage src={png || svg || ""} alt={alt || "flag"} />
          )}
        </div>
      )}
    </div>
  );
}

export default ResultCard;
