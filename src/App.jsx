import { useState, useEffect } from 'react'
import TrackList from './components/TrackList'
import './App.css'

function App() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Пробуем загрузить с основного API
        let response = await fetch('https://api.mixcloud.com/search/?q=coding+podcast&amp;type=cloudcast');
        
        // Если API недоступен, используем локальные mock данные
        if (!response.ok) {
          console.warn('API недоступен, используем локальные данные');
          response = await fetch('/songs.json');
        }
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setTracks(data);
      } catch (err) {
        setError(err.message);
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Загрузка...</div>;
  }

  if (error) {
    return <div className="error">Ошибка: {error}</div>;
  }

  return (
    <div className="app">
      <h1>Список треков</h1>
      <TrackList tracks={tracks} />
    </div>
  )
}

export default App
