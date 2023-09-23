import './App.css';
import court from './images/court.png';
import Card from './components/Card';

const App = () => {

  return (
    <div className="App">
      <div className='Header'>
        <img src={court} alt = "court"/>
        <h1>Top 10 Basketball Players</h1>
      </div>
      <div className = "container">
        <Card name = 'Nikola Jokic' image = 'https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png' position = 'Center' info = 'https://www.nba.com/player/203999/nikola-jokic'/>
        <Card name = 'Giannis Antetokounmpo' image = 'https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png' position = 'Power Forward' info = 'https://www.nba.com/player/203507/giannis-antetokounmpo'/>
        <Card name = 'Luka Doncic' image = 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png' position = 'Small Forward' info = 'https://www.nba.com/player/1629029/luka-doncic'/>
        <Card name = 'Jayson Tatum' image = 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628369.png' position = 'Small Forward' info = 'https://www.nba.com/player/1628369/jayson-tatum'/>
        <Card name = 'Kevin Durant' image = 'https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png' position = 'Small Forward' info = 'https://www.nba.com/player/201142/kevin-durant'/>
        <Card name = 'Stephen Curry' image = 'https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png' position = 'Point Guard' info = 'https://www.nba.com/player/201939/stephen-curry'/>
        <Card name = 'Shai Gilgeous-Alexander' image = 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628983.png' position = 'Shooting Guard' info = 'https://www.nba.com/player/1628983/shai-gilgeous-alexander'/>
        <Card name = 'Damian Lillard' image = 'https://cdn.nba.com/headshots/nba/latest/1040x760/203081.png' position = 'Point Guard' info = 'https://www.nba.com/player/203081/damian-lillard'/>
        <Card name = 'Ja Morant' image = 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629630.png' position = 'Point Guard' info = 'https://www.nba.com/player/1629630/ja-morant'/>
        <Card name = 'LeBron James' image = 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png' position = 'Small Forward' info = 'https://www.nba.com/player/2544/lebron-james'/>
      </div>
    </div>
  )
}

export default App;
