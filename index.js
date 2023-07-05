const core = require("@actions/core");
const github = require("@actions/github");

const target = "something/";

try {
  const diffs = core.getInput("diffs").split("\n");
  console.log("입력된 수정사항 목록: ", diffs);
  console.log(`검사할 경로는 ${target}입니다.`);
  const filtered = diffs.filter((diff) => diff.startsWith(target));
  if (filtered) {
    console.log("대상 경로에 수정사항이 존재합니다.");
    if (filtered.length !== diffs.length) {
      throw new Error("대상 경로 외 수정사항이 존재합니다.");
    }
  }
} catch (error) {
  core.setFailed(error.message);
}
