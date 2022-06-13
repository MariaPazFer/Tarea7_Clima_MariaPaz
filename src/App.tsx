import { useEffect, useState } from 'react'
import { informacion } from './informacion';
import { Tarjeta } from './tarjeta';
import axios from 'axios';

const codigosCiudades = [3601783, 2643743, 2968815, 5128638, 1850147, 2147714];

function App() {
  const [ciudades, setCiudades] = useState<informacion[]>([]);
  const infoClimas = async () => {
    let Ciudades: informacion[] = [];
    for (let ciudades of codigosCiudades) {
      const request = await axios.
      get<informacion>("https://api.openweathermap.org/data/2.5/weather", 
      { params: { APPID: "d515e211d8eb81d3cea18b0182592080", id: ciudades } });
      const info = request.data;
      Ciudades = [...Ciudades, info];
    }
    setCiudades(Ciudades);
  }
  useEffect(() => {
    infoClimas();
    const interval = setInterval(infoClimas, 20000);
    return () => {
      clearInterval(interval);
    }
  }, [])
  return (
    <div className="container">
      {ciudades.length===0 ? <h1>Cargando...</h1> : <div className='grid_container'>{ciudades.map(e => <Tarjeta key={e.id} info={e} />)}</div>}
    </div>
  )
}
export default App