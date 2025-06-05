// Incremental Static Regeneration (ISR) を利用して、60秒ごとに再生成

export const revalidate = 60;

export default async function DataPage() {
    //外部APIから投稿データを取得（例: jsonplaceholder）
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );

    if (!res.ok) {
        throw new Error("データの取得に失敗しました");
    }

    const posts = await res.json();
    return (
        <div style={{ padding: "2rem" }}>
            <h1>データフェッチングの例</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} style={{ marginBottom: "1rem" }}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

