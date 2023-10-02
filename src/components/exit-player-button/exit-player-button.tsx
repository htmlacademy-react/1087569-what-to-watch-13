type ExitPlayerButtonProps = {
  onClick:() => void;
}

function ExitPlayerButton({onClick}: ExitPlayerButtonProps): JSX.Element {
  return(
    <button type="button" className="player__exit" onClick={onClick}>Exit</button>
  );
}

export default ExitPlayerButton;
