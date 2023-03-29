import { useState } from "react";
import CountryInfo from "./CountryInfo";
const Country = () => {
  const [input, setInput] = useState("");
  const [details, setDetails] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(input);
    let url = "https://restcountries.com/v3.1/name/" + input + "?fullText=true";
    if (input === "") {
      setError("Please type a country name.");
    } else {
      setIsPending(true);
      fetchData(url);
    }
  };
  const fetchData = async (url) => {
    await fetch(url)
      .then((res) => {
        if (res.status === 404) {
          throw Error("Country not found.");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        // console.log(data);
        setError(null);
        setDetails(data);
        setIsPending(false);
        setInput("");
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  };

  return (
    <div className="Country w-full md:max-w-md bg-white p-5 rounded-lg md:shadow-lg">
      <h1 className="text-2xl font-bold text-indigo-800 text-center pb-4">
        Country Informant
      </h1>
      <form action="" className="flex justify-between">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-slate-400 px-2 py-2 rounded-sm w-full focus:border-green-900 focus:ring-green-500"
          placeholder="Type a name of a country"
        />
        <button
          onClick={handleSubmit}
          className="text-white bg-green-500 px-4 py-2 rounded-sm ml-3 hover:bg-green-600 transition-all"
        >
          Search
        </button>
      </form>
      <div className="mt-3">
        {isPending && (
          <div className="text-center font-semibold text-indigo-800">
            Please wait.
          </div>
        )}
        {error && (
          <div className="text-center text-red-600 font-semibold">{error}</div>
        )}
      </div>
      {details && <CountryInfo details={details} />}
    </div>
  );
};

export default Country;
