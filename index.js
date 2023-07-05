const core = require("@actions/core");
const github = require("@actions/github");

const target = "something/";

try {
  const diffs = core.getInput("who-to-greet").split("\n");
  console.log("diffs", diffs);
  let matched = 0;
  diffs.forEach((diff) => {
    if (diff.indexOf(diff) !== -1) {
      matched += 1;
    }
  });
  if (matched !== 0 && matched !== diffs.length) {
    throw new Error(
      `There are ${matched} diffs, but only ${diffs.length} are matched.`
    );
  }
} catch (error) {
  core.setFailed(error.message);
}
