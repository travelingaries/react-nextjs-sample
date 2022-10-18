import Head from "next/head";
import styles from '../styles/Blog.module.css';
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {
        props: { posts: data }
    }
}

const Blog = ({ posts }) => {
    return (
        <>
            <Head>
                <title>NextJS Practice | Blog</title>
                <meta name="keywords" content="nextjs"/>
            </Head>
            <div>
                <h1>Blog</h1>
                {posts.map(post => (
                    <Link href={'/blog/' + post.id} key={post.id}>
                        <a className={styles.single}>
                            <h3>{ post.title }</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Blog;