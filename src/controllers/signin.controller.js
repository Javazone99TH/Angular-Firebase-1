export class SignInController {
    constructor ($firebase) {
        'ngInject'
        this.$firebase = $firebase
    }
    signIn (){
    this.$firebase.signInWithEmailAndPassword(this.email,this.password)
    .then((res) => {
        console.log(res)
    })
    }
}
