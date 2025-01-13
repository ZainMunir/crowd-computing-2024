// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { addDoc, collection, getFirestore } from 'firebase/firestore/lite';
import { ActionLog, Answer, ProlificInfo } from './questionData';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAjMFsmORDecClFveFA0ZZl-WrIWJPLOM8',
  authDomain: 'crowd-computing-2024.firebaseapp.com',
  projectId: 'crowd-computing-2024',
  storageBucket: 'crowd-computing-2024.firebasestorage.app',
  messagingSenderId: '751898183538',
  appId: '1:751898183538:web:523c2a7e1cbbc78c10bfeb',
  measurementId: 'G-3EM9BFRZT7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const responseCollection = collection(db, 'responses');

export type Response = {
  prolificInfo: ProlificInfo;
  answers: Array<Answer>;
  startTime: Date;
  endTime: Date;
  windowWidth: number;
  windowHeight: number;
  actionLogs: ActionLog[];
  storyIndex: number;
  firstStoryName: string;
  secondStoryName: string;
};

export const addResponse = async (response: Response) => {
  try {
    const docRef = await addDoc(responseCollection, response);
    // console.log('Document written with ID: ', docRef.id);
    return true;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
  return false;
};
