import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import FeaturesPage from "./components/FeaturesPage";
import PricingPage from "./components/PricingPage";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container mt-3">
                <Routes>
                    <Route path={"/"} element={<HomePage/>}/>
                    <Route path={"/features"} element={<FeaturesPage/>}/>
                    <Route path={"/pricing"} element={<PricingPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
