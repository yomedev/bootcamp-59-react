import clsx from 'clsx';

export const Button = ({ type = 'button', className = 'btn-primary', isLoading, disabled, children, ...props }) => {
  return (
    <button type={type} className={clsx('btn', className)} {...props} disabled={isLoading || disabled}>
      {isLoading ? (
        <>
          <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
          <span class="visually-hidden">Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};