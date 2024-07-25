import { Box, Typography } from "@mui/material";

const HelpPage = () => {
    return (
        <>
            <Box>
                <Typography variant="h5">Need Help?</Typography>
                <Typography>
                    Learn how to use this app and share your amazing memories
                    with all your friends!
                </Typography>
            </Box>
            <main class="mdl-layout__content mat-typography">
                <div class="mdl-grid">
                    <div class="mdl-cell mdl-cell--12-col text-center">
                        <h3>Need Help?</h3>
                        <p>
                            Learn how to use this app and share your amazing
                            memories with all your friends!
                        </p>
                    </div>
                </div>
                <div class="mdl-grid">
                    <div class="mdl-cell mdl-cell--12-col text-center">
                        <h3>Contact Us!</h3>
                        <div>
                            <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
                                <i class="material-icons">call</i>
                            </button>
                            <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
                                <i class="material-icons">email</i>
                            </button>
                            <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
                                <i class="material-icons">chat_bubble</i>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};
export default HelpPage;
