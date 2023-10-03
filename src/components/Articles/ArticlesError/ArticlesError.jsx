import image from './error.jfif';

export const ArticlesError = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <img src={image} alt="not found" style={{ width: 300 }} />
      <p className="my-3">Something went wrong!</p>
    </div>
  );
};