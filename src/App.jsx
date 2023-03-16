import React, { useRef, useState } from "react";
import "https://ran-sy.github.io/ultimate-chat/src/App.css";
import logo from "https://ran-sy.github.io/ultimate-chat/src/assets/vite.svg";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAdXMku4263_SZd_RSohv8A4JdvKyMRMjs",
  authDomain: "ultimatechat-00.firebaseapp.com",
  projectId: "ultimatechat-00",
  storageBucket: "ultimatechat-00.appspot.com",
  messagingSenderId: "332219460816",
  appId: "1:332219460816:web:0b969f135e00f99ed742d5",
});
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="header">
        <img src={logo} />
        <h2>ULTIMATE CHAT</h2>
        <div>{user ? <SignOut /> : ""}</div>
      </header>
      <section className="bg-img">{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return <button onClick={signInWithGoogle}>Sign in with google</button>;
}

function SignOut() {
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
  );
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  // listen to update using data hook (return collection of objects)
  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="chat">
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </main>
      <div ref={dummy}></div>
      <form
        className="send-form"
        onSubmit={formValue.trim() ? sendMessage : (e) => e.preventDefault()}
      >
        <input
          className="write-message"
          type="text"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
function ChatMessage(props) {
  const { text, uid, photoURL, id } = props.message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <div className={`message ${messageClass}`} key={id}>
      <img src={photoURL} alt="/" />
      <p>{text}</p>
    </div>
  );
}

export default App;
