import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Products from './pages/Products';
import Test from './pages/Test';
import Admin from './pages/Management/Manage_products';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sign_up" element={<SignUp />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/about_us" element={<AboutUs />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
