import { Center, Container, Heading, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='gradient'>
      <Container maxW='container.lg'>
        <Center>
          <Heading className='heading' size='2xl'>Quiz App</Heading>
        </Center>
      </Container>
      <div className='wrapper'>
        <div className='button-container'>
          <Heading size="xl">Select a Catagory</Heading>
          <br />
          <Center>
            <Link to="/sci">
              <Button
                size='lg'
                border='2px'
                borderColor='green.500'
                className='buttons'
              >
                Science
              </Button>
            </Link>

            <Link to="/cs">
              <Button
                size='lg'
                border='2px'
                borderColor='green.500'
                className='buttons'
              >
                Computer Science
              </Button>
            </Link>
            <Link to="/geo">
              <Button
                size='lg'
                border='2px'
                borderColor='green.500'
                className='buttons'
              >
                Geography
              </Button>
            </Link>
          </Center>
        </div>
      </div>

    </div>
  );
}


export default App;
