/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DeSerializers,
  DefaultDeSerializers,
  FunctionImportRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { DecisionOption } from './DecisionOption';
import { Task } from './Task';
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
export declare function decisionOptions<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DecisionOptionsParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): FunctionImportRequestBuilder<
  DeSerializersT,
  DecisionOptionsParameters<DeSerializersT>,
  DecisionOption[]
>;
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
export declare function claim<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ClaimParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): FunctionImportRequestBuilder<
  DeSerializersT,
  ClaimParameters<DeSerializersT>,
  Task
>;
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
export declare function release<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ReleaseParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): FunctionImportRequestBuilder<
  DeSerializersT,
  ReleaseParameters<DeSerializersT>,
  Task
>;
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
export declare function forward<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ForwardParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): FunctionImportRequestBuilder<
  DeSerializersT,
  ForwardParameters<DeSerializersT>,
  Task
>;
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
export declare function deleteSubstitutionRule<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DeleteSubstitutionRuleParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): FunctionImportRequestBuilder<
  DeSerializersT,
  DeleteSubstitutionRuleParameters<DeSerializersT>,
  SubstitutionRuleReturn
>;
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
export declare function enableSubstitutionRule<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: EnableSubstitutionRuleParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): Omit<
  FunctionImportRequestBuilder<
    DeSerializersT,
    EnableSubstitutionRuleParameters<DeSerializersT>,
    never
  >,
  'execute'
>;
/**
 * @deprecated Since v2.13.0. Use `operations` instead.
 */
export declare const functionImports: {
  decisionOptions: typeof decisionOptions;
  claim: typeof claim;
  release: typeof release;
  forward: typeof forward;
  deleteSubstitutionRule: typeof deleteSubstitutionRule;
  enableSubstitutionRule: typeof enableSubstitutionRule;
};
//# sourceMappingURL=function-imports.d.ts.map
