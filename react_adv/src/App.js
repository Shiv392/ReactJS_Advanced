import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounter3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';
import ClassCounter1 from './components/ClassCounter1';
import HookCounter_useeffect from './components/HookCounter_useeffect';
import ClassCounter2 from './components/classCounter2';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';

function App() {
  return (
    <div className="App">
     <ClassCounter />
     <HookCounter />
     <HookCounterTwo />
     <HookCounter3/>
     <HookCounter4/>
     <ClassCounter1/>
     <HookCounter_useeffect/>
    <ClassCounter2/>
    {/* <HookMouse/> */}
    <MouseContainer/>
    </div>
  );
}

export default App;
