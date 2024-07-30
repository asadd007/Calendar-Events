import { Box } from '@mui/material';

function Garage(props:{text:any; index:any; year:number; month:number}) {
    function handleClick () {
        console.log("On clickked: ",props.year," ",props.month)
    }
    return (
      <>
        <Box color="black" sx={{ 
            border: props.index ? '1px solid black' : '', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            cursor: props.index ? 'pointer' : "default",
            width: 48,
            height: 48
          }}
          onClick={handleClick}
        >
                {props.index}
        </Box>
      </>
    );
  }
export default Garage