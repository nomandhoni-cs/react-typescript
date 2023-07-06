import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

const Header: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, fontWeight: 600 }}
                    >
                        Form App
                    </Typography>
                    <Button
                        sx={{
                            marginRight: "1rem",
                            border: "1px solid #fff",
                            "&:hover": {
                                border: "1px solid #fff",
                                backgroundColor: "#fff",
                                color: "#1976d2",
                            },
                            padding: "0.5rem 1rem",
                            fontWeight: 600,
                            textTransform: "capitalize",
                        }}
                        color="inherit"
                        component={Link}
                        startIcon={<AiOutlineHome />}
                        to="/"
                    >
                        Home
                    </Button>
                    <Button
                        sx={{
                            marginRight: "1rem",
                            border: "1px solid #1976d2",
                            backgroundColor: "#fff",
                            color: "#1976d2",
                            padding: "0.5rem 1rem",
                            fontWeight: 600,
                            textTransform: "capitalize",
                            "&:hover": {
                                border: "1px solid #fff",
                                backgroundColor: "#1976d2",
                                color: "#fff",
                            },
                        }}
                        color="inherit"
                        component={Link}
                        startIcon={<AiOutlineUser />}
                        to="/about"
                    >
                        About
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
