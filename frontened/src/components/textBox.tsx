import { Box, Button, TextField } from '@mui/material';
import * as React from 'react';

function TextBox() {
    function submitHandler(_event: React.FormEvent<HTMLFormElement>): void {
        throw new Error('Function not implemented.');
    }

    return (
      <>
    <Box component="form" onSubmit={submitHandler}>
    <TextField />
    <Button type="submit">Submit</Button>
    </Box>
      </>
    );
  }
export default TextBox