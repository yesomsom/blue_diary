import styled from "styled-components";

export default function Page({ total, limit, page, setPage}) {
  const numPages = Math.ceil(total/limit);

  return (
    <>
      <Wrap>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>

        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}

        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </Button>
      </Wrap>
    </>
  );
}

const Wrap = styled.nav`
  display: flex;
  gap: 8px;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 8px;
  background: none;
  color: black;
  font-size: 12px;
  width: 25px;
  height: 25px;

  &:hover {
    background: #c31e1efa;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: #4789bd;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #ccc;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;