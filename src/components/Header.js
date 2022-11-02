import React, { useState } from 'react';
import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom'

function Header() {
    const [value, setValue] = useState();
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <Typography variant='h3'>MernAuth</Typography>
                <Box sx={{ marginLeft: "auto" }}>
                    <Tabs
                        onChange={(e, value) => setValue(value)}
                        value={value}
                        textColor='inherit'
                        indicatorColor='secondary'>
                        <Tab to="/login" LinkComponent={Link} label="Login" />
                        <Tab to="/signup" LinkComponent={Link} label="Sign Up" />
                    </Tabs>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
