// 날씨별 클릭 횟수 합계를 앞에 0을 붙이지 않고 표시
function Counter({ totalCount }) {
  return (
    <p className="reaction-counter">
      {totalCount} People reacted to mood weather!
    </p>
  );
}

export default Counter;
