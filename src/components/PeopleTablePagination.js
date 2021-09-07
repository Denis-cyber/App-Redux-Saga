const LIMIT = 10;

export default function PeopleTablePagination({
  page,
  total,
  onChange = () => {},
}) {
  const totalPages = Math.ceil(total / LIMIT);

  return (
    <div>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (pageIndex) => {
          const isActive = pageIndex === page;
          const action = () => {
            if (pageIndex !== page) {
              onChange(pageIndex);
            }
            return;
          };
          return isActive ? (
            <b key={pageIndex} onClick={action}>
              &nbsp;{pageIndex}
            </b>
          ) : (
            <span
              style={{ cursor: 'pointer' }}
              key={pageIndex}
              onClick={action}
            >
              &nbsp;{pageIndex}
            </span>
          );
        }
      )}
    </div>
  );
}
