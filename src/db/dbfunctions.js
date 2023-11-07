import {doc, collection, getDoc, getDocs, where, query, setDoc, addDoc,deleteDoc,updateDoc, arrayRemove, arrayUnion, QuerySnapshot} from 'firebase/firestore';


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


async function getAllDocuments(db_object){
    const querySnap = await getDocs(collection(db_object,'Entries'))
    const results = []
    querySnap.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const toAdd = {
            ID:doc.id,
            Data:doc.data()
        }
        results.push(toAdd)
      });
    return results
}

async function SearchAllDocuments(db_object,query){
  const q = query(collection(db_object, "Name"), where("Name", ">", query));
  const querySnapshot = await getDocs(q);
  const results = []
  if(querySnapshot){
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const toAdd = {
          ID:doc.id,
          Data:doc.data()
      }
      results.push(toAdd)
    });
  return results
  }
  else{
    console.log('no results')
    return results
  }
}

async function searchUser(UserID,db_object){
  console.log('begin user search')
  console.log(UserID)
  const users = collection(db_object, "Users");
  const q = query(users, where("authID", "==", UserID));
  const querySnapshot = await getDocs(q);
  var toreturn = {}
  querySnapshot.forEach((doc) => {
    const obj_to = doc.data()
    console.log(doc.data())
    // doc.data() is never undefined for query doc snapshots
    toreturn =  obj_to
  });
  return toreturn
}

async function addGGReview(db,id,review){
  const doc_to_update = doc(db,'Entries',id)
  const result = await updateDoc(doc_to_update, {
    GGReviews: arrayUnion(
        {
          Name:review.rev_username,
          Title:review.rev_title,
          Text:review.rev_text,
          Rating:review.rev_rating
        }
      )
   }
  )

}

async function addFavourite(db,locationID,userID){
  const doc_to_update = doc(db,'Users',userID)
  const result = await updateDoc(doc_to_update,{
    Favourites: arrayUnion(locationID)
    }
  )
}

async function removeFavourite(db,locationID,userID){
  const doc_to_update = doc(db,'Users',userID)
  const result = await updateDoc(doc_to_update,{
    Favourites: arrayRemove(locationID)
    }
  )
}

async function addPast(db,locationID,userID){
  const doc_to_update = doc(db,'Users',userID)
  const result = await updateDoc(doc_to_update,{
    Booked: arrayUnion(locationID)
    }
  )
}

async function removePast(db,locationID,userID){
  const doc_to_update = doc(db,'Users',userID)
  const result = await updateDoc(doc_to_update,{
    Booked: arrayRemove(locationID)
    }
  )
}


export {
    getDocument,
    getAllDocuments,
    SearchAllDocuments,
    searchUser,
    addGGReview,
    addFavourite,
    removeFavourite,
    addPast,
    removePast
}

// // ######################################################################
// // ######################################################################
// // ######################################################################
// // the following code is used for users, but can also be used
// // for our Entries
// // #####################################################
// // add new user

// const user = await addDoc(collection(db,'Users'),{
//     authID: '',
//     Name: '',
//     Email: '',
//     Booked: ["",""],
//     Favourites: ["",""]
// }) //this generates a new document with a random ID

// // note you can also use setDoc() to add new documents 
// // as it will create a new doc if one does not exist

// const userInfoToAdd = {
//     authID: '',
//     Name: '',
//     Email: '',
//     Booked: ["",""],
//     Favourites: ["",""]
// }
// await setDoc(doc(db,"user","new-id"))

// // #####################################################
// // change user info

// const userInfoToAmend = {
//     authID: '',
//     Name: '',
//     Email: '',
//     Booked: ["",""],
//     Favourites: ["",""]
// }
// await setDoc(doc(db,'Users','userID'),userInfoToAmend) 

// // #####################################################
// //updating fields
// // to update a nested field (ie a sub-object) use dot notation: name.surname

// const User1 = doc(db,'Users','User1')

// await updateDoc(User1,{
//     name: 'John Doe'
// })

// // adding/removing elements to a array

// await updateDoc*(User1, {
//     Booked: arrayUnion('newBooking') // will add newBooking if it dosent exist in array
// })

// await updateDoc*(User1, {
//     Booked: arrayRemove('oldBooking') //will remove all instances of 'oldBooking'
// })


// // #####################################################

// // delete user data
// await deleteDoc(doc(db,"cities","docID"))



