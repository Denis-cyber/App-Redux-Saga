import { useSelector } from 'react-redux';
import { selectPeopleDetails } from '../redux/reducers/peopleDetails/selectors';

export default function Details() {
  const details = useSelector(selectPeopleDetails);

  if (details.loading) {
    return <div>Loading ...</div>;
  }

  const { name, birth_year, skin_color, mass, height } = details.data;

  return (
    <div>
      <h1>{name}</h1>
      <h4>{birth_year}</h4>
      <p>SKIN:&nbsp;{skin_color}</p>
      <p>MASS:&nbsp;{mass}</p>
      <p>HEIGHT:&nbsp;{height}</p>
    </div>
  );
}
