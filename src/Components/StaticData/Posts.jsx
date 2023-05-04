import postData from "./postData.json";
import { Table } from 'reactstrap';

const Posts = () => {
    const printData = () =>
        postData.map((data, index) => {
            const { id, userId, title, body } = data;
            return (
                <tr key={index}>
                    <th scope='row'>{userId}</th>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{body}</td>
                </tr>
            )
    })

    return (
        <div style={{padding: "10px"}}>
            <Table bordered size="sm" striped hover>
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
            </Table>
        </div>
    )
}
export default Posts;