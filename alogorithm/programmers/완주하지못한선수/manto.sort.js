const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];

console.log(solution(participant, completion));

function solution(participant, completion) {
  participant.sort((a, b) => (a > b ? 1 : -1));
  completion.sort((a, b) => (a > b ? 1 : -1));

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

// sort
