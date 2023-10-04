import { formatTimeLeft } from '../../utils';

type PlayerControlsListProps = {
  onPlayButtonClick:() => void;
  onFullScrButtonClick:() => void;
  filmName: string;
  isPlaying: boolean;
  progress: number;
  duration: number;
  currentTime: number;
}

function PlayerControlsList({onPlayButtonClick, onFullScrButtonClick, filmName, isPlaying, progress, duration, currentTime}: PlayerControlsListProps): JSX.Element {
  const timeLeft = duration - currentTime;

  return(
    <div className="player__controls">
      <div className="player__controls-row">
        <div className="player__time">
          <progress className="player__progress" value={progress} max="100"></progress>
          <div className="player__toggler" style={{ left: `${progress}%` }}>Toggler</div>
        </div>
        <div className="player__time-value">{formatTimeLeft(timeLeft)}</div>
      </div>

      <div className="player__controls-row">
        <button type="button" className="player__play" onClick={onPlayButtonClick}>
          {
            !isPlaying ?
              <>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </>
              :
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </>
          }
        </button>
        <div className="player__name">{filmName}</div>

        <button type="button" className="player__full-screen" onClick={onFullScrButtonClick}>
          <svg viewBox="0 0 27 27" width="27" height="27">
            <use xlinkHref="#full-screen"></use>
          </svg>
          <span>Full screen</span>
        </button>
      </div>
    </div>
  );
}

export default PlayerControlsList;
