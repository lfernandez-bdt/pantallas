import React from "react";
import { Icon } from "./Icon";
import "@/styles/stylesComponents/datePicker.css";

const DatePicker = () => {
    return (
        <div className="datePicker">
            <Icon type="calendar" className={"icon"} />
            <input type="date" min="1997-01-01" max="2030-12-31" />
            <p>Seleccione Fecha</p>
        </div>
    );
};

export default DatePicker;
