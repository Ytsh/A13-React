import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { Route, Routes } from "react-router-dom";
import { Stopwatch } from "./components/stopwatch";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { LoginPage } from "./pages/LoginPage";
import { ProtectedRoute } from "./auth/ProtectedRoute";

export function App1(){
    return(
        <>
        {/* You can add header or any other component here
         to display it on the top of all below pages */}
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/" element={<HomePage/>} />
            <Route path="/product/:id" element={<ProductDetailPage/>} />
            <Route path="/about" element={
                <ProtectedRoute>
                    <AboutPage/>
                </ProtectedRoute>
                } />
            <Route path="/contact" element={<ContactPage/>} />
        </Routes>
        {/* You can add footer or any other component here
         to display it on the bottom of all above pages */}
        </>
    )
}