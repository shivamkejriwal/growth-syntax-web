import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};
class Firebase {
  constructor() {
    // console.log('[sk]config', config);
    app.initializeApp(config);

    /* Firebase APIs */
    this.auth = app.auth();
    this.db = app.database();
    this.firestore = app.firestore()

    /* Social Sign In Method Provider */

    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
    this.twitterProvider = new app.auth.TwitterAuthProvider();
  }
    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
    doSignInWithGoogle = () =>
      this.auth.signInWithPopup(this.googleProvider);
    doSignInWithFacebook = () =>
      this.auth.signInWithPopup(this.facebookProvider);
    doSignInWithTwitter = () =>
      this.auth.signInWithPopup(this.twitterProvider);

    doSendEmailVerification = () =>
      this.auth.currentUser.sendEmailVerification({
        url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
      });
    doSignOut = () => this.auth.signOut();
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    // *** User API ***
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');

    // *** Articles API ***
    getArticles = (limit = 3) => this.firestore
                  .collection('Articles')
                  .orderBy('date','desc')
                  .limit(limit);
}
export default Firebase;