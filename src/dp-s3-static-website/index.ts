import { DataAwsDefaultTags } from "@cdktf/provider-aws";
import { S3Bucket } from "@cdktf/provider-aws/lib/s3";
import { Construct } from "constructs";
import Utils from "../lib/utils";

export interface IDpS3StaticWebsiteConfig {
  prefix: string;
}

export class DpS3StaticWebsite extends S3Bucket {
  /**
   * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket aws_s3_bucket} Based on the AXA Group Policies
   *
   * @param scope The scope in which to define this construct
   * @param name The name, used in the resourceNaming method to retrieve the right nomenclature.
   * @param config IDpS3Config = {}
   */
  constructor(
    scope: Construct,
    name: string,
    config: IDpS3StaticWebsiteConfig
  ) {
    let defaultTags = new DataAwsDefaultTags(scope, "default_tags");
    let computedName = Utils.resourceNaming(name, defaultTags.tags);
    super(scope, computedName, {
      bucketPrefix: config.prefix,
    });
  }
}
