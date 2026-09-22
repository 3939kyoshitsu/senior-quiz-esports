// ここをFirebaseコンソールで取得した設定値に書き換えてください。
// 手順は README.md の「1. Firebaseプロジェクトを作る」を参照。
// これらの値は公開されても問題ありません（Firebaseの「ウェブAPIキー」は秘密鍵ではありません）。
// 実際のアクセス制限は Realtime Database の「ルール」で行います（README参照）。
const firebaseConfig = {
  apiKey: "AIzaSyCWK024X1w0Cab9Lg_9rsdxQU7aBJs7kNE",
  authDomain: "senior-quiz-esports.firebaseapp.com",
  databaseURL: "https://senior-quiz-esports-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "senior-quiz-esports",
  storageBucket: "senior-quiz-esports.firebasestorage.app",
  messagingSenderId: "963890458685",
  appId: "1:963890458685:web:d258f5b4ab1f46b26f3a54",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();