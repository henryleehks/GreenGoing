const APIKey = "A9CACCFDA85846E3AB953CE0CC281A40";


//#######################################################
//returns an array of rating objects containing rating, ratingImg, title, text, date
//#######################################################
async function getTAReview(apiKey, locationID) {
  const options = { method: "GET", headers: { accept: "application/json" } };

  const Query =
    "https://api.content.tripadvisor.com/api/v1/location/" +
    locationID +
    "/reviews?key=" +
    apiKey +
    "&language=en";

  let result = await fetch(Query, options);
  let obj = await result.json();

  let toReturn = [];

  for (let i = 0; i < 5; i++) {
    let to_add = {
      rating: obj.data[i].rating,
      ratingImg: obj.data[i].rating_image_url,
      title: obj.data[i].title,
      text: obj.data[i].text,
      date: obj.data[i].travel_date,
    };

    toReturn.push(to_add);
  }
  return toReturn;
}

//#######################################################
// returns a JS object containing name, desc, webUrl, address, rating, 
// ratingImg, numReviews, category
//#######################################################
async function getTADetails(apiKey, locationID) {
  const options = { method: "GET", headers: { accept: "application/json" } };
  const Query =
    "https://api.content.tripadvisor.com/api/v1/location/" +
    locationID +
    "/details?language=en&currency=USD&key=" +
    apiKey;
  let result = await fetch(Query, options);
  let obj = await result.json();

  let toReturn = {
    name: obj.name,
    desc: obj.description,
    webUrl: obj.web_url,
    address: obj.address_obj.address_string,
    rating: obj.rating,
    ratingImg: obj.rating_image_url,
    numReviews: obj.num_reviews,
    category: obj.category.name,
  };

  return toReturn;
}

//#######################################################
// returns an object containing URLs for thumbnail photo and carousel of a 
// list of 5 most recentphoto URLs (must resize photos)
//#######################################################
async function getTAPhotos(apiKey, locationID) {
  const options = { method: "GET", headers: { accept: "application/json" } };
  const Query =
    "https://api.content.tripadvisor.com/api/v1/location/" +
    locationID +
    "/photos?key=" +
    apiKey +
    "&language=en";
  let result = await fetch(Query, options);
  let obj = await result.json();

  let toReturn = {
    thumbnail: obj.data[0].images.original.url,
    carousel: [
      obj.data[0].images.original.url,
      obj.data[1].images.original.url,
      obj.data[2].images.original.url,
      obj.data[3].images.original.url,
      obj.data[4].images.original.url,
    ],
  };

  return toReturn;
}

//#######################################################
//whenever calling any of these functions use the following syntax
// object = await getPhotos(apiKey, locationID) to ensure that async promises
// are fulfilled before continuing
//#######################################################
export default {
  getTAReview,
  getTADetails,
  getTAPhotos,
  APIKey
};
