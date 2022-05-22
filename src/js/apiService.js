const apiService = async(query, page) => {
const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=27500095-0ff642ee8d6c39f05f430f005`;
   const response = await (fetch(URL));
   const data =  await response.json();
   const images = await data.hits;
   return images;
};




// const apiService = (query, page) => {
//    const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=27500095-0ff642ee8d6c39f05f430f005`;

//     return fetch(URL)
//        .then (response => response.json())
//         .then (data =>data.hits)
// };
export default apiService;
