import { Box } from '@mui/material';

function Garage(props:{text:any; index:any; year:number; month:number; clickBut:any ;setClickBut:any}) {
  const {setClickBut} = props
    function handleClick () {
        console.log("On clickked: ",props.year," ",props.month)
        setClickBut(true)
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
            height: 48,
            '&:hover': {
                    backgroundColor: 'secondary.main',
                    cursor: 'pointer'
                },
          }}
          onClick={handleClick}
        >
                {props.index}
        </Box>
      </>
    );
  }
export default Garage
