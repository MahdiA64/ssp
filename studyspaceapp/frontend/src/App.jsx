import {
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom"
import Home from "./pages/home/Home"
import Book from "./pages/book/Book";
import Bookings from "./pages/bookings/Bookings";
import Chatbot from "./pages/chatbot/Chatbot";
import Review from "./pages/review/Review";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="book" element={<Book />}/>
        <Route path="bookings" element={<Bookings />}/>
        <Route path="chatbot" element={<Chatbot />}/>
        <Route path="review" element={<Review />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
