import TrackItem from './TrackItem'
import './TrackList.css'

function TrackList({ tracks }) {
  return (
    <ul className="track-list">
      {tracks.map((track, index) => (
        <TrackItem 
          key={track.id || index} 
          track={track} 
          number={index + 1} 
        />
      ))}
    </ul>
  )
}

export default TrackList
