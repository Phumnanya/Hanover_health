// src/components/DiseaseCard.tsx
import React, { useEffect, useState } from 'react';


function Test() {
  const [weatherData, setweatherData] = useState(null);
  const [city, setCity] = useState('');
  
  async function fetchdata() {
    
    const API_KEY: string = "431f5ef15584a951c785eec85f2b0ee0";
    const weather: string = `http://127.0.0.1:5000/fetch-data`

    try {
      const response = await fetch(weather);
      const data = await response.json();
      console.log(data)
      setweatherData(data);
    }
    catch (error) {
      console.error("the thing no work oo");
      alert("Bro the thing no work");
    }
  }
/*  function handleAll() {
    if (city.trim() !== "") {
      fetchdata(city);
      }
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
  }*/

  return(
    <>
        <div>
          
          <button type='button' onClick={fetchdata}>Search data</button>
          
        </div>
    </>
  )
}

export default Test;

//https://ghoapi.azureedge.net/api/Indicator?$filter=contains(IndicatorName,'DTP3 immunization')



/**
 * https://ghoapi.azureedge.net/api/dptv
 * import { fetchDiseaseData, DiseaseData } from './Data';
 * 
 * <p>{weatherData!.name}</p>
          <p>Temperature: {weatherData!.main.temp}°C</p>
 * 
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
 * interface Props {
  title: string;
  indicatorCode: string;
  countryCode?: string;
  year?: number;
}

const Test: React.FC<Props> = ({
  title,
  indicatorCode,
  countryCode = 'NGA',
  year = 2022,
}) => {
  const [data, setData] = useState<DiseaseData[] | null>(null);

  useEffect(() => {
    fetchDiseaseData(indicatorCode, countryCode, year).then(setData);
  }, [indicatorCode, countryCode, year]);

  return (
    <div className="border p-4 rounded-xl shadow-md w-full max-w-sm bg-white">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {data && data.length > 0 ? (
        <p className="text-gray-700">
          <strong>{data[0].Value}</strong> cases in {countryCode} ({year})
        </p>
      ) : (
        <p className="text-gray-400 italic">Loading or no data...</p>
      )}
    </div>
  );
};
 */