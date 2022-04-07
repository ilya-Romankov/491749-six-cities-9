import FavoriteList from '../favorite-list/favorite-list';

function FavoriteContent(): JSX.Element {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <FavoriteList />
    </section>
  );
}
export default FavoriteContent;
