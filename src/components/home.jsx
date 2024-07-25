import React from "react";
import {
    Card,
    Box,
    CardContent,
    CardMedia,
    Typography,
    CardActions,
    Button,
    Grid,
} from "@mui/material";
const HomePage = () => {
    return (
        <Box sx={{ marginBottom: 3 }}>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                <Grid item xs={6}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/images/main-image.jpg"
                            title="Explore the City"
                        />
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Share your Moments
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Upload your photo and write caption for it.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/images/main-image.jpg"
                            title="Explore the City"
                        />
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Share your Moments
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Upload your photo and write caption for it.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/images/main-image.jpg"
                            title="Explore the City"
                        />
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Share your Moments
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Upload your photo and write caption for it.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/images/main-image.jpg"
                            title="Explore the City"
                        />
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Share your Moments
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Upload your photo and write caption for it.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};
export default HomePage;
