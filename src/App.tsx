import './App.css';
import MemoizationClassComponentsDemo from './demos/BeforeHooks/MemoizationClassComponentsDemo';
import MemoizationFunctionalComponents from './demos/BeforeHooks/MemoizationFunctionalComponents';
import PureVsComponentReRenderDemo from './demos/BeforeHooks/PureVsComponentRerenderDemo';
import ShouldComponentUpdate from './demos/BeforeHooks/ShouldComponentUpdate';
import Hooks from './demos/Hooks/hooks';
import Memoization from './demos/memoization';

function App() {
  return (
    <div className='App'>
      {/* <Memoization /> */}
      {/* <PureVsComponentReRenderDemo /> */}
      {/* <ShouldComponentUpdate /> */}
      {/* <MemoizationClassComponentsDemo /> */}
      {/* <Hooks /> */}
      <MemoizationFunctionalComponents />
    </div>
  );
}

export default App;
