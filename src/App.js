import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-green-300 via-blue-500 to-purple-600 text-slate-200">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
