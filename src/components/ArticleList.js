import Article from './Article'

function ArticleList({posts}) {
    const postArray = posts.map((post)=> <Article key={post.id}
    title={post.title}
    date={post.date}
    preview={post.preview}
    minutes={post.minutes}/>)
    return (
        <main>{postArray}</main>
    );
}

export default ArticleList;
