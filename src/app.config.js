import firebase from 'firebase'

export function Config ($stateProvider, $urlRouterProvider,$locationProvider) {
	'ngInject'
	 var config = {
    apiKey: 'AIzaSyBumovROaUsOzfQxUzfLhJyOgae35qW4Rk',
    authDomain: 'fir-training-a556a.firebaseapp.com',
    databaseURL: 'https://fir-training-a556a.firebaseio.com',
    storageBucket: 'fir-training-a556a.appspot.com',
    messagingSenderId: '1058337029517'
  };
//   console.log(firebase)
  firebase.initializeApp(config);

	$locationProvider.html5Mode(true)
	$urlRouterProvider.otherwise('/')
	$stateProvider 
		.state('auth', {
			abstract : true,
			template: require('./View/auth.html')
		} )
		.state('auth.signin', {
			url: '/',
			template: require('./View/signin.html')
			controller: 'SignInController',
			controllerAs:'vm'
		} )
		.state('auth.register', {
			url: '/register',
			template: require('./View/register.html')
		} )
}