const urls = [
    'https://dummyjson.com/posts',
    'https://this-may-not-exist.com/posts',
    'https://jsonplaceholder.typicode.com/posts'
]

function getFastPosts() {
    const resolveFirst = Promise.race( // should have used any
      urls.map(async url => {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Http Error: ${response.status}`)
        }
        return `--${url}--\n${await response.text()}`;
      })
    );
    return resolveFirst;
}

getFastPosts()
.then((posts) => {
    console.log(posts)
})
.catch((e) => {
    console.error(`An error: ${e}`)
})
