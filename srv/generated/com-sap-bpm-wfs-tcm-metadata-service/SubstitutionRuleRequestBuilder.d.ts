/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  CreateRequestBuilder,
  UpdateRequestBuilder,
  DeleteRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { SubstitutionRule } from './SubstitutionRule';
/**
 * Request builder class for operations supported on the {@link SubstitutionRule} entity.
 */
export declare class SubstitutionRuleRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubstitutionRule<T>, T> {
  /**
   * Returns a request builder for retrieving one `SubstitutionRule` entity based on its keys.
   * @param sapOrigin Key property. See {@link SubstitutionRule.sapOrigin}.
   * @param substitutionRuleId Key property. See {@link SubstitutionRule.substitutionRuleId}.
   * @returns A request builder for creating requests to retrieve one `SubstitutionRule` entity based on its keys.
   */
  getByKey(
    sapOrigin: DeserializedType<T, 'Edm.String'>,
    substitutionRuleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubstitutionRule<T>, T>;
  /**
   * Returns a request builder for querying all `SubstitutionRule` entities.
   * @returns A request builder for creating requests to retrieve all `SubstitutionRule` entities.
   */
  getAll(): GetAllRequestBuilder<SubstitutionRule<T>, T>;
  /**
   * Returns a request builder for creating a `SubstitutionRule` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubstitutionRule`.
   */
  create(
    entity: SubstitutionRule<T>
  ): CreateRequestBuilder<SubstitutionRule<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `SubstitutionRule`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubstitutionRule`.
   */
  update(
    entity: SubstitutionRule<T>
  ): UpdateRequestBuilder<SubstitutionRule<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubstitutionRule`.
   * @param sapOrigin Key property. See {@link SubstitutionRule.sapOrigin}.
   * @param substitutionRuleId Key property. See {@link SubstitutionRule.substitutionRuleId}.
   * @returns A request builder for creating requests that delete an entity of type `SubstitutionRule`.
   */
  delete(
    sapOrigin: string,
    substitutionRuleId: string
  ): DeleteRequestBuilder<SubstitutionRule<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubstitutionRule`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubstitutionRule` by taking the entity as a parameter.
   */
  delete(
    entity: SubstitutionRule<T>
  ): DeleteRequestBuilder<SubstitutionRule<T>, T>;
}
//# sourceMappingURL=SubstitutionRuleRequestBuilder.d.ts.map
