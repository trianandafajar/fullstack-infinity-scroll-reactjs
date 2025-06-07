import { Suspense, lazy } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const PersonalList = lazy(() => import('./components/PersonalList.jsx'));

function App() {
  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Personal Data List</h1>
      <Suspense 
        fallback={
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        }
      >
        <PersonalList />
      </Suspense>
    </Container>
  );
}

export default App;
