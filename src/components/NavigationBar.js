import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
    return (
        <Navbar expand="lg" className='bg-body-tertiary'>
            <Container>
                <Navbar.Brand>Dijkstra's Algorithm</Navbar.Brand>
            </Container>
        </Navbar>
    );
}
export default Navigation;