import { BrowserRouter } from 'react-router-dom';

import { AppRouters } from './Routes/AppRouters';

function App() {
  return (
    <>
      {/* <Login /> */}
      <BrowserRouter>
        <AppRouters />
      </BrowserRouter>
    </>
  );
}

export default App;
