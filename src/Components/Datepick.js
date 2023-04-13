import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState,useEffect } from 'react'
export default function BasicDatePicker({work,setWork,label}) {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange=(date)=>{
    // console.log(typeof(setWork));
    setSelectedDate(date);
    setWork((prevWork) => ({
      ...prevWork,
      startDate: date,
    }));
    console.log(work);
}
useEffect(()=>{
console.log()
},[selectedDate])
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker selected={selectedDate} dateFormat='dd/MM/yyyy' onChange={handleDateChange} label={label} />
      </DemoContainer>
    </LocalizationProvider>
  );
}