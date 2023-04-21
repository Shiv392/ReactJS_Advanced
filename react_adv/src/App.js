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
import IntercvalClassCounter from './components/IntercvalClassCounter';
import IntervalFunction from './components/IntervalFunction';
import FetchData from './components/FetchData';
import CompC from './useContext/CompC.js'
import React, { useReducer } from 'react';
import Counter_useState from './useReducer/Counter_useState';
import Counter_useReducer from './useReducer/Counter_useReducer';
import CounterTwo_useReducer from './useReducer/CounterTwo_useReducer';
import Multiple_useReducer from './useReducer/Multiple_useReducer';
import FetchData_useState from './useReducer/FetchData/FetchData_useState';
import FetchData_useReducer from './useReducer/FetchData/FetchData_useReducer';
import FocustInput from './useRef/FocustInput';
import ClassTimer from './useRef/ClassTimer';
import HookTimer from './useRef/HookTimer';
import Counter from './useMemo/Counter';

export const UserContext=React.createContext();
export const ChannelContext= React.createContext();
export const CountContext= React.createContext();


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
    {/* <IntercvalClassCounter/> */}
    {/* <IntervalFunction/> */}
    <FetchData/>
    <UserContext.Provider value={"Shiv Soni"}>
    <ChannelContext.Provider value={"Shiv Channel"}>
    <CompC/>
    </ChannelContext.Provider>
    </UserContext.Provider>
    <Counter_useState/>
    <Counter_useReducer/>
    {/* <CounterTwo_useReducer /> */}
    <Multiple_useReducer/>
    <FetchData_useState/>
    <FetchData_useReducer/>
    <FocustInput/>
    <ClassTimer/>
    <HookTimer/>
    <Counter/>
    </div>
  );
}

export default App;
