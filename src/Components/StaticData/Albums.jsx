import albumData from "./albumData.json";
// import { Table } from 'reactstrap';
import { Table} from 'reactstrap';

const Albums = () => {
    const printAlbums = () =>
        albumData.map((data, index) => {
            const { id, userId, title } = data;
            return (
                <tr key={index}>
                    <th scope='row'>{userId}</th>
                    <td>{id}</td>
                    <td>{title}</td>
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
                </tr>
            </thead>
            <tbody>
                {printAlbums()}
            </tbody>
        </Table>
    </div>
    )
}

export default Albums;