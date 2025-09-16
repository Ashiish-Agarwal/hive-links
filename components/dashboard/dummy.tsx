'use client'
import { Saturation, Hue, useColor } from "react-color-palette";
import "react-color-palette/css";

export function App() {
  const [color, setColor] = useColor("hsl(120 100% 50% / .5)");

  return (
    <div className="custom-layout w-44 h-44  rounded-md ">
      hiii
      <Saturation height={200}  color={color} onChange={setColor} />
      <Hue color={color} onChange={setColor} />
    </div>
  );
}