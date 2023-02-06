/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomAttributeApi } from './CustomAttributeApi';
import { CustomAttributeDefinitionApi } from './CustomAttributeDefinitionApi';
import { SubstitutesRuleApi } from './SubstitutesRuleApi';
import { SubstitutionRuleApi } from './SubstitutionRuleApi';
import { TaskApi } from './TaskApi';
import { TaskDefinitionApi } from './TaskDefinitionApi';
import { TaskDescriptionApi } from './TaskDescriptionApi';
import { UserInfoApi } from './UserInfoApi';
import { WorkflowLogApi } from './WorkflowLogApi';
import {
  DecisionOptionsParameters,
  ClaimParameters,
  ReleaseParameters,
  ForwardParameters,
  DeleteSubstitutionRuleParameters,
  EnableSubstitutionRuleParameters
} from './function-imports';
import { BigNumber } from 'bignumber.js';
import { Moment } from 'moment';
import {
  DeSerializers,
  DefaultDeSerializers,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';
export declare function comSapBpmWfsTcmMetadataService<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateTimeT = Moment,
  TimeT = Time
>(
  deSerializers?: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateTimeT,
      TimeT
    >
  >
): ComSapBpmWfsTcmMetadataService<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateTimeT,
    TimeT
  >
>;
declare class ComSapBpmWfsTcmMetadataService<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis;
  private deSerializers;
  constructor(deSerializers: DeSerializersT);
  private initApi;
  get customAttributeApi(): CustomAttributeApi<DeSerializersT>;
  get customAttributeDefinitionApi(): CustomAttributeDefinitionApi<DeSerializersT>;
  get substitutesRuleApi(): SubstitutesRuleApi<DeSerializersT>;
  get substitutionRuleApi(): SubstitutionRuleApi<DeSerializersT>;
  get taskApi(): TaskApi<DeSerializersT>;
  get taskDefinitionApi(): TaskDefinitionApi<DeSerializersT>;
  get taskDescriptionApi(): TaskDescriptionApi<DeSerializersT>;
  get userInfoApi(): UserInfoApi<DeSerializersT>;
  get workflowLogApi(): WorkflowLogApi<DeSerializersT>;
  /**
   * @deprecated Since v2.13.0. Use {@link operations} instead.
   */
  get functionImports(): {
    decisionOptions: (
      parameter: DecisionOptionsParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').FunctionImportRequestBuilder<
      DeSerializersT,
      DecisionOptionsParameters<DeSerializersT>,
      import('./DecisionOption').DecisionOption<DefaultDeSerializers>[]
    >;
    claim: (
      parameter: ClaimParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').FunctionImportRequestBuilder<
      DeSerializersT,
      ClaimParameters<DeSerializersT>,
      import('./Task').Task<DefaultDeSerializers>
    >;
    release: (
      parameter: ReleaseParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').FunctionImportRequestBuilder<
      DeSerializersT,
      ReleaseParameters<DeSerializersT>,
      import('./Task').Task<DefaultDeSerializers>
    >;
    forward: (
      parameter: ForwardParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').FunctionImportRequestBuilder<
      DeSerializersT,
      ForwardParameters<DeSerializersT>,
      import('./Task').Task<DefaultDeSerializers>
    >;
    deleteSubstitutionRule: (
      parameter: DeleteSubstitutionRuleParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').FunctionImportRequestBuilder<
      DeSerializersT,
      DeleteSubstitutionRuleParameters<DeSerializersT>,
      import('./SubstitutionRuleReturn').SubstitutionRuleReturn<DefaultDeSerializers>
    >;
    enableSubstitutionRule: (
      parameter: EnableSubstitutionRuleParameters<DeSerializersT>
    ) => Omit<
      import('@sap-cloud-sdk/odata-v2').FunctionImportRequestBuilder<
        DeSerializersT,
        EnableSubstitutionRuleParameters<DeSerializersT>,
        never
      >,
      'execute'
    >;
  };
  /**
   * Get unbound functions and actions.
   */
  get operations(): {
    decisionOptions: (
      parameter: DecisionOptionsParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').FunctionImportRequestBuilder<
      DeSerializersT,
      DecisionOptionsParameters<DeSerializersT>,
      import('./DecisionOption').DecisionOption<DefaultDeSerializers>[]
    >;
    claim: (
      parameter: ClaimParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').FunctionImportRequestBuilder<
      DeSerializersT,
      ClaimParameters<DeSerializersT>,
      import('./Task').Task<DefaultDeSerializers>
    >;
    release: (
      parameter: ReleaseParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').FunctionImportRequestBuilder<
      DeSerializersT,
      ReleaseParameters<DeSerializersT>,
      import('./Task').Task<DefaultDeSerializers>
    >;
    forward: (
      parameter: ForwardParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').FunctionImportRequestBuilder<
      DeSerializersT,
      ForwardParameters<DeSerializersT>,
      import('./Task').Task<DefaultDeSerializers>
    >;
    deleteSubstitutionRule: (
      parameter: DeleteSubstitutionRuleParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').FunctionImportRequestBuilder<
      DeSerializersT,
      DeleteSubstitutionRuleParameters<DeSerializersT>,
      import('./SubstitutionRuleReturn').SubstitutionRuleReturn<DefaultDeSerializers>
    >;
    enableSubstitutionRule: (
      parameter: EnableSubstitutionRuleParameters<DeSerializersT>
    ) => Omit<
      import('@sap-cloud-sdk/odata-v2').FunctionImportRequestBuilder<
        DeSerializersT,
        EnableSubstitutionRuleParameters<DeSerializersT>,
        never
      >,
      'execute'
    >;
  };
  get batch(): typeof batch;
  get changeset(): typeof changeset;
}
export {};
//# sourceMappingURL=service.d.ts.map
