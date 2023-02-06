/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  entityDeserializer,
  transformReturnValueForComplexTypeList,
  transformReturnValueForEntity,
  transformReturnValueForComplexType,
  throwErrorWhenReturnTypeIsUnionType,
  DeSerializers,
  DefaultDeSerializers,
  defaultDeSerializers,
  FunctionImportParameter,
  FunctionImportRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { comSapBpmWfsTcmMetadataService } from './service';
import { DecisionOption } from './DecisionOption';
import { Task } from './Task';
import { TaskApi } from './TaskApi';
import { SubstitutionRuleReturn } from './SubstitutionRuleReturn';

/**
 * Type of the parameters to be passed to {@link decisionOptions}.
 */
export interface DecisionOptionsParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Sap Origin.
   */
  sapOrigin?: string | null;
  /**
   * Instance Id.
   */
  instanceId?: string | null;
}

/**
 * Decision Options.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function decisionOptions<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DecisionOptionsParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): FunctionImportRequestBuilder<
  DeSerializersT,
  DecisionOptionsParameters<DeSerializersT>,
  DecisionOption[]
> {
  const params = {
    sapOrigin: new FunctionImportParameter(
      'SAP__Origin',
      'Edm.String',
      parameters.sapOrigin
    ),
    instanceId: new FunctionImportParameter(
      'InstanceID',
      'Edm.String',
      parameters.instanceId
    )
  };

  return new FunctionImportRequestBuilder(
    'get',
    'VALUE_IS_UNDEFINED',
    'DecisionOptions',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, DecisionOption)
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link claim}.
 */
export interface ClaimParameters<DeSerializersT extends DeSerializers> {
  /**
   * Sap Origin.
   */
  sapOrigin?: string | null;
  /**
   * Instance Id.
   */
  instanceId?: string | null;
  /**
   * Comments.
   */
  comments?: string | null;
}

/**
 * Claim.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function claim<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ClaimParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): FunctionImportRequestBuilder<
  DeSerializersT,
  ClaimParameters<DeSerializersT>,
  Task
> {
  const params = {
    sapOrigin: new FunctionImportParameter(
      'SAP__Origin',
      'Edm.String',
      parameters.sapOrigin
    ),
    instanceId: new FunctionImportParameter(
      'InstanceID',
      'Edm.String',
      parameters.instanceId
    ),
    comments: new FunctionImportParameter(
      'Comments',
      'Edm.String',
      parameters.comments
    )
  };

  return new FunctionImportRequestBuilder(
    'post',
    'VALUE_IS_UNDEFINED',
    'Claim',
    data =>
      transformReturnValueForEntity(
        data,
        comSapBpmWfsTcmMetadataService(deSerializers).taskApi
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link release}.
 */
export interface ReleaseParameters<DeSerializersT extends DeSerializers> {
  /**
   * Sap Origin.
   */
  sapOrigin?: string | null;
  /**
   * Instance Id.
   */
  instanceId?: string | null;
}

/**
 * Release.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function release<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ReleaseParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): FunctionImportRequestBuilder<
  DeSerializersT,
  ReleaseParameters<DeSerializersT>,
  Task
> {
  const params = {
    sapOrigin: new FunctionImportParameter(
      'SAP__Origin',
      'Edm.String',
      parameters.sapOrigin
    ),
    instanceId: new FunctionImportParameter(
      'InstanceID',
      'Edm.String',
      parameters.instanceId
    )
  };

  return new FunctionImportRequestBuilder(
    'post',
    'VALUE_IS_UNDEFINED',
    'Release',
    data =>
      transformReturnValueForEntity(
        data,
        comSapBpmWfsTcmMetadataService(deSerializers).taskApi
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link forward}.
 */
export interface ForwardParameters<DeSerializersT extends DeSerializers> {
  /**
   * Sap Origin.
   */
  sapOrigin?: string | null;
  /**
   * Instance Id.
   */
  instanceId?: string | null;
  /**
   * Forward To.
   */
  forwardTo: string;
}

/**
 * Forward.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function forward<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ForwardParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): FunctionImportRequestBuilder<
  DeSerializersT,
  ForwardParameters<DeSerializersT>,
  Task
> {
  const params = {
    sapOrigin: new FunctionImportParameter(
      'SAP__Origin',
      'Edm.String',
      parameters.sapOrigin
    ),
    instanceId: new FunctionImportParameter(
      'InstanceID',
      'Edm.String',
      parameters.instanceId
    ),
    forwardTo: new FunctionImportParameter(
      'ForwardTo',
      'Edm.String',
      parameters.forwardTo
    )
  };

  return new FunctionImportRequestBuilder(
    'post',
    'VALUE_IS_UNDEFINED',
    'Forward',
    data =>
      transformReturnValueForEntity(
        data,
        comSapBpmWfsTcmMetadataService(deSerializers).taskApi
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link deleteSubstitutionRule}.
 */
export interface DeleteSubstitutionRuleParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Sap Origin.
   */
  sapOrigin?: string | null;
  /**
   * Substitution Rule Id.
   */
  substitutionRuleId?: string | null;
}

/**
 * Delete Substitution Rule.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function deleteSubstitutionRule<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DeleteSubstitutionRuleParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): FunctionImportRequestBuilder<
  DeSerializersT,
  DeleteSubstitutionRuleParameters<DeSerializersT>,
  SubstitutionRuleReturn
> {
  const params = {
    sapOrigin: new FunctionImportParameter(
      'SAP__Origin',
      'Edm.String',
      parameters.sapOrigin
    ),
    substitutionRuleId: new FunctionImportParameter(
      'SubstitutionRuleID',
      'Edm.String',
      parameters.substitutionRuleId
    )
  };

  return new FunctionImportRequestBuilder(
    'post',
    'VALUE_IS_UNDEFINED',
    'DeleteSubstitutionRule',
    data =>
      transformReturnValueForComplexType(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, SubstitutionRuleReturn)
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link enableSubstitutionRule}.
 */
export interface EnableSubstitutionRuleParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Sap Origin.
   */
  sapOrigin?: string | null;
  /**
   * Substitution Rule Id.
   */
  substitutionRuleId?: string | null;
  /**
   * Enabled.
   */
  enabled?: boolean | null;
}

/**
 * Enable Substitution Rule. The 'execute' method does not exist when using this function import. Please use the 'executeRaw' for getting the raw response.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function enableSubstitutionRule<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: EnableSubstitutionRuleParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): Omit<
  FunctionImportRequestBuilder<
    DeSerializersT,
    EnableSubstitutionRuleParameters<DeSerializersT>,
    never
  >,
  'execute'
> {
  const params = {
    sapOrigin: new FunctionImportParameter(
      'SAP__Origin',
      'Edm.String',
      parameters.sapOrigin
    ),
    substitutionRuleId: new FunctionImportParameter(
      'SubstitutionRuleID',
      'Edm.String',
      parameters.substitutionRuleId
    ),
    enabled: new FunctionImportParameter(
      'Enabled',
      'Edm.Boolean',
      parameters.enabled
    )
  };

  return new FunctionImportRequestBuilder(
    'post',
    'VALUE_IS_UNDEFINED',
    'EnableSubstitutionRule',
    data => throwErrorWhenReturnTypeIsUnionType(data, 'EnableSubstitutionRule'),
    params,
    deSerializers
  );
}

/**
 * @deprecated Since v2.13.0. Use `operations` instead.
 */
export const functionImports = {
  decisionOptions,
  claim,
  release,
  forward,
  deleteSubstitutionRule,
  enableSubstitutionRule
};
