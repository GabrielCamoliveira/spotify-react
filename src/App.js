import reset from './reset.css';
import vars from './vars.css';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Playlists from './Playlists/Playlists';
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
      <Sidebar/>
      <Header/>
      <Playlists/>
      <Footer/>
    </div>
  );
}

export default App;
