# Authentication system using firebase

An Authentication application which uses firebase to grant users authentication.

**End Result**

Click Link Here : https://bucketlistapp-by-eniola.netlify.app/

# Description

**Details**

An Authentication application which uses firebase to grant users authentication. 

The application state is managed using the useContext() hook

The first page a user sees when he visits the app an is the onboarding page where the user can see the login buttton, when the login button is clicked, the user is redirected to the login page. 

In the login page we have a the form for authentiction of a user, the form takes on two inputs which are :

- The email address
- The password

Now you can iterate between the login or sign up forms, by clicking the 'login with existing account' and 'Create new account'. You should login if you already have an account or sign upif you don't have one.

![signup form](https://github.com/Eniola-Codes/Bucket-List-App/blob/main/src/asset/bucketerror.png?raw=true)
![login form](https://github.com/Eniola-Codes/Bucket-List-App/blob/main/src/asset/bucketerror.png?raw=true)

After submitting the form, the information is sent to firebase authentication API endpoint, if the information is invalid, putting an invalid email address, invalid password or password shorter tha 6 digits you get an error alert saying 'Authentication failed!'

on the other hand, if the inputs are valid, the user will get a secure id token back from firebase which will be sent along with any request to firebase and the user is then logged in.

i then used the useContext() hook to store the user log in state, idToken and idle expiration time till the user wil be logged out. So the user won't be logged out if the page reloads or the users goes and visits the app later, i also used the useContext to not only hide the the profile page link from the main navigation when the user is logged out, but i also protected the page itself, the page exists on the dom , but cannot be accessed unless user is logged in. 

The profile page contains a form that aloows you to change the password by taking on a password input. When submitted  a request is snt to firebase alongside the id token in teh body of the request so firebase knows the user that wants to chnage ther password.

![change password](https://github.com/Eniola-Codes/Bucket-List-App/blob/main/src/asset/bucketerror.png?raw=true)

When you click on the logout button it clears the id token and uses context to change the login state to false.

**Technologies**

Technologies i used to build this are React.js, css, firebase authentcation Api.

I used React.js framework to bootstrap this project because of the below functionalities : 

- Seperation of concerns (Having leaner files and components by breaking down the code into smaller parts)
- Prop drilling to pass some data from component to component with ease.
- used the useContext() hook to manage the app wide state of my application
- Css modules which prevent clashing of classnames around components therefore avoiding unwanted results

# Installation and Running

git clone or pull the project using your terminal, open the project folder on your local laptop in a code editor and run "npm start" in your editors terminal.
