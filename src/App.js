import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";



function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);



  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {

      console.log("user is ", authUser);
      if (authUser) {
        //the user logged in
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,

        }))
      } else {
        //the user is logged out
        dispatch(logout())
      }
    });
  }, []);

  return (
    <div className="App">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
