import commentsData from './commentsData';
import { Table } from 'reactstrap';

const Comments = () => {
    const printComments = () =>
        commentsData.map((data, index) => {
            const { postId, id, name, email, body } = data;
            return (
                <tr key={index}>
                    <th scope='row'>{postId}</th>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{body}</td>
                </tr>
            );
    });

    return (
        <div style={{padding: "10px"}}>
        <Table bordered size="sm" striped hover>
            <thead>
                <tr>
                    <th>Post ID</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {printComments()}
            </tbody>
        </Table>
    </div>
    );
};

export default Comments;
