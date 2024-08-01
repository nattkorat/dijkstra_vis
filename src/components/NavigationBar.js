import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
export default () => {
    return (
        <Navbar expand="lg" className='bg-body-tertiary'>
            <Container>
                <Navbar.Brand>Dijkstra's Algorithm</Navbar.Brand>
            </Container>
        </Navbar>
    );
}