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
import { CustomAttributeDefinition } from './CustomAttributeDefinition';

/**
 * Request builder class for operations supported on the {@link CustomAttributeDefinition} entity.
 */
export class CustomAttributeDefinitionRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomAttributeDefinition<T>, T> {
  /**
   * Returns a request builder for retrieving one `CustomAttributeDefinition` entity based on its keys.
   * @param sapOrigin Key property. See {@link CustomAttributeDefinition.sapOrigin}.
   * @param taskDefinitionId Key property. See {@link CustomAttributeDefinition.taskDefinitionId}.
   * @param name Key property. See {@link CustomAttributeDefinition.name}.
   * @returns A request builder for creating requests to retrieve one `CustomAttributeDefinition` entity based on its keys.
   */
  getByKey(
    sapOrigin: DeserializedType<T, 'Edm.String'>,
    taskDefinitionId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomAttributeDefinition<T>, T> {
    return new GetByKeyRequestBuilder<CustomAttributeDefinition<T>, T>(
      this.entityApi,
      {
        SAP__Origin: sapOrigin,
        TaskDefinitionID: taskDefinitionId,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for querying all `CustomAttributeDefinition` entities.
   * @returns A request builder for creating requests to retrieve all `CustomAttributeDefinition` entities.
   */
  getAll(): GetAllRequestBuilder<CustomAttributeDefinition<T>, T> {
    return new GetAllRequestBuilder<CustomAttributeDefinition<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomAttributeDefinition` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomAttributeDefinition`.
   */
  create(
    entity: CustomAttributeDefinition<T>
  ): CreateRequestBuilder<CustomAttributeDefinition<T>, T> {
    return new CreateRequestBuilder<CustomAttributeDefinition<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomAttributeDefinition`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomAttributeDefinition`.
   */
  update(
    entity: CustomAttributeDefinition<T>
  ): UpdateRequestBuilder<CustomAttributeDefinition<T>, T> {
    return new UpdateRequestBuilder<CustomAttributeDefinition<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomAttributeDefinition`.
   * @param sapOrigin Key property. See {@link CustomAttributeDefinition.sapOrigin}.
   * @param taskDefinitionId Key property. See {@link CustomAttributeDefinition.taskDefinitionId}.
   * @param name Key property. See {@link CustomAttributeDefinition.name}.
   * @returns A request builder for creating requests that delete an entity of type `CustomAttributeDefinition`.
   */
  delete(
    sapOrigin: string,
    taskDefinitionId: string,
    name: string
  ): DeleteRequestBuilder<CustomAttributeDefinition<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomAttributeDefinition`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomAttributeDefinition` by taking the entity as a parameter.
   */
  delete(
    entity: CustomAttributeDefinition<T>
  ): DeleteRequestBuilder<CustomAttributeDefinition<T>, T>;
  delete(
    sapOriginOrEntity: any,
    taskDefinitionId?: string,
    name?: string
  ): DeleteRequestBuilder<CustomAttributeDefinition<T>, T> {
    return new DeleteRequestBuilder<CustomAttributeDefinition<T>, T>(
      this.entityApi,
      sapOriginOrEntity instanceof CustomAttributeDefinition
        ? sapOriginOrEntity
        : {
            SAP__Origin: sapOriginOrEntity!,
            TaskDefinitionID: taskDefinitionId!,
            Name: name!
          }
    );
  }
}
