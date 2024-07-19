import { createContext } from "react";

interface WeatherContextType {
    name: string,
    temp: string,
    description: string,
    humidity: string,
    wind: string,
    imgUrl: string
}

export const WeatherContext = createContext<WeatherContextType | null>(null);