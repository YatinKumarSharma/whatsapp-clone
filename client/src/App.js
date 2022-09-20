import { GoogleOAuthProvider } from "@react-oauth/google";
import Messenger  from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";


function App() {
  const clientId = '218861430775-ti59cc8gkh9ap2sk68oamrpmpspd1be9.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId = {clientId}>
      <AccountProvider>
      <Messenger /> 
      </AccountProvider>
    </GoogleOAuthProvider>
  );
} 

export default App;
