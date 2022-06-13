import { FC } from "react";
import { informacion } from "./informacion";

type Props = {
    info: informacion
}
const celsius = (valor: number): string => {
    let celsius = valor - 273.15;
    return `${celsius.toFixed(2)} °C`;
}
const imagenCiudad=(ciudad:string)=>{
    switch (ciudad) {
        case "San Pedro Sula":
        return "https://www.hondurastips.hn/wp-content/uploads/2011/02/Parque-central-Miguel-Paz-Barahona-de-San-Pedro-Sula.jpg"
    
        case "London":
        return "https://content.r9cdn.net/himg/7c/ad/aa/leonardo-2009900-London_Bankside-London_Shoreditch-Tower_of_London-2019080_O-276358.jpg"
        
        case "Paris":
            return "https://static.dw.com/image/61649317_401.jpg"
        
            case "New York":
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/800px-Above_Gotham.jpg"
            case "Tokyo":
            return "https://storage.googleapis.com/pod_public/1300/83282.jpg"
            case "Sydney":
            return "https://cdn.getyourguide.com/img/location/5ffeb41ba859e.jpeg/88.jpg"
    }
}
export const Tarjeta: FC<Props> = ({ info }) => {
    return (
        <div className="card_container">
            <img style={{ width: "100%", height: "80%" }} src={imagenCiudad(info.name)} />
            <div style={{display:"flex",justifyContent:"center"}}>    
            <img style={{ width: "20%", height: "100%" }}
            src={`https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`} /></div>
            <div style={{ padding: "40px" }}>
            <h1 >{info.name}</h1>
        <p>Temperatura: {celsius(info.main.temp)}</p>
        <p>Temperatura Maxima: {celsius(info.main.temp_max)}</p>
        <p>Temperatura Minima: {celsius(info.main.temp_min)}</p>
        <p>Humedad: {info.main.humidity} %</p>
        </div>
        </div>
    )
}