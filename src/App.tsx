import './App.css';
import MemoizationClassComponentsDemo from './demos/BeforeHooks/MemoizationClassComponentsDemo';
import PureVsComponentReRenderDemo from './demos/BeforeHooks/PureVsComponentRerenderDemo';
import ShouldComponentUpdate from './demos/BeforeHooks/ShouldComponentUpdate';
import Memoization from './demos/memoization';

function App() {
  return (
    <div className='App'>
      {/* <Memoization />
      <PureVsComponentReRenderDemo />
      <ShouldComponentUpdate /> */}
      <MemoizationClassComponentsDemo />
    </div>
  );
}

export default App;
