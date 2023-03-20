import classes from './App.module.scss';
import Window from './component/Window/Window';

import Chapter from './component/Chapter/Chapter';

function App() {
  return (
    <div className={classes.App}>
      <Window>
        <Chapter />
      </Window>
    </div>
  );
}

export default App;
