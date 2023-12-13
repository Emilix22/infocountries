import React from "react";
import "./InfoCountries.css";
import { Link } from "react-router-dom";
import iconMap from "../../assets/iconMap.svg"

function InfoCountries({
  flag,
  coatOfArms,
  name,
  internetCode,
  cca2Code,
  ccn3Code,
  cca3Code,
  ciocCode,
  area,
  independent,
  unMember,
  currencies,
  idd,
  capital,
  fifa,
  region,
  subregion,
  languages,
  latlng,
  map,
  population,
  carSign,
  carSide,
  timezones,
}) {
  return (
    <section className="infoCountry">
      <h3>Bandera y Escudo de Armas</h3>
      <div className="bandera_escudo">
        <img className="flag" src={flag} alt="bandera" />
        <img className="flag" src={coatOfArms} alt="escudo" />
      </div>
      <div className="info">
        <div className="info_camp">
          <label htmlFor="official_name">Nombre oficial: </label>
          <span id="official_name">{name}</span>
        </div>
        <div className="info_camp">
          <label htmlFor="capital">Capital: </label>
          <span id="capital">{capital}</span>
        </div>
        <div className="info_camp">
          <label htmlFor="region">Región: </label>
          <span id="region">{region}</span>
        </div>
        <div className="info_camp">
          <label htmlFor="subregion">Subregión: </label>
          <span id="subregion">{subregion}</span>
        </div>
        <div className="info_camp">
          <label htmlFor="lang">Idiomas: </label>
          <span id="lang">{languages.map((lang, index) => {
            return lang + " "
          })}</span>
        </div>
        <div className="info_camp">
          <label htmlFor="currencies">Monedas: </label>
          <span id="currencies">{currencies.map((money, index) => {
            return money.name + " (" + money.symbol + ") "
          })}</span>
        </div>
        <div className="info_camp">
          <label htmlFor="area">Área geográfica: </label>
          <span id="area">
            {area} Km<sup>2</sup>
          </span>
        </div>
        <div className="info_camp">
          <label htmlFor="polulation">Población: </label>
          <span id="population">{population}</span>
        </div>
        <div className="info_camp">
          <label htmlFor="lang">Zonas Horarias: </label>
          <span id="lang">{timezones.map((zone, index) => {
            return zone + " "
          })}</span>
        </div>
        <div className="info_camp">
          <label htmlFor="idd">Prefijos Telefónicos: </label>
          <span id="idd">{idd}</span>
        </div>
        <div className="info_camp">
          <label htmlFor="independent">País Independiente: </label>
          <span id="independent">{independent === true ? "Si" : "No"}</span>
        </div>
        <div className="info_camp">
          <label htmlFor="unMember">Pertenece a Naciones Unidas: </label>
          <span id="unMember">{unMember === true ? "Si" : "No"}</span>
        </div>
        <div className="info_camp">
          <label htmlFor="cca2">Código ISO 3166-1 (dos letras): </label>
          <span id="cca2">{cca2Code}</span>
        </div>
        <div className="info_camp">
          <label htmlFor="cca3">Código ISO 3166-1 (tres letras): </label>
          <span id="cca3">{cca3Code}</span>
        </div>
        <div className="info_camp">
          <label htmlFor="ccn3">Código ISO 3166-1 (numérico): </label>
          <span id="ccn3">{ccn3Code}</span>
        </div>
        <div className="info_camp">
          <label htmlFor="internet_code">Código de Internet: </label>
          <span id="internet_code">
            {internetCode.map((code, index) => {
              return code + " ";
            })}
          </span>
        </div>
        <div className="info_camp">
          <label htmlFor="olimpic_code">Código en Comité Olímpico Internacional: </label>
          <span id="olimpic_code">{ciocCode ? ciocCode : "No participa"}</span>
        </div>
        <div className="info_camp">
          <label htmlFor="olimpic_code">Código FIFA: </label>
          <span id="olimpic_code">{fifa ? fifa : "No participa"}</span>
        </div>
        <div className="info_camp">
          <label htmlFor="latlng">Latitud y Longitud: </label>
          <span id="latlng">Lat: {latlng[0]}°, Long: {latlng[1]}°</span>
        </div>
        <div className="info_camp">
          <label htmlFor="map">Mapa: </label>
          <span id="map"><Link to={map} target="_blank">Ver Mapa</Link></span>
        </div>
        <div className="info_camp">
          <label htmlFor="lang">Símbolo matrículas autos: </label>
          <span id="lang">{carSign.map((sign, index) => {
            return sign + " "
          })}</span>
        </div>
        <div className="info_camp">
          <label htmlFor="polulation">Se conduce por: </label>
          <span id="population">{carSide}</span>
        </div> 
      </div>
    </section>
  );
}

export default InfoCountries;
