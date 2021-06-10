const { runSpecsTests } = require("./support/testsRunner");

runSpecsTests("When before hook fails", {
  specs: "before-failing",
  specsResults: [
    {
      logBefore: true,
      executed: 4,
      passed: 0,
      failed: 0,
      skipped: 4,
    },
    {
      logBefore: false,
      executed: 4,
      passed: 0,
      failed: 0,
      skipped: 4,
    },
    {
      logBefore: false,
      executed: 4,
      passed: 0,
      failed: 0,
      skipped: 4,
    },
  ],
  env: {
    CYPRESS_FAIL_FAST_STRATEGY: "run",
  },
});

runSpecsTests("When before hook fails in spec mode", {
  skipVariants: true,
  specs: "before-failing",
  specsResults: [
    {
      logBefore: true,
      executed: 4,
      passed: 0,
      failed: 0,
      skipped: 4,
    },
    {
      logBefore: true,
      executed: 4,
      passed: 4,
      failed: 0,
      skipped: 0,
    },
    {
      logBefore: true,
      executed: 4,
      passed: 4,
      failed: 0,
      skipped: 0,
    },
  ],
  env: {
    CYPRESS_FAIL_FAST_STRATEGY: "spec",
  },
});
