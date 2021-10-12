import { useHistory } from 'react-router';

function BoxImgBanner({ imageCoverUrl, bookId }) {
  const history = useHistory();
  return (
    <div className="boxImgBanner" onClick={() => history.push(`/book/${bookId}`)}>
      <img className="imageBanner" src={imageCoverUrl}></img>
    </div>
  );
}

export default BoxImgBanner;
