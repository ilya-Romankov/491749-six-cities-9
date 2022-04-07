import {useAppSelector} from '../../hooks/useAppSelector';

function ErrorMessage(): JSX.Element | null {
  const {setError} = useAppSelector(({DATA}) => DATA);

  if (setError) {
    return (
      <div
        style={{
          position: 'fixed',
          top: '30px',
          right: '30px',
          padding: '10px',
          backgroundColor: '#d96666',
          color: 'white',
          borderRadius: '5px',
        }}
      >
        {setError}
      </div>
    );
  }

  return null;
}

export default ErrorMessage;
