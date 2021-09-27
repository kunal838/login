import { Navbar, Login, AppRouter } from "./comps";
/* import { auth } from "./utils/firebase"; */
import AuthContextProvider from "./context/AuthContext";
function App() {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
