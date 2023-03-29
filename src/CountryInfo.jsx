const CountryInfo = ({ details }) => {
  let languages = details[0].languages;
  let currencies = details[0].currencies;
  let languagesArr = Object.values(languages);
  let currenciesArr = Object.values(currencies);
  console.log(languagesArr, currenciesArr);
  return (
    <>
      {details.map((detail) => (
        <div className="" key={detail.name.common}>
          <div className="w-20 mx-auto mt-4">
            <img src={detail.flags.svg} alt="" />
          </div>

          <h1 className="text-indigo-800 uppercase text-2xl font-bold text-center mt-3">
            {detail.name.common}
          </h1>

          <div className="mt-3 rounded-md overflow-hidden">
            <div className="row">
              <h2 className="output-text">Capital</h2>
              <h2 className="output-text">{detail.capital[0]}</h2>
            </div>
            <div className="row-dark">
              <h2 className="output-text">Language</h2>
              <h2 className="output-text">{languagesArr[0]}</h2>
            </div>
            <div className="row">
              <h2 className="output-text">Currency</h2>
              <h2 className="output-text">
                {currenciesArr[0].name}, {currenciesArr[0].symbol}
              </h2>
            </div>
            <div className="row-dark">
              <h2 className="output-text">Region</h2>
              <h2 className="output-text">{detail.region}</h2>
            </div>

            <div className="row">
              <h2 className="output-text">Sub-region</h2>
              <h2 className="output-text">{detail.subregion}</h2>
            </div>
            <div className="row-dark">
              <h2 className="output-text">Population</h2>
              <h2 className="output-text">{detail.population}</h2>
            </div>
            <div className="row">
              <h2 className="output-text">Area</h2>
              <h2 className="output-text">{detail.area} sq km</h2>
            </div>
            <div className="row-dark">
              <h2 className="output-text">Time Zone</h2>
              <h2 className="output-text">{detail.timezones[0]}</h2>
            </div>
          </div>
          <div className=" mt-3 output-text text-center">
            <h2 className="mb-2">Click the link to see map</h2>
            <a
              href={detail.maps.googleMaps}
              className=" bg-indigo-700 p-1 px-3 text-white rounded-full hover:bg-indigo-800 transition-color"
            >
              {detail.maps.googleMaps}
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default CountryInfo;
