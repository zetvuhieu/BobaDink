import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import More from './pages/SignIn';
import Login from './pages/Login';
import Products from './pages/Products';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sign_up" element={<SignUp />} />
                    <Route path="/sign_in" element={<SignIn />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
