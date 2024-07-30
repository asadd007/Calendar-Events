import React from 'react';
import { Box } from '@mui/material';
import Garage from './box';
const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export default function CalendarGrid(props : { daysToSkip: number; numberofDays: number; year: any; month:any} ) {
    const { daysToSkip, numberofDays} = props;
    const daysofMonth = Array.from(Array(42).keys()).map((day, index) => {
        if(index < daysToSkip || index > numberofDays + daysToSkip-1) {
            return ''
        } else {
            return day-daysToSkip+1;
        }
    });

    return (
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(7, 1fr)', 
            gridTemplateRows: 'repeat(7, 1fr)', 
            gap: 0, // Adjust this for desired spacing between cells
            width: '100%', 
            height: 'auto' // Adjust this for desired grid height
          }}
        >
            {daysOfWeek.map((week) => {
                return(
                    <Box 
                  key={week} 
                  sx={{ 
                    border: '1px solid white', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: 48,
                    height: 48,
                    background: '#000',
                    color: '#fff',
                  }}
                >
                    {week}
                </Box>
                )
            })}
            {daysofMonth?.map((index) => (
                <Garage text={index} index={index} year={props.year} month={props.month} />
            ))}
        </Box>
    );
}
