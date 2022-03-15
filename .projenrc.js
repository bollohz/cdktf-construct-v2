const { cdktf } = require("projen");
const { NpmAccess } = require("projen/lib/javascript");
const versionFile = require("./version.json");

const project = new cdktf.ConstructLibraryCdktf({
  author: "federico-bollotta",
  authorAddress: "federico.bollotta@axa.it",
  cdktfVersion: "^0.9.4",
  defaultReleaseBranch: "master",
  name: "dp-cdktf-constructs",
  repositoryUrl: "https://github.axa.com/datalab-italy/dp-cdktf-constructs.git",
  description:
    "This project is the CDKTF Construct Library for all the DP MODULES/BLUEPRINT",
  jsiiReleaseVersion: "latest",
  publishDryRun: true,
  deps: ["constructs", "@cdktf/provider-aws"],
  devDeps: ["ts-node", "cdktf-cli", "@cdktf/provider-aws", "constructs"],
  peerDeps: ["cdktf", "constructs", "@cdktf/provider-aws"],
  packageName: "@axa-datalab-it/dp-cdktf-constructs",
  prettier: true,
  gitignore: ["./idea"],
  jest: true,
  license: "MIT",
  copyrightOwner: "Federico Bollotta",
  docgen: true,
  eslint: true,
  readme: {
    contents: "New content",
    filename: "README.md",
  },
  releaseToNpm: true,
  npmAccess: NpmAccess.RESTRICTED,
  publishToPypi: {
    distName: "dp-cdktf-constructs",
    module: "dp-cdktf-constructs",
  },
});

project.package.addVersion(versionFile.version);
project.setScript("package:modules", "echo hcl modules..");
project.synth();
