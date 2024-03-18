export const calculateDaysLeft = (period: string): number | string => {
  // period 값이 제공되지 않았거나, 빈 문자열인 경우의 검증
  if (!period) {
    console.error('Invalid or missing period value');
    return ""; // 혹은 상황에 맞는 다른 값 반환
  }
  const periodParts = period.split(' ~ ');
  const endDateStr = periodParts[1].replace(/[년월일]/g, '/').slice(0, -1);
  const endDate = new Date(endDateStr);

  const today = new Date();
  const timeDiff = endDate.getTime() - today.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return daysLeft < 0? "마감" : `D-${daysLeft}`
}
// 테스트:
// calculateDaysLeft('2023년 1월 1일 ~ 2024년 3월 13일')