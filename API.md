# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DpS3 <a name="DpS3" id="@axa-datalab-it/dp-cdktf-constructs.DpS3"></a>

#### Initializers <a name="Initializers" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.Initializer"></a>

```typescript
import { DpS3 } from '@axa-datalab-it/dp-cdktf-constructs'

new DpS3(scope: Construct, name: string, config: IDpS3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.Initializer.parameter.name">name</a></code> | <code>string</code> | The name, used in the resourceNaming method to retrieve the right nomenclature. |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.Initializer.parameter.config">config</a></code> | <code><a href="#@axa-datalab-it/dp-cdktf-constructs.IDpS3Config">IDpS3Config</a></code> | IDpS3Config = {}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `name`<sup>Required</sup> <a name="name" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.Initializer.parameter.name"></a>

- *Type:* string

The name, used in the resourceNaming method to retrieve the right nomenclature.

---

##### `config`<sup>Required</sup> <a name="config" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.Initializer.parameter.config"></a>

- *Type:* <a href="#@axa-datalab-it/dp-cdktf-constructs.IDpS3Config">IDpS3Config</a>

IDpS3Config = {}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.putObjectLockConfiguration">putObjectLockConfiguration</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.putReplicationConfiguration">putReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.putServerSideEncryptionConfiguration">putServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.putVersioning">putVersioning</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.putWebsite">putWebsite</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.resetAccelerationStatus">resetAccelerationStatus</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.resetAcl">resetAcl</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.resetBucketPrefix">resetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.resetCorsRule">resetCorsRule</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.resetGrant">resetGrant</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.resetHostedZoneId">resetHostedZoneId</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.resetLifecycleRule">resetLifecycleRule</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.resetLogging">resetLogging</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.resetObjectLockConfiguration">resetObjectLockConfiguration</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.resetReplicationConfiguration">resetReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.resetRequestPayer">resetRequestPayer</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.resetServerSideEncryptionConfiguration">resetServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.resetVersioning">resetVersioning</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.resetWebsite">resetWebsite</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.resetWebsiteDomain">resetWebsiteDomain</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.resetWebsiteEndpoint">resetWebsiteEndpoint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putObjectLockConfiguration` <a name="putObjectLockConfiguration" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.putObjectLockConfiguration"></a>

```typescript
public putObjectLockConfiguration(value: S3BucketObjectLockConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.putObjectLockConfiguration.parameter.value"></a>

- *Type:* @cdktf/provider-aws.s3.S3BucketObjectLockConfiguration

---

##### `putReplicationConfiguration` <a name="putReplicationConfiguration" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.putReplicationConfiguration"></a>

```typescript
public putReplicationConfiguration(value: S3BucketReplicationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.putReplicationConfiguration.parameter.value"></a>

- *Type:* @cdktf/provider-aws.s3.S3BucketReplicationConfiguration

---

##### `putServerSideEncryptionConfiguration` <a name="putServerSideEncryptionConfiguration" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.putServerSideEncryptionConfiguration"></a>

```typescript
public putServerSideEncryptionConfiguration(value: S3BucketServerSideEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.putServerSideEncryptionConfiguration.parameter.value"></a>

- *Type:* @cdktf/provider-aws.s3.S3BucketServerSideEncryptionConfiguration

---

##### `putVersioning` <a name="putVersioning" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.putVersioning"></a>

```typescript
public putVersioning(value: S3BucketVersioning): void
```

###### `value`<sup>Required</sup> <a name="value" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.putVersioning.parameter.value"></a>

- *Type:* @cdktf/provider-aws.s3.S3BucketVersioning

---

##### `putWebsite` <a name="putWebsite" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.putWebsite"></a>

```typescript
public putWebsite(value: S3BucketWebsite): void
```

###### `value`<sup>Required</sup> <a name="value" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.putWebsite.parameter.value"></a>

- *Type:* @cdktf/provider-aws.s3.S3BucketWebsite

---

##### `resetAccelerationStatus` <a name="resetAccelerationStatus" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.resetAccelerationStatus"></a>

```typescript
public resetAccelerationStatus(): void
```

##### `resetAcl` <a name="resetAcl" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.resetAcl"></a>

```typescript
public resetAcl(): void
```

##### `resetBucket` <a name="resetBucket" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetBucketPrefix` <a name="resetBucketPrefix" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.resetBucketPrefix"></a>

```typescript
public resetBucketPrefix(): void
```

##### `resetCorsRule` <a name="resetCorsRule" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.resetCorsRule"></a>

```typescript
public resetCorsRule(): void
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.resetForceDestroy"></a>

```typescript
public resetForceDestroy(): void
```

##### `resetGrant` <a name="resetGrant" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.resetGrant"></a>

```typescript
public resetGrant(): void
```

##### `resetHostedZoneId` <a name="resetHostedZoneId" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.resetHostedZoneId"></a>

```typescript
public resetHostedZoneId(): void
```

##### `resetLifecycleRule` <a name="resetLifecycleRule" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.resetLifecycleRule"></a>

```typescript
public resetLifecycleRule(): void
```

##### `resetLogging` <a name="resetLogging" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.resetLogging"></a>

```typescript
public resetLogging(): void
```

##### `resetObjectLockConfiguration` <a name="resetObjectLockConfiguration" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.resetObjectLockConfiguration"></a>

```typescript
public resetObjectLockConfiguration(): void
```

##### `resetPolicy` <a name="resetPolicy" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.resetPolicy"></a>

```typescript
public resetPolicy(): void
```

##### `resetReplicationConfiguration` <a name="resetReplicationConfiguration" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.resetReplicationConfiguration"></a>

```typescript
public resetReplicationConfiguration(): void
```

##### `resetRequestPayer` <a name="resetRequestPayer" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.resetRequestPayer"></a>

```typescript
public resetRequestPayer(): void
```

##### `resetServerSideEncryptionConfiguration` <a name="resetServerSideEncryptionConfiguration" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.resetServerSideEncryptionConfiguration"></a>

```typescript
public resetServerSideEncryptionConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetVersioning` <a name="resetVersioning" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.resetVersioning"></a>

```typescript
public resetVersioning(): void
```

##### `resetWebsite` <a name="resetWebsite" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.resetWebsite"></a>

```typescript
public resetWebsite(): void
```

##### `resetWebsiteDomain` <a name="resetWebsiteDomain" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.resetWebsiteDomain"></a>

```typescript
public resetWebsiteDomain(): void
```

##### `resetWebsiteEndpoint` <a name="resetWebsiteEndpoint" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.resetWebsiteEndpoint"></a>

```typescript
public resetWebsiteEndpoint(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.isConstruct"></a>

```typescript
import { DpS3 } from '@axa-datalab-it/dp-cdktf-constructs'

DpS3.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.bucketDomainName">bucketDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.bucketRegionalDomainName">bucketRegionalDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.objectLockConfiguration">objectLockConfiguration</a></code> | <code>@cdktf/provider-aws.s3.S3BucketObjectLockConfigurationOutputReference</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.replicationConfiguration">replicationConfiguration</a></code> | <code>@cdktf/provider-aws.s3.S3BucketReplicationConfigurationOutputReference</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.serverSideEncryptionConfiguration">serverSideEncryptionConfiguration</a></code> | <code>@cdktf/provider-aws.s3.S3BucketServerSideEncryptionConfigurationOutputReference</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.versioning">versioning</a></code> | <code>@cdktf/provider-aws.s3.S3BucketVersioningOutputReference</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.website">website</a></code> | <code>@cdktf/provider-aws.s3.S3BucketWebsiteOutputReference</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.accelerationStatusInput">accelerationStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.aclInput">aclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.bucketPrefixInput">bucketPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.corsRuleInput">corsRuleInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-aws.s3.S3BucketCorsRule[]</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.forceDestroyInput">forceDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.grantInput">grantInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-aws.s3.S3BucketGrant[]</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.hostedZoneIdInput">hostedZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.lifecycleRuleInput">lifecycleRuleInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-aws.s3.S3BucketLifecycleRule[]</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.loggingInput">loggingInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-aws.s3.S3BucketLogging[]</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.objectLockConfigurationInput">objectLockConfigurationInput</a></code> | <code>@cdktf/provider-aws.s3.S3BucketObjectLockConfiguration</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.replicationConfigurationInput">replicationConfigurationInput</a></code> | <code>@cdktf/provider-aws.s3.S3BucketReplicationConfiguration</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.requestPayerInput">requestPayerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.serverSideEncryptionConfigurationInput">serverSideEncryptionConfigurationInput</a></code> | <code>@cdktf/provider-aws.s3.S3BucketServerSideEncryptionConfiguration</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.versioningInput">versioningInput</a></code> | <code>@cdktf/provider-aws.s3.S3BucketVersioning</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.websiteDomainInput">websiteDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.websiteEndpointInput">websiteEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.websiteInput">websiteInput</a></code> | <code>@cdktf/provider-aws.s3.S3BucketWebsite</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.accelerationStatus">accelerationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.acl">acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.corsRule">corsRule</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-aws.s3.S3BucketCorsRule[]</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.grant">grant</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-aws.s3.S3BucketGrant[]</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.lifecycleRule">lifecycleRule</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-aws.s3.S3BucketLifecycleRule[]</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.logging">logging</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-aws.s3.S3BucketLogging[]</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.requestPayer">requestPayer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.websiteDomain">websiteDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.websiteEndpoint">websiteEndpoint</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `bucketDomainName`<sup>Required</sup> <a name="bucketDomainName" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.bucketDomainName"></a>

```typescript
public readonly bucketDomainName: string;
```

- *Type:* string

---

##### `bucketRegionalDomainName`<sup>Required</sup> <a name="bucketRegionalDomainName" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.bucketRegionalDomainName"></a>

```typescript
public readonly bucketRegionalDomainName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `objectLockConfiguration`<sup>Required</sup> <a name="objectLockConfiguration" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.objectLockConfiguration"></a>

```typescript
public readonly objectLockConfiguration: S3BucketObjectLockConfigurationOutputReference;
```

- *Type:* @cdktf/provider-aws.s3.S3BucketObjectLockConfigurationOutputReference

---

##### `region`<sup>Required</sup> <a name="region" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `replicationConfiguration`<sup>Required</sup> <a name="replicationConfiguration" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.replicationConfiguration"></a>

```typescript
public readonly replicationConfiguration: S3BucketReplicationConfigurationOutputReference;
```

- *Type:* @cdktf/provider-aws.s3.S3BucketReplicationConfigurationOutputReference

---

##### `serverSideEncryptionConfiguration`<sup>Required</sup> <a name="serverSideEncryptionConfiguration" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.serverSideEncryptionConfiguration"></a>

```typescript
public readonly serverSideEncryptionConfiguration: S3BucketServerSideEncryptionConfigurationOutputReference;
```

- *Type:* @cdktf/provider-aws.s3.S3BucketServerSideEncryptionConfigurationOutputReference

---

##### `versioning`<sup>Required</sup> <a name="versioning" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.versioning"></a>

```typescript
public readonly versioning: S3BucketVersioningOutputReference;
```

- *Type:* @cdktf/provider-aws.s3.S3BucketVersioningOutputReference

---

##### `website`<sup>Required</sup> <a name="website" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.website"></a>

```typescript
public readonly website: S3BucketWebsiteOutputReference;
```

- *Type:* @cdktf/provider-aws.s3.S3BucketWebsiteOutputReference

---

##### `accelerationStatusInput`<sup>Optional</sup> <a name="accelerationStatusInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.accelerationStatusInput"></a>

```typescript
public readonly accelerationStatusInput: string;
```

- *Type:* string

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.aclInput"></a>

```typescript
public readonly aclInput: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `bucketPrefixInput`<sup>Optional</sup> <a name="bucketPrefixInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.bucketPrefixInput"></a>

```typescript
public readonly bucketPrefixInput: string;
```

- *Type:* string

---

##### `corsRuleInput`<sup>Optional</sup> <a name="corsRuleInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.corsRuleInput"></a>

```typescript
public readonly corsRuleInput: IResolvable | S3BucketCorsRule[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.s3.S3BucketCorsRule[]

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.forceDestroyInput"></a>

```typescript
public readonly forceDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `grantInput`<sup>Optional</sup> <a name="grantInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.grantInput"></a>

```typescript
public readonly grantInput: IResolvable | S3BucketGrant[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.s3.S3BucketGrant[]

---

##### `hostedZoneIdInput`<sup>Optional</sup> <a name="hostedZoneIdInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.hostedZoneIdInput"></a>

```typescript
public readonly hostedZoneIdInput: string;
```

- *Type:* string

---

##### `lifecycleRuleInput`<sup>Optional</sup> <a name="lifecycleRuleInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.lifecycleRuleInput"></a>

```typescript
public readonly lifecycleRuleInput: IResolvable | S3BucketLifecycleRule[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.s3.S3BucketLifecycleRule[]

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.loggingInput"></a>

```typescript
public readonly loggingInput: IResolvable | S3BucketLogging[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.s3.S3BucketLogging[]

---

##### `objectLockConfigurationInput`<sup>Optional</sup> <a name="objectLockConfigurationInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.objectLockConfigurationInput"></a>

```typescript
public readonly objectLockConfigurationInput: S3BucketObjectLockConfiguration;
```

- *Type:* @cdktf/provider-aws.s3.S3BucketObjectLockConfiguration

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `replicationConfigurationInput`<sup>Optional</sup> <a name="replicationConfigurationInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.replicationConfigurationInput"></a>

```typescript
public readonly replicationConfigurationInput: S3BucketReplicationConfiguration;
```

- *Type:* @cdktf/provider-aws.s3.S3BucketReplicationConfiguration

---

##### `requestPayerInput`<sup>Optional</sup> <a name="requestPayerInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.requestPayerInput"></a>

```typescript
public readonly requestPayerInput: string;
```

- *Type:* string

---

##### `serverSideEncryptionConfigurationInput`<sup>Optional</sup> <a name="serverSideEncryptionConfigurationInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.serverSideEncryptionConfigurationInput"></a>

```typescript
public readonly serverSideEncryptionConfigurationInput: S3BucketServerSideEncryptionConfiguration;
```

- *Type:* @cdktf/provider-aws.s3.S3BucketServerSideEncryptionConfiguration

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `versioningInput`<sup>Optional</sup> <a name="versioningInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.versioningInput"></a>

```typescript
public readonly versioningInput: S3BucketVersioning;
```

- *Type:* @cdktf/provider-aws.s3.S3BucketVersioning

---

##### `websiteDomainInput`<sup>Optional</sup> <a name="websiteDomainInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.websiteDomainInput"></a>

```typescript
public readonly websiteDomainInput: string;
```

- *Type:* string

---

##### `websiteEndpointInput`<sup>Optional</sup> <a name="websiteEndpointInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.websiteEndpointInput"></a>

```typescript
public readonly websiteEndpointInput: string;
```

- *Type:* string

---

##### `websiteInput`<sup>Optional</sup> <a name="websiteInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.websiteInput"></a>

```typescript
public readonly websiteInput: S3BucketWebsite;
```

- *Type:* @cdktf/provider-aws.s3.S3BucketWebsite

---

##### `accelerationStatus`<sup>Required</sup> <a name="accelerationStatus" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.accelerationStatus"></a>

```typescript
public readonly accelerationStatus: string;
```

- *Type:* string

---

##### `acl`<sup>Required</sup> <a name="acl" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

---

##### `corsRule`<sup>Required</sup> <a name="corsRule" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.corsRule"></a>

```typescript
public readonly corsRule: IResolvable | S3BucketCorsRule[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.s3.S3BucketCorsRule[]

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `grant`<sup>Required</sup> <a name="grant" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.grant"></a>

```typescript
public readonly grant: IResolvable | S3BucketGrant[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.s3.S3BucketGrant[]

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `lifecycleRule`<sup>Required</sup> <a name="lifecycleRule" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.lifecycleRule"></a>

```typescript
public readonly lifecycleRule: IResolvable | S3BucketLifecycleRule[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.s3.S3BucketLifecycleRule[]

---

##### `logging`<sup>Required</sup> <a name="logging" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.logging"></a>

```typescript
public readonly logging: IResolvable | S3BucketLogging[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.s3.S3BucketLogging[]

---

##### `policy`<sup>Required</sup> <a name="policy" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `requestPayer`<sup>Required</sup> <a name="requestPayer" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.requestPayer"></a>

```typescript
public readonly requestPayer: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `websiteDomain`<sup>Required</sup> <a name="websiteDomain" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.websiteDomain"></a>

```typescript
public readonly websiteDomain: string;
```

- *Type:* string

---

##### `websiteEndpoint`<sup>Required</sup> <a name="websiteEndpoint" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.websiteEndpoint"></a>

```typescript
public readonly websiteEndpoint: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@axa-datalab-it/dp-cdktf-constructs.DpS3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### DpS3StaticWebsite <a name="DpS3StaticWebsite" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite"></a>

#### Initializers <a name="Initializers" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.Initializer"></a>

```typescript
import { DpS3StaticWebsite } from '@axa-datalab-it/dp-cdktf-constructs'

new DpS3StaticWebsite(scope: Construct, name: string, config: IDpS3StaticWebsiteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.Initializer.parameter.name">name</a></code> | <code>string</code> | The name, used in the resourceNaming method to retrieve the right nomenclature. |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.Initializer.parameter.config">config</a></code> | <code><a href="#@axa-datalab-it/dp-cdktf-constructs.IDpS3StaticWebsiteConfig">IDpS3StaticWebsiteConfig</a></code> | IDpS3Config = {}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `name`<sup>Required</sup> <a name="name" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.Initializer.parameter.name"></a>

- *Type:* string

The name, used in the resourceNaming method to retrieve the right nomenclature.

---

##### `config`<sup>Required</sup> <a name="config" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.Initializer.parameter.config"></a>

- *Type:* <a href="#@axa-datalab-it/dp-cdktf-constructs.IDpS3StaticWebsiteConfig">IDpS3StaticWebsiteConfig</a>

IDpS3Config = {}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.putObjectLockConfiguration">putObjectLockConfiguration</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.putReplicationConfiguration">putReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.putServerSideEncryptionConfiguration">putServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.putVersioning">putVersioning</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.putWebsite">putWebsite</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetAccelerationStatus">resetAccelerationStatus</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetAcl">resetAcl</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetBucketPrefix">resetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetCorsRule">resetCorsRule</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetGrant">resetGrant</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetHostedZoneId">resetHostedZoneId</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetLifecycleRule">resetLifecycleRule</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetLogging">resetLogging</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetObjectLockConfiguration">resetObjectLockConfiguration</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetReplicationConfiguration">resetReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetRequestPayer">resetRequestPayer</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetServerSideEncryptionConfiguration">resetServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetVersioning">resetVersioning</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetWebsite">resetWebsite</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetWebsiteDomain">resetWebsiteDomain</a></code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetWebsiteEndpoint">resetWebsiteEndpoint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putObjectLockConfiguration` <a name="putObjectLockConfiguration" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.putObjectLockConfiguration"></a>

```typescript
public putObjectLockConfiguration(value: S3BucketObjectLockConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.putObjectLockConfiguration.parameter.value"></a>

- *Type:* @cdktf/provider-aws.s3.S3BucketObjectLockConfiguration

---

##### `putReplicationConfiguration` <a name="putReplicationConfiguration" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.putReplicationConfiguration"></a>

```typescript
public putReplicationConfiguration(value: S3BucketReplicationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.putReplicationConfiguration.parameter.value"></a>

- *Type:* @cdktf/provider-aws.s3.S3BucketReplicationConfiguration

---

##### `putServerSideEncryptionConfiguration` <a name="putServerSideEncryptionConfiguration" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.putServerSideEncryptionConfiguration"></a>

```typescript
public putServerSideEncryptionConfiguration(value: S3BucketServerSideEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.putServerSideEncryptionConfiguration.parameter.value"></a>

- *Type:* @cdktf/provider-aws.s3.S3BucketServerSideEncryptionConfiguration

---

##### `putVersioning` <a name="putVersioning" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.putVersioning"></a>

```typescript
public putVersioning(value: S3BucketVersioning): void
```

###### `value`<sup>Required</sup> <a name="value" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.putVersioning.parameter.value"></a>

- *Type:* @cdktf/provider-aws.s3.S3BucketVersioning

---

##### `putWebsite` <a name="putWebsite" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.putWebsite"></a>

```typescript
public putWebsite(value: S3BucketWebsite): void
```

###### `value`<sup>Required</sup> <a name="value" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.putWebsite.parameter.value"></a>

- *Type:* @cdktf/provider-aws.s3.S3BucketWebsite

---

##### `resetAccelerationStatus` <a name="resetAccelerationStatus" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetAccelerationStatus"></a>

```typescript
public resetAccelerationStatus(): void
```

##### `resetAcl` <a name="resetAcl" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetAcl"></a>

```typescript
public resetAcl(): void
```

##### `resetBucket` <a name="resetBucket" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetBucketPrefix` <a name="resetBucketPrefix" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetBucketPrefix"></a>

```typescript
public resetBucketPrefix(): void
```

##### `resetCorsRule` <a name="resetCorsRule" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetCorsRule"></a>

```typescript
public resetCorsRule(): void
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetForceDestroy"></a>

```typescript
public resetForceDestroy(): void
```

##### `resetGrant` <a name="resetGrant" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetGrant"></a>

```typescript
public resetGrant(): void
```

##### `resetHostedZoneId` <a name="resetHostedZoneId" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetHostedZoneId"></a>

```typescript
public resetHostedZoneId(): void
```

##### `resetLifecycleRule` <a name="resetLifecycleRule" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetLifecycleRule"></a>

```typescript
public resetLifecycleRule(): void
```

##### `resetLogging` <a name="resetLogging" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetLogging"></a>

```typescript
public resetLogging(): void
```

##### `resetObjectLockConfiguration` <a name="resetObjectLockConfiguration" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetObjectLockConfiguration"></a>

```typescript
public resetObjectLockConfiguration(): void
```

##### `resetPolicy` <a name="resetPolicy" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetPolicy"></a>

```typescript
public resetPolicy(): void
```

##### `resetReplicationConfiguration` <a name="resetReplicationConfiguration" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetReplicationConfiguration"></a>

```typescript
public resetReplicationConfiguration(): void
```

##### `resetRequestPayer` <a name="resetRequestPayer" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetRequestPayer"></a>

```typescript
public resetRequestPayer(): void
```

##### `resetServerSideEncryptionConfiguration` <a name="resetServerSideEncryptionConfiguration" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetServerSideEncryptionConfiguration"></a>

```typescript
public resetServerSideEncryptionConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetVersioning` <a name="resetVersioning" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetVersioning"></a>

```typescript
public resetVersioning(): void
```

##### `resetWebsite` <a name="resetWebsite" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetWebsite"></a>

```typescript
public resetWebsite(): void
```

##### `resetWebsiteDomain` <a name="resetWebsiteDomain" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetWebsiteDomain"></a>

```typescript
public resetWebsiteDomain(): void
```

##### `resetWebsiteEndpoint` <a name="resetWebsiteEndpoint" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.resetWebsiteEndpoint"></a>

```typescript
public resetWebsiteEndpoint(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.isConstruct"></a>

```typescript
import { DpS3StaticWebsite } from '@axa-datalab-it/dp-cdktf-constructs'

DpS3StaticWebsite.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.bucketDomainName">bucketDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.bucketRegionalDomainName">bucketRegionalDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.objectLockConfiguration">objectLockConfiguration</a></code> | <code>@cdktf/provider-aws.s3.S3BucketObjectLockConfigurationOutputReference</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.replicationConfiguration">replicationConfiguration</a></code> | <code>@cdktf/provider-aws.s3.S3BucketReplicationConfigurationOutputReference</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.serverSideEncryptionConfiguration">serverSideEncryptionConfiguration</a></code> | <code>@cdktf/provider-aws.s3.S3BucketServerSideEncryptionConfigurationOutputReference</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.versioning">versioning</a></code> | <code>@cdktf/provider-aws.s3.S3BucketVersioningOutputReference</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.website">website</a></code> | <code>@cdktf/provider-aws.s3.S3BucketWebsiteOutputReference</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.accelerationStatusInput">accelerationStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.aclInput">aclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.bucketPrefixInput">bucketPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.corsRuleInput">corsRuleInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-aws.s3.S3BucketCorsRule[]</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.forceDestroyInput">forceDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.grantInput">grantInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-aws.s3.S3BucketGrant[]</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.hostedZoneIdInput">hostedZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.lifecycleRuleInput">lifecycleRuleInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-aws.s3.S3BucketLifecycleRule[]</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.loggingInput">loggingInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-aws.s3.S3BucketLogging[]</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.objectLockConfigurationInput">objectLockConfigurationInput</a></code> | <code>@cdktf/provider-aws.s3.S3BucketObjectLockConfiguration</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.replicationConfigurationInput">replicationConfigurationInput</a></code> | <code>@cdktf/provider-aws.s3.S3BucketReplicationConfiguration</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.requestPayerInput">requestPayerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.serverSideEncryptionConfigurationInput">serverSideEncryptionConfigurationInput</a></code> | <code>@cdktf/provider-aws.s3.S3BucketServerSideEncryptionConfiguration</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.versioningInput">versioningInput</a></code> | <code>@cdktf/provider-aws.s3.S3BucketVersioning</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.websiteDomainInput">websiteDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.websiteEndpointInput">websiteEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.websiteInput">websiteInput</a></code> | <code>@cdktf/provider-aws.s3.S3BucketWebsite</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.accelerationStatus">accelerationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.acl">acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.corsRule">corsRule</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-aws.s3.S3BucketCorsRule[]</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.grant">grant</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-aws.s3.S3BucketGrant[]</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.lifecycleRule">lifecycleRule</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-aws.s3.S3BucketLifecycleRule[]</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.logging">logging</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-aws.s3.S3BucketLogging[]</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.requestPayer">requestPayer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.websiteDomain">websiteDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.websiteEndpoint">websiteEndpoint</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `bucketDomainName`<sup>Required</sup> <a name="bucketDomainName" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.bucketDomainName"></a>

```typescript
public readonly bucketDomainName: string;
```

- *Type:* string

---

##### `bucketRegionalDomainName`<sup>Required</sup> <a name="bucketRegionalDomainName" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.bucketRegionalDomainName"></a>

```typescript
public readonly bucketRegionalDomainName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `objectLockConfiguration`<sup>Required</sup> <a name="objectLockConfiguration" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.objectLockConfiguration"></a>

```typescript
public readonly objectLockConfiguration: S3BucketObjectLockConfigurationOutputReference;
```

- *Type:* @cdktf/provider-aws.s3.S3BucketObjectLockConfigurationOutputReference

---

##### `region`<sup>Required</sup> <a name="region" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `replicationConfiguration`<sup>Required</sup> <a name="replicationConfiguration" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.replicationConfiguration"></a>

```typescript
public readonly replicationConfiguration: S3BucketReplicationConfigurationOutputReference;
```

- *Type:* @cdktf/provider-aws.s3.S3BucketReplicationConfigurationOutputReference

---

##### `serverSideEncryptionConfiguration`<sup>Required</sup> <a name="serverSideEncryptionConfiguration" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.serverSideEncryptionConfiguration"></a>

```typescript
public readonly serverSideEncryptionConfiguration: S3BucketServerSideEncryptionConfigurationOutputReference;
```

- *Type:* @cdktf/provider-aws.s3.S3BucketServerSideEncryptionConfigurationOutputReference

---

##### `versioning`<sup>Required</sup> <a name="versioning" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.versioning"></a>

```typescript
public readonly versioning: S3BucketVersioningOutputReference;
```

- *Type:* @cdktf/provider-aws.s3.S3BucketVersioningOutputReference

---

##### `website`<sup>Required</sup> <a name="website" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.website"></a>

```typescript
public readonly website: S3BucketWebsiteOutputReference;
```

- *Type:* @cdktf/provider-aws.s3.S3BucketWebsiteOutputReference

---

##### `accelerationStatusInput`<sup>Optional</sup> <a name="accelerationStatusInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.accelerationStatusInput"></a>

```typescript
public readonly accelerationStatusInput: string;
```

- *Type:* string

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.aclInput"></a>

```typescript
public readonly aclInput: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `bucketPrefixInput`<sup>Optional</sup> <a name="bucketPrefixInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.bucketPrefixInput"></a>

```typescript
public readonly bucketPrefixInput: string;
```

- *Type:* string

---

##### `corsRuleInput`<sup>Optional</sup> <a name="corsRuleInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.corsRuleInput"></a>

```typescript
public readonly corsRuleInput: IResolvable | S3BucketCorsRule[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.s3.S3BucketCorsRule[]

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.forceDestroyInput"></a>

```typescript
public readonly forceDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `grantInput`<sup>Optional</sup> <a name="grantInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.grantInput"></a>

```typescript
public readonly grantInput: IResolvable | S3BucketGrant[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.s3.S3BucketGrant[]

---

##### `hostedZoneIdInput`<sup>Optional</sup> <a name="hostedZoneIdInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.hostedZoneIdInput"></a>

```typescript
public readonly hostedZoneIdInput: string;
```

- *Type:* string

---

##### `lifecycleRuleInput`<sup>Optional</sup> <a name="lifecycleRuleInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.lifecycleRuleInput"></a>

```typescript
public readonly lifecycleRuleInput: IResolvable | S3BucketLifecycleRule[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.s3.S3BucketLifecycleRule[]

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.loggingInput"></a>

```typescript
public readonly loggingInput: IResolvable | S3BucketLogging[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.s3.S3BucketLogging[]

---

##### `objectLockConfigurationInput`<sup>Optional</sup> <a name="objectLockConfigurationInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.objectLockConfigurationInput"></a>

```typescript
public readonly objectLockConfigurationInput: S3BucketObjectLockConfiguration;
```

- *Type:* @cdktf/provider-aws.s3.S3BucketObjectLockConfiguration

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `replicationConfigurationInput`<sup>Optional</sup> <a name="replicationConfigurationInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.replicationConfigurationInput"></a>

```typescript
public readonly replicationConfigurationInput: S3BucketReplicationConfiguration;
```

- *Type:* @cdktf/provider-aws.s3.S3BucketReplicationConfiguration

---

##### `requestPayerInput`<sup>Optional</sup> <a name="requestPayerInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.requestPayerInput"></a>

```typescript
public readonly requestPayerInput: string;
```

- *Type:* string

---

##### `serverSideEncryptionConfigurationInput`<sup>Optional</sup> <a name="serverSideEncryptionConfigurationInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.serverSideEncryptionConfigurationInput"></a>

```typescript
public readonly serverSideEncryptionConfigurationInput: S3BucketServerSideEncryptionConfiguration;
```

- *Type:* @cdktf/provider-aws.s3.S3BucketServerSideEncryptionConfiguration

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `versioningInput`<sup>Optional</sup> <a name="versioningInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.versioningInput"></a>

```typescript
public readonly versioningInput: S3BucketVersioning;
```

- *Type:* @cdktf/provider-aws.s3.S3BucketVersioning

---

##### `websiteDomainInput`<sup>Optional</sup> <a name="websiteDomainInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.websiteDomainInput"></a>

```typescript
public readonly websiteDomainInput: string;
```

- *Type:* string

---

##### `websiteEndpointInput`<sup>Optional</sup> <a name="websiteEndpointInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.websiteEndpointInput"></a>

```typescript
public readonly websiteEndpointInput: string;
```

- *Type:* string

---

##### `websiteInput`<sup>Optional</sup> <a name="websiteInput" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.websiteInput"></a>

```typescript
public readonly websiteInput: S3BucketWebsite;
```

- *Type:* @cdktf/provider-aws.s3.S3BucketWebsite

---

##### `accelerationStatus`<sup>Required</sup> <a name="accelerationStatus" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.accelerationStatus"></a>

```typescript
public readonly accelerationStatus: string;
```

- *Type:* string

---

##### `acl`<sup>Required</sup> <a name="acl" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

---

##### `corsRule`<sup>Required</sup> <a name="corsRule" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.corsRule"></a>

```typescript
public readonly corsRule: IResolvable | S3BucketCorsRule[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.s3.S3BucketCorsRule[]

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `grant`<sup>Required</sup> <a name="grant" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.grant"></a>

```typescript
public readonly grant: IResolvable | S3BucketGrant[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.s3.S3BucketGrant[]

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `lifecycleRule`<sup>Required</sup> <a name="lifecycleRule" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.lifecycleRule"></a>

```typescript
public readonly lifecycleRule: IResolvable | S3BucketLifecycleRule[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.s3.S3BucketLifecycleRule[]

---

##### `logging`<sup>Required</sup> <a name="logging" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.logging"></a>

```typescript
public readonly logging: IResolvable | S3BucketLogging[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.s3.S3BucketLogging[]

---

##### `policy`<sup>Required</sup> <a name="policy" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `requestPayer`<sup>Required</sup> <a name="requestPayer" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.requestPayer"></a>

```typescript
public readonly requestPayer: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `websiteDomain`<sup>Required</sup> <a name="websiteDomain" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.websiteDomain"></a>

```typescript
public readonly websiteDomain: string;
```

- *Type:* string

---

##### `websiteEndpoint`<sup>Required</sup> <a name="websiteEndpoint" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.websiteEndpoint"></a>

```typescript
public readonly websiteEndpoint: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@axa-datalab-it/dp-cdktf-constructs.DpS3StaticWebsite.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---



## Protocols <a name="Protocols" id="Protocols"></a>

### IDpS3Config <a name="IDpS3Config" id="@axa-datalab-it/dp-cdktf-constructs.IDpS3Config"></a>

- *Implemented By:* <a href="#@axa-datalab-it/dp-cdktf-constructs.IDpS3Config">IDpS3Config</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.IDpS3Config.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@axa-datalab-it/dp-cdktf-constructs.IDpS3Config.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

### IDpS3StaticWebsiteConfig <a name="IDpS3StaticWebsiteConfig" id="@axa-datalab-it/dp-cdktf-constructs.IDpS3StaticWebsiteConfig"></a>

- *Implemented By:* <a href="#@axa-datalab-it/dp-cdktf-constructs.IDpS3StaticWebsiteConfig">IDpS3StaticWebsiteConfig</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@axa-datalab-it/dp-cdktf-constructs.IDpS3StaticWebsiteConfig.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@axa-datalab-it/dp-cdktf-constructs.IDpS3StaticWebsiteConfig.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

