import {useAppSelector} from '../../hooks/useAppSelector';
import './style.css';

function ErrorMessage(): JSX.Element | null {
  const {setError} = useAppSelector(({DATA}) => DATA);

  if (setError) {
    return (
      <div className='error'>
        {setError}
      </div>
    );
  }

  return null;
}

export default ErrorMessage;
