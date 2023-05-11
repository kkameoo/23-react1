import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>;
}

function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function tryConvert(temperatue, convert) {
    const input = parseFloat(temperatue);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator(props) {
    const [temperatue, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temperatue) => {
        setTemperature(temperatue);
        setScale("c");
    };

    const handleFahrenheitChange = (temperatue) => {
        setTemperature(temperatue);
        setScale("f");
    };

    const celsius =
        scale === "f" ? tryConvert(temperatue, toCelsius) : temperatue;
    const fahrenheit =
        scale === "c" ? tryConvert(temperatue, toFahrenheit) : temperatue;

    return (
        <div>
            <TemperatureInput
                scale="c"
                temperatue={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                temperatue={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

export default Calculator;

