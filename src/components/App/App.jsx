import { useState, useEffect } from "react";
import "./App.css";
import { getCountries } from "../../services/getCountries";
import InfoCountries from "../InfoCountries/InfoCountries";

function App() {
  const [countries, setCountries] = useState([]);
  const [countrySelected, setCountrySelected] = useState([]);

  useEffect(() => {
    (async () => {
      setCountries(await getCountries());
    })();
  }, []);

  const countryHandler = (e) => {
    setCountrySelected(e.currentTarget.value);
  };

  return (
    <main>
      <header>
        <article className="select_country">
          <label htmlFor="country">Seleccione un país</label>
          <select name="country" id="country" onChange={countryHandler}>
            <option value="">Seleccione...</option>
            {countries.data
              ? countries.data.map((country, index) => {
                  return (
                    <option value={country.cca2} key={country + index}>
                      {country.translations.spa.common}
                    </option>
                  );
                })
              : null}
          </select>
        </article>
      </header>

      {countries.data
        ? countries.data.map((country, index) => {
          if (country.cca2 === countrySelected) {
      
              return (
                <InfoCountries
                  key={country + index}
                  flag={country.flags.svg}
                  coatOfArms={country.coatOfArms.svg}
                  name={country.translations.spa.official}
                  internetCode ={country.tld}
                  cca2Code={country.cca2}
                  ccn3Code={country.ccn3}
                  cca3Code={country.cca3}
                  ciocCode={country.cioc}
                  fifa={country.fifa}
                  area={country.area}
                  independent={country.independent}
                  unMember={country.unMember}
                  currencies={country.currencies ? Object.values(country.currencies): null}
                  idd={country.idd.root + country.idd.suffixes}
                  capital={country.capital}
                  region={country.region}
                  subregion={country.subregion}
                  languages={country.languages ? Object.values(country.languages) : null}
                  latlng={country.latlng}
                  map={country.maps.googleMaps}
                  population={country.population}
                  carSign={country.car.signs}
                  carSide={country.car.side}
                  timezones={country.timezones}
                />
              );
            }
          })
        : null}
    </main>
  );
}

export default App;
