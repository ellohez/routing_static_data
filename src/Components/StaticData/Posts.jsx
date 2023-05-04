import postData from "./postData.json";

const Posts = () => {
    const printData = () =>
        postData.map((data, index) => {
            const { id, userId, title, body } = data;
            return (
                <tr key={index}>
                    <td>{userId}</td>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{body}</td>
                </tr>
            )
    })

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {printData()}
                </tbody>
            </table>
        </>
    )
}
export default Posts;