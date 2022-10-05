// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import { Container } from 'reactstrap';

import Header from './Components/Header.component';
import PageContainer from './Components/Container.component';
import Footer from './Components/Footer.component';
import './Styles/indexCss';

function App() {
  return (
    <div className="root-app">
      <Container>
        <Header />
        <PageContainer />
        <Footer />
        <NotificationContainer />
      </Container>
    </div>
  );
}

export default App;
