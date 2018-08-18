import firebase from "firebase";

export const fire = firebase.initializeApp({
  apiKey: "AIzaSyB6sdptxk95NYoopO02Bl0fo-_JTrTA__M",
  authDomain: "myamica-3bf14.firebaseapp.com",
  databaseURL: "https://myamica-3bf14.firebaseio.com",
  projectId: "myamica-3bf14",
  storageBucket: "myamica-3bf14.appspot.com",
  messagingSenderId: "92910922090"
});

export function addPost(title, tags, content) {
  let post = {};
  post.title = title;
  post.tags = tags;
  post.content = content;
  console.log(fire, fire.database(), fire.database().ref('posts'));
  fire
    .database()
    .ref("posts")
    .push(post);
  fire
    .database()
    .ref("posts")
    .onWrite(e => window.location.assign('wall'));
}
