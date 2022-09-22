import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StyledCalendar = styled.div`
    margin-bottom: 100px;
`;

const StyledDatePicker = styled(DatePicker)`
    width: 110px;
`;
const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());

    console.log(startDate);
    return (
        <StyledCalendar>
            <StyledDatePicker dateFormat="yyyy년 MM월 dd일" selected={startDate} onChange={(date) => setStartDate(date)} />
        </StyledCalendar>
    );
};

export default Calendar;
