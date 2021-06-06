const arr = [10, 12, [], {}, "tgs", 10.25, true];

const result = arr.find(element => {
   // console.log(element);
    return typeof element === "string";
});
//console.log(result);

//-------------------------------------

//challenge 1

const posts = [
    {postId: 1122, Qty: 5},
    {postid: 1123, Qty: 9},
    {postid: 2233, Qty: 12}
];

const findPost = (postId, posts) => 
posts.find(ele => ele.postId  === postId);


console.log(findPost(1122, posts));
console.log(findPost(1322, posts));