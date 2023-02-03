import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from '../pages/SignUpPage';
import SignInPage from '../pages/SignInPage';
import AboutPage from '../pages/AboutPage';
import SearchPage from '../pages/SearchPage';
import ShopPage from '../pages/ShopPage';


const Routers = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path = "/signUp" element={<SignUpPage/>}/>
                    <Route path = "/signIn" element={<SignInPage/>}/>
                    <Route path = "/about" element={<AboutPage/>}/>
                    <Route path = "/searchPage" element={<SearchPage/>}/>
                    <Route path = "/shop" element={<ShopPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Routers;