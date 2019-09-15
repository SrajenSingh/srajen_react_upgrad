import React from "react";
class Weather extends React.Component
{
    render()
    {
        return(
                <div>
                    <font color="black">
                    { this.props.city&&<p>Location: {this.props.city}</p>}
                    { this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
                    { this.props.humidity && <p>Humidity:{this.props.humidity}</p>}
                    { this.props.pressure && <p>Pressure:{this.props.pressure}</p>}
                    { this.props.description && <p>Conditions:{this.props.description}</p>}
                    { this.props.temp_max && <p>Max_Temp:{this.props.temp_max}</p>}
                    { this.props.temp_min && <p>Min_Temp:{this.props.temp_min}</p>}
                    { this.props.sunrise && <p>Sunrise:{this.props.sunrise}</p>}
                    { this.props.sunset && <p>Sunset:{this.props.sunset}</p>}
                    {this.props.error && <p>Errors:{this.props.error}</p>}
                    </font>
                </div>
        );
    }
};
export default Weather;