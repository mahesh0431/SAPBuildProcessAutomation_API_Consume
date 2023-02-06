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
import { Task } from './Task';

/**
 * Request builder class for operations supported on the {@link Task} entity.
 */
export class TaskRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Task<T>, T> {
  /**
   * Returns a request builder for retrieving one `Task` entity based on its keys.
   * @param sapOrigin Key property. See {@link Task.sapOrigin}.
   * @param instanceId Key property. See {@link Task.instanceId}.
   * @returns A request builder for creating requests to retrieve one `Task` entity based on its keys.
   */
  getByKey(
    sapOrigin: DeserializedType<T, 'Edm.String'>,
    instanceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Task<T>, T> {
    return new GetByKeyRequestBuilder<Task<T>, T>(this.entityApi, {
      SAP__Origin: sapOrigin,
      InstanceID: instanceId
    });
  }

  /**
   * Returns a request builder for querying all `Task` entities.
   * @returns A request builder for creating requests to retrieve all `Task` entities.
   */
  getAll(): GetAllRequestBuilder<Task<T>, T> {
    return new GetAllRequestBuilder<Task<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Task` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Task`.
   */
  create(entity: Task<T>): CreateRequestBuilder<Task<T>, T> {
    return new CreateRequestBuilder<Task<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Task`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Task`.
   */
  update(entity: Task<T>): UpdateRequestBuilder<Task<T>, T> {
    return new UpdateRequestBuilder<Task<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Task`.
   * @param sapOrigin Key property. See {@link Task.sapOrigin}.
   * @param instanceId Key property. See {@link Task.instanceId}.
   * @returns A request builder for creating requests that delete an entity of type `Task`.
   */
  delete(
    sapOrigin: string,
    instanceId: string
  ): DeleteRequestBuilder<Task<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Task`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Task` by taking the entity as a parameter.
   */
  delete(entity: Task<T>): DeleteRequestBuilder<Task<T>, T>;
  delete(
    sapOriginOrEntity: any,
    instanceId?: string
  ): DeleteRequestBuilder<Task<T>, T> {
    return new DeleteRequestBuilder<Task<T>, T>(
      this.entityApi,
      sapOriginOrEntity instanceof Task
        ? sapOriginOrEntity
        : {
            SAP__Origin: sapOriginOrEntity!,
            InstanceID: instanceId!
          }
    );
  }
}
