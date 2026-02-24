import './TrackItem.css'

function TrackItem({ track, number }) {
  const { name, artists, album, duration_ms, popularity, album_art } = track;
  
  // Конвертация миллисекунд в формат MM:SS
  const formatDuration = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <li className="track-item">
      <div className="track-number">{number}</div>
      <div className="track-main">
        <img
          src={album_art}
          alt={album}
          className="album-art"
          loading="lazy"
        />
        <div className="track-info">
          <div className="track-name">{name}</div>
          <div className="track-artists">{artists}</div>
          <div className="track-album">{album}</div>
        </div>
      </div>
      <div className="track-meta">
        <div className="duration">{formatDuration(duration_ms)}</div>
        <div className="popularity">♪ {popularity}</div>
      </div>
    </li>
  )
}

export default TrackItem
