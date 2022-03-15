import { Construct } from "constructs";
import { App, TerraformStack } from 'cdktf';
import { AwsProvider } from '@cdktf/provider-aws';
import { DpS3 } from './src';

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AwsProvider(this, 'aws', {
      region: "eu-central-1",
    });

    new DpS3(this, 'bucket-test', {
      prefix: "test"
    });

  }
}

const app = new App();
new MyStack(app, "examples");
app.synth();
