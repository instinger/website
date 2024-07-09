import react, { useEffect } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./components/Header.components";
import Home from "./pages/Home.pages";
import About from "./pages/About.pages";
import Contact from "./pages/Contact.pages";
import Service from "./pages/Service.pages";
import Blog from "./pages/Blog.pages";
import Signin from "./pages/Signin.pages";
import Footercomponent from "./components/Footer.components";
import Signup from "./pages/Signup.pages";
import PrivateRoute from "./components/PrivateRoute.components";
import Profile from "./pages/Profile.pages";
import CreateListing from "./pages/CreateListing.pages";
import Listing from "./pages/Listing.pages";
import UpdateListing from "./pages/UpdateListing.pages";
import Portfolio from "./pages/Portfolio.pages";
import Footer from "./components/Footer.components";

const App = () => {

  return <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />}/>
      <Route path="/portfolio" element={<Portfolio />}/>
      <Route path="/blog" element={<Blog />}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/signin" element={<Signin />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/listing/:listingId" element={<Listing />} />
       <Route element={<PrivateRoute/>}> 
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-listing" element={<CreateListing />} />
        <Route path="/update-listing/:listingId" element={<UpdateListing />} />
       </Route>
     </Routes>
     <Footer/>
  </BrowserRouter>
}

export default App;