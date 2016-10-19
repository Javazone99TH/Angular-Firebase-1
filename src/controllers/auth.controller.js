import firebase from 'firebase'
export class AuthController {
    constructor ($scope){
        	'ngInject'
        this.$scope=$scope
        firebase.auth().onAuthStateChanged((user)=>{
            console.log(user)
        })
    }
    signUp () {
        firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
        .then((res)=>{
            // console.log(res)
            console.log(firebase.auth().currentUser)
        })
    }
    singIn () {
        this.signInLoading = true
        firebase.auth().singInWithEmailAndPassword(this.email,this.password)
        .then((res)=>{
            this.$scope.$apply(()=>{
                this.signInLoading =false
            })
        })
    }
    googleSignIn (){
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
        .then((res)=>{
        })
    }
   
}
