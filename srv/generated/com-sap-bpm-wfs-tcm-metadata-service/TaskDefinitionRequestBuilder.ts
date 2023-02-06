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
import { TaskDefinition } from './TaskDefinition';

/**
 * Request builder class for operations supported on the {@link TaskDefinition} entity.
 */
export class TaskDefinitionRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaskDefinition<T>, T> {
  /**
   * Returns a request builder for retrieving one `TaskDefinition` entity based on its keys.
   * @param sapOrigin Key property. See {@link TaskDefinition.sapOrigin}.
   * @param taskDefinitionId Key property. See {@link TaskDefinition.taskDefinitionId}.
   * @returns A request builder for creating requests to retrieve one `TaskDefinition` entity based on its keys.
   */
  getByKey(
    sapOrigin: DeserializedType<T, 'Edm.String'>,
    taskDefinitionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaskDefinition<T>, T> {
    return new GetByKeyRequestBuilder<TaskDefinition<T>, T>(this.entityApi, {
      SAP__Origin: sapOrigin,
      TaskDefinitionID: taskDefinitionId
    });
  }

  /**
   * Returns a request builder for querying all `TaskDefinition` entities.
   * @returns A request builder for creating requests to retrieve all `TaskDefinition` entities.
   */
  getAll(): GetAllRequestBuilder<TaskDefinition<T>, T> {
    return new GetAllRequestBuilder<TaskDefinition<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaskDefinition` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaskDefinition`.
   */
  create(
    entity: TaskDefinition<T>
  ): CreateRequestBuilder<TaskDefinition<T>, T> {
    return new CreateRequestBuilder<TaskDefinition<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaskDefinition`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaskDefinition`.
   */
  update(
    entity: TaskDefinition<T>
  ): UpdateRequestBuilder<TaskDefinition<T>, T> {
    return new UpdateRequestBuilder<TaskDefinition<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaskDefinition`.
   * @param sapOrigin Key property. See {@link TaskDefinition.sapOrigin}.
   * @param taskDefinitionId Key property. See {@link TaskDefinition.taskDefinitionId}.
   * @returns A request builder for creating requests that delete an entity of type `TaskDefinition`.
   */
  delete(
    sapOrigin: string,
    taskDefinitionId: string
  ): DeleteRequestBuilder<TaskDefinition<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaskDefinition`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaskDefinition` by taking the entity as a parameter.
   */
  delete(entity: TaskDefinition<T>): DeleteRequestBuilder<TaskDefinition<T>, T>;
  delete(
    sapOriginOrEntity: any,
    taskDefinitionId?: string
  ): DeleteRequestBuilder<TaskDefinition<T>, T> {
    return new DeleteRequestBuilder<TaskDefinition<T>, T>(
      this.entityApi,
      sapOriginOrEntity instanceof TaskDefinition
        ? sapOriginOrEntity
        : {
            SAP__Origin: sapOriginOrEntity!,
            TaskDefinitionID: taskDefinitionId!
          }
    );
  }
}
