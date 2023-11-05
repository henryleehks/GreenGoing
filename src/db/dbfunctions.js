import {doc, collection, getDoc, setDoc, addDoc,deleteDoc,updateDoc, arrayRemove, arrayUnion} from 'firebase/firestore';

import {db}from './FireBaseDB.js'


async function getDocument(id,db_object){
    const docRef = doc(db_object,'Entries',id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        
        // console.log("Document data:", docSnap.data());
        return docSnap.data()
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
}

export {
    getDocument
}

// ######################################################################
// ######################################################################
// ######################################################################
// the following code is used for users, but can also be used
// for our Entries
// #####################################################
// add new user

const user = await addDoc(collection(db,'Users'),{
    authID: '',
    Name: '',
    Email: '',
    Booked: ["",""],
    Favourites: ["",""]
}) //this generates a new document with a random ID

// note you can also use setDoc() to add new documents 
// as it will create a new doc if one does not exist

const userInfoToAdd = {
    authID: '',
    Name: '',
    Email: '',
    Booked: ["",""],
    Favourites: ["",""]
}
await setDoc(doc(db,"user","new-id"))

// #####################################################
// change user info

const userInfoToAmend = {
    authID: '',
    Name: '',
    Email: '',
    Booked: ["",""],
    Favourites: ["",""]
}
await setDoc(doc(db,'Users','userID'),userInfoToAmend) 

// #####################################################
//updating fields
// to update a nested field (ie a sub-object) use dot notation: name.surname

const User1 = doc(db,'Users','User1')

await updateDoc(User1,{
    name: 'John Doe'
})

// adding/removing elements to a array

await updateDoc*(User1, {
    Booked: arrayUnion('newBooking') // will add newBooking if it dosent exist in array
})

await updateDoc*(User1, {
    Booked: arrayRemove('oldBooking') //will remove all instances of 'oldBooking'
})


// #####################################################

// delete user data
await deleteDoc(doc(db,"cities","docID"))



