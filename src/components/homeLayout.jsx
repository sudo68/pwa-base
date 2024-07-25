import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
    AppBar,
    Toolbar,
    Button,
    Typography,
    IconButton,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    ListItemIcon,
    Divider,
    Container,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link, Outlet } from "react-router-dom";

const App = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <List>
                {["Help", "Feed"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {["All mail", "Trash"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 3 }}
                    >
                        PWAGram
                    </Typography>

                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Link
                            to="/"
                            style={{ marginRight: 5, textDecoration: "none" }}
                        >
                            Feed
                        </Link>
                        <Link
                            to="/help"
                            style={{ marginRight: 10, textDecoration: "none" }}
                        >
                            Help
                        </Link>
                        <Button
                            color="warning"
                            variant="contained"
                            size="small"
                        >
                            Enable Notifications
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
            <Container maxWidth="md" sx={{ marginTop: 2 }}>
                <Outlet />
            </Container>
        </>
    );
};

export default App;
