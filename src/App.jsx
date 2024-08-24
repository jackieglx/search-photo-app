import Gallery from "./ Gallery.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import SearchForm from "./SearchForm.jsx";

const App = () => {
    return (
        <main>
            <ThemeToggle/>
            <SearchForm/>
            <Gallery/>
        </main>
    );
};
export default App;
