import Navbar from 'react-bootstrap/Navbar';
const Navigation = () => {
   return (
       <Navbar className='bg-body-tertiary'>
            <Navbar.Brand className='p-2'>
                <h1 className='text-primary fw-bold'>Dijkstra's Algorithm</h1>
            </Navbar.Brand>
       </Navbar>
   );
}

export default Navigation;