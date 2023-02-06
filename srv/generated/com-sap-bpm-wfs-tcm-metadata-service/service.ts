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
  decisionOptions,
  claim,
  release,
  forward,
  deleteSubstitutionRule,
  enableSubstitutionRule,
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
  defaultDeSerializers,
  DeSerializers,
  DefaultDeSerializers,
  mergeDefaultDeSerializersWith,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';

export function comSapBpmWfsTcmMetadataService<
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
  deSerializers: Partial<
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
  > = defaultDeSerializers as any
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
> {
  return new ComSapBpmWfsTcmMetadataService(
    mergeDefaultDeSerializersWith(deSerializers)
  );
}
class ComSapBpmWfsTcmMetadataService<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis: Record<string, any> = {};
  private deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT) {
    this.deSerializers = deSerializers;
  }

  private initApi(key: string, ctor: new (...args: any[]) => any): any {
    if (!this.apis[key]) {
      this.apis[key] = new ctor(this.deSerializers);
    }
    return this.apis[key];
  }

  get customAttributeApi(): CustomAttributeApi<DeSerializersT> {
    return this.initApi('customAttributeApi', CustomAttributeApi);
  }

  get customAttributeDefinitionApi(): CustomAttributeDefinitionApi<DeSerializersT> {
    return this.initApi(
      'customAttributeDefinitionApi',
      CustomAttributeDefinitionApi
    );
  }

  get substitutesRuleApi(): SubstitutesRuleApi<DeSerializersT> {
    return this.initApi('substitutesRuleApi', SubstitutesRuleApi);
  }

  get substitutionRuleApi(): SubstitutionRuleApi<DeSerializersT> {
    return this.initApi('substitutionRuleApi', SubstitutionRuleApi);
  }

  get taskApi(): TaskApi<DeSerializersT> {
    const api = this.initApi('taskApi', TaskApi);
    const linkedApis = [
      this.initApi('taskDescriptionApi', TaskDescriptionApi),
      this.initApi('taskDefinitionApi', TaskDefinitionApi),
      this.initApi('customAttributeApi', CustomAttributeApi),
      this.initApi('workflowLogApi', WorkflowLogApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get taskDefinitionApi(): TaskDefinitionApi<DeSerializersT> {
    const api = this.initApi('taskDefinitionApi', TaskDefinitionApi);
    const linkedApis = [
      this.initApi('customAttributeDefinitionApi', CustomAttributeDefinitionApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get taskDescriptionApi(): TaskDescriptionApi<DeSerializersT> {
    return this.initApi('taskDescriptionApi', TaskDescriptionApi);
  }

  get userInfoApi(): UserInfoApi<DeSerializersT> {
    return this.initApi('userInfoApi', UserInfoApi);
  }

  get workflowLogApi(): WorkflowLogApi<DeSerializersT> {
    const api = this.initApi('workflowLogApi', WorkflowLogApi);
    const linkedApis = [this.initApi('userInfoApi', UserInfoApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  /**
   * @deprecated Since v2.13.0. Use {@link operations} instead.
   */
  get functionImports() {
    return {
      decisionOptions: (parameter: DecisionOptionsParameters<DeSerializersT>) =>
        decisionOptions(parameter, this.deSerializers),
      claim: (parameter: ClaimParameters<DeSerializersT>) =>
        claim(parameter, this.deSerializers),
      release: (parameter: ReleaseParameters<DeSerializersT>) =>
        release(parameter, this.deSerializers),
      forward: (parameter: ForwardParameters<DeSerializersT>) =>
        forward(parameter, this.deSerializers),
      deleteSubstitutionRule: (
        parameter: DeleteSubstitutionRuleParameters<DeSerializersT>
      ) => deleteSubstitutionRule(parameter, this.deSerializers),
      enableSubstitutionRule: (
        parameter: EnableSubstitutionRuleParameters<DeSerializersT>
      ) => enableSubstitutionRule(parameter, this.deSerializers)
    };
  }

  /**
   * Get unbound functions and actions.
   */
  get operations() {
    return { ...this.functionImports };
  }

  get batch(): typeof batch {
    return batch;
  }

  get changeset(): typeof changeset {
    return changeset;
  }
}
