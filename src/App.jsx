import Footer from "./components/Footer";
import Header from "./components/Header";
import TextDiffChecker from "./components/TextDiffChecker";

function App() {
  return (
    <div className="bg-[#f0ebf9] dark:bg-[#121212]">
      <Header />
      <TextDiffChecker />
      <Footer />
    </div>
  );
}

export default App;
