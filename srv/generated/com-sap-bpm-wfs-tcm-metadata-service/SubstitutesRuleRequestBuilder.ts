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
import { SubstitutesRule } from './SubstitutesRule';

/**
 * Request builder class for operations supported on the {@link SubstitutesRule} entity.
 */
export class SubstitutesRuleRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubstitutesRule<T>, T> {
  /**
   * Returns a request builder for retrieving one `SubstitutesRule` entity based on its keys.
   * @param sapOrigin Key property. See {@link SubstitutesRule.sapOrigin}.
   * @param substitutionRuleId Key property. See {@link SubstitutesRule.substitutionRuleId}.
   * @returns A request builder for creating requests to retrieve one `SubstitutesRule` entity based on its keys.
   */
  getByKey(
    sapOrigin: DeserializedType<T, 'Edm.String'>,
    substitutionRuleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubstitutesRule<T>, T> {
    return new GetByKeyRequestBuilder<SubstitutesRule<T>, T>(this.entityApi, {
      SAP__Origin: sapOrigin,
      SubstitutionRuleID: substitutionRuleId
    });
  }

  /**
   * Returns a request builder for querying all `SubstitutesRule` entities.
   * @returns A request builder for creating requests to retrieve all `SubstitutesRule` entities.
   */
  getAll(): GetAllRequestBuilder<SubstitutesRule<T>, T> {
    return new GetAllRequestBuilder<SubstitutesRule<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SubstitutesRule` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubstitutesRule`.
   */
  create(
    entity: SubstitutesRule<T>
  ): CreateRequestBuilder<SubstitutesRule<T>, T> {
    return new CreateRequestBuilder<SubstitutesRule<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubstitutesRule`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubstitutesRule`.
   */
  update(
    entity: SubstitutesRule<T>
  ): UpdateRequestBuilder<SubstitutesRule<T>, T> {
    return new UpdateRequestBuilder<SubstitutesRule<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubstitutesRule`.
   * @param sapOrigin Key property. See {@link SubstitutesRule.sapOrigin}.
   * @param substitutionRuleId Key property. See {@link SubstitutesRule.substitutionRuleId}.
   * @returns A request builder for creating requests that delete an entity of type `SubstitutesRule`.
   */
  delete(
    sapOrigin: string,
    substitutionRuleId: string
  ): DeleteRequestBuilder<SubstitutesRule<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubstitutesRule`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubstitutesRule` by taking the entity as a parameter.
   */
  delete(
    entity: SubstitutesRule<T>
  ): DeleteRequestBuilder<SubstitutesRule<T>, T>;
  delete(
    sapOriginOrEntity: any,
    substitutionRuleId?: string
  ): DeleteRequestBuilder<SubstitutesRule<T>, T> {
    return new DeleteRequestBuilder<SubstitutesRule<T>, T>(
      this.entityApi,
      sapOriginOrEntity instanceof SubstitutesRule
        ? sapOriginOrEntity
        : {
            SAP__Origin: sapOriginOrEntity!,
            SubstitutionRuleID: substitutionRuleId!
          }
    );
  }
}
