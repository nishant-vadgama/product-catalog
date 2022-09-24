import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';

import Products from './Data/ProductList.data';
import ProductList from './Components/ProductList/ProductList.component';
import { Col, Row, Container } from 'reactstrap';
import { NotificationContainer } from 'react-notifications';


function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <Container>
          <Row>
            <Col sm={12}>
              <ProductList products={Products} />
            </Col>
          </Row>
        </Container>
      </div>
      <NotificationContainer />
    </div>
  );
}

export default App;
