import styled from "styled-components";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import BookingPage from "./pages/BookingPage";
import AdminDashboard from "./pages/AdminDashboard";
import MyBookings from "./pages/MyBookings";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Body = styled.main`
  flex: 1;
`;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes with MainWrapper Layout */}
        <Route
          path="/"
          element={
            <MainWrapper>
              <Header />
              <Navbar />
              <Body>
                <BookingPage />
              </Body>
              <Footer />
            </MainWrapper>
          }
        />
        <Route
          path="/my-bookings"
          element={
            <MainWrapper>
              <Header />
              <Navbar />
              <Body>
                <MyBookings />
              </Body>
              <Footer />
            </MainWrapper>
          }
        />

        {/* Route without MainWrapper layout */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
