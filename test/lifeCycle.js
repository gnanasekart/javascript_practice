const postJson = [
'{"postId": 1122, "Qty": 5}',
'{"postId": 1123, "Qty": 6}'
];
/*
const post = [];
//traditional forloop
postJson.forEach(element => {
    post.push(JSON.parse(element));
});

//forEach loop
for(let i=0; i< postJson.length; i++)
{
    post.push(JSON.parse(postJson[i]));
}

//map-option 1
const post = postJson.map(JSON.parse);
*/
//map - option 2
const post = postJson.map(element => JSON.parse(element));

console.log(post);
console.log(post[0].Qty);