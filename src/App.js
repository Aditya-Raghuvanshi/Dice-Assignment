import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Success from "./components/Success";

function App() {
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>,
    },
    {
      path:"/success",
      element:<Success/>,
    }
  ])
  return (
    <Provider store={store}>
    <div className="App">
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
