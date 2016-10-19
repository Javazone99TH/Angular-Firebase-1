import firebase from 'firebase'

export class FirebaseService {
    constructor ($rootScope){
        'ngInject'
        this.$rootScope = $rootScope
    }
    signOut (){
        firebase.auth().signOut()
    }
    signInWithEmailAndPassword (email,password) {
        return firebase.auth().signInWithEmailAndPassword(this.email,this.password)
    }
    signInWithGoogle (){
        const provider = new firebase.auth.GoogleAuthProvider()
        return   firebase.auth().signInWithPopup(provider)
    }
    createUserWithEmailAndPassword (email,password) {
        return firebase.auth().createUserWithEmailAndPassword(email,password)
    }
} 
