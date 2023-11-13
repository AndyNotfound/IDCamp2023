import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePageWrapper from './pages/HomePage';
import AddContactPage from './pages/AddContactsPage';
import Navigation from './components/organisms/Navigation';

function ContactApp() {
    return (
        <div className="contact-app">
            <header className="contact-app__header">
                <h1>Contact App</h1>
                <Navigation />
            </header>
            <main>
                <Routes>
                    <Route path='/' element={<HomePageWrapper />} />
                    <Route path='/add' element={<AddContactPage />} />
                </Routes>
            </main>
        </div>
    )
}

export default ContactApp;


const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <ContactApp />
    </BrowserRouter>
)