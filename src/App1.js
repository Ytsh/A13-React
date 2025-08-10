import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { Route, Routes } from "react-router-dom";
import { Stopwatch } from "./components/stopwatch";
import { ProductDetailPage } from "./pages/ProductDetailPage";

export function App1(){
    return(
        <>
        {/* You can add header or any other component here
         to display it on the top of all below pages */}
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/product/:id" element={<ProductDetailPage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
        </Routes>
        {/* You can add footer or any other component here
         to display it on the bottom of all above pages */}
        </>
    )
}