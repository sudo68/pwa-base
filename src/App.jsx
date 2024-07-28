import { Route, Routes } from "react-router-dom";
import DrawerAppBar from "./components/layout";
import HomePage from "./components/home";
import HelpPage from "./components/help";

const App = () => {
    return (
        <>
            <div className="App">
                <Routes>
                    <Route path="/" element={<DrawerAppBar />}>
                        <Route index element={<HomePage />} />
                        <Route path="/help" element={<HelpPage />} />
                    </Route>
                </Routes>
            </div>
        </>
    );
};
export default App;
