import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../fetch/fetchData";
import { COUNTRY_URL } from "../../constant/urls";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import ResultCard from "../../components/resultCard/ResultCard";
import "./searchResultsPage.scss";

function SearchResultsPage() {
  const { value } = useParams();
  const [foundCountries, setFoundCountries] = useState([]);

  useEffect(() => {
    const getCountries = async (request: string) => {
      try {
        const countries = await fetchData(COUNTRY_URL, request);
        setFoundCountries(countries);
      } catch (error: any) {
        console.log(error);
      }
    };
    if (value) {
      getCountries(value);
    }
  }, [value]);

  return (
    <section className="section">
      {foundCountries.length > 0 ? (
        <>
          <SectionTitle title="Results" />
          {foundCountries.map((country, index) => {
            const { name, flags, capital, languages, population, area } =
              country;
            return (
              <ResultCard
                key={index}
                countryName={name}
                flags={flags}
                capital={capital}
                lang={languages}
                population={population}
                area={area}
              />
            );
          })}
        </>
      ) : (
        <h2 className="error_result">
          {`The country according to your search query "${value}" was not found`}
        </h2>
      )}
    </section>
  );
}

export default SearchResultsPage;
