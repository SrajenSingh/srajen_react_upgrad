import React from "react";
class Form extends React.Component
{
    render()
    {
        return(
               <form onSubmit={this.props.getWeather}>
                   <input id="hi1" type="text" name="city" placeholder="Enter City Name..."/>
                   
                   <button id="hi2"><font color="white">Search</font></button>
                   </form>
        );
    }
};
export default Form;