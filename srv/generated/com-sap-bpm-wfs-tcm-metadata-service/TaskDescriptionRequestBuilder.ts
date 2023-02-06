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
import { TaskDescription } from './TaskDescription';

/**
 * Request builder class for operations supported on the {@link TaskDescription} entity.
 */
export class TaskDescriptionRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaskDescription<T>, T> {
  /**
   * Returns a request builder for retrieving one `TaskDescription` entity based on its keys.
   * @param sapOrigin Key property. See {@link TaskDescription.sapOrigin}.
   * @param instanceId Key property. See {@link TaskDescription.instanceId}.
   * @returns A request builder for creating requests to retrieve one `TaskDescription` entity based on its keys.
   */
  getByKey(
    sapOrigin: DeserializedType<T, 'Edm.String'>,
    instanceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaskDescription<T>, T> {
    return new GetByKeyRequestBuilder<TaskDescription<T>, T>(this.entityApi, {
      SAP__Origin: sapOrigin,
      InstanceID: instanceId
    });
  }

  /**
   * Returns a request builder for querying all `TaskDescription` entities.
   * @returns A request builder for creating requests to retrieve all `TaskDescription` entities.
   */
  getAll(): GetAllRequestBuilder<TaskDescription<T>, T> {
    return new GetAllRequestBuilder<TaskDescription<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaskDescription` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaskDescription`.
   */
  create(
    entity: TaskDescription<T>
  ): CreateRequestBuilder<TaskDescription<T>, T> {
    return new CreateRequestBuilder<TaskDescription<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaskDescription`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaskDescription`.
   */
  update(
    entity: TaskDescription<T>
  ): UpdateRequestBuilder<TaskDescription<T>, T> {
    return new UpdateRequestBuilder<TaskDescription<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaskDescription`.
   * @param sapOrigin Key property. See {@link TaskDescription.sapOrigin}.
   * @param instanceId Key property. See {@link TaskDescription.instanceId}.
   * @returns A request builder for creating requests that delete an entity of type `TaskDescription`.
   */
  delete(
    sapOrigin: string,
    instanceId: string
  ): DeleteRequestBuilder<TaskDescription<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaskDescription`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaskDescription` by taking the entity as a parameter.
   */
  delete(
    entity: TaskDescription<T>
  ): DeleteRequestBuilder<TaskDescription<T>, T>;
  delete(
    sapOriginOrEntity: any,
    instanceId?: string
  ): DeleteRequestBuilder<TaskDescription<T>, T> {
    return new DeleteRequestBuilder<TaskDescription<T>, T>(
      this.entityApi,
      sapOriginOrEntity instanceof TaskDescription
        ? sapOriginOrEntity
        : {
            SAP__Origin: sapOriginOrEntity!,
            InstanceID: instanceId!
          }
    );
  }
}
