import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <a href="/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo"/>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
          <div className="flex items-center">
            <span className="mr-6 text-sm font-medium text-gray-500 dark:text-white">(555)
              412-1234</span>
            <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</a>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default App;
