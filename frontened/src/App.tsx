import React from 'react';
import './App.css';
import CalendarGrid from './components/calendarGrid';
import Dropdown from './components/dropdown';
import TextBox from './components/textBox';

function getWeekday(year :any , month:any, day:any) {
  const date = new Date(year, month - 1, day); // month is 0-indexed
  return date.getDay();
}
function getDaysInMonth(year: any, month: any): number {
  return new Date(year, month , 0).getDate();
}
function getCurrentYear() {
    const d = new Date();
    return d.getFullYear();
}
function getCurrentMonth() {
  const d = new Date();
  return d.getMonth()+1;
}

function App() {
  const [year, setYear] = React.useState(getCurrentYear());
  const [month, setMonth] = React.useState(getCurrentMonth());
  const [clickBut, setClickBut] = React.useState(false)
  return (
    <>
    <div className='FullBody'>
      <div className="gridContainer">
      
         {!clickBut && (
          <>
        <Dropdown year = {year} setYear = {setYear} month = {month} setMonth = {setMonth}/>
        <CalendarGrid daysToSkip={getWeekday(year, month ,1)} numberofDays={getDaysInMonth(year, month)} year={year} month={month} clickBut= {clickBut} setClickBut = {setClickBut} />
        </>
         )
         }
        {
        clickBut && <TextBox/>
        }
      </div>
    </div>
     </>
  );
}

export default App;
