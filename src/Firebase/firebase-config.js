import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAtdfNvb2WCYMUNDcwSOps7lHgjnHpJo8Q",
    authDomain: "martesareactjs.firebaseapp.com",
    projectId: "martesareactjs",
    storageBucket: "martesareactjs.appspot.com",
    messagingSenderId: "412331785387",
    appId: "1:412331785387:web:b34043bc847dbee3afcbee"
  };
  
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);