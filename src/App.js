//import logo from './logo.svg';
//import './App.css';
import MyComponent from "./Component/Hero.js" 
import Header from "./Component/header"

function App() {
  return (
    <div>
    {/*<Bag/>*/}
    <div>
    <div class=" absolute overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-blue-500">
        <div class="grid grid-cols-6 grid-rows-4 h-screen w-screen transform -skew-y-12 opacity-50">
          <div class="bg-purple-700"></div>
          <div class="bg-blue-700"></div>
          <div class="bg-purple-800 col-start-4 col-span-2"></div>
        </div>
      </div>
    </div>
    
    <MyComponent/>
   </div>
  );
}

export default App;
