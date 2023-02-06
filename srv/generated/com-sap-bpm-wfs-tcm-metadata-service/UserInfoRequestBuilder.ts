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
import { UserInfo } from './UserInfo';

/**
 * Request builder class for operations supported on the {@link UserInfo} entity.
 */
export class UserInfoRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UserInfo<T>, T> {
  /**
   * Returns a request builder for retrieving one `UserInfo` entity based on its keys.
   * @param sapOrigin Key property. See {@link UserInfo.sapOrigin}.
   * @param uniqueName Key property. See {@link UserInfo.uniqueName}.
   * @returns A request builder for creating requests to retrieve one `UserInfo` entity based on its keys.
   */
  getByKey(
    sapOrigin: DeserializedType<T, 'Edm.String'>,
    uniqueName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<UserInfo<T>, T> {
    return new GetByKeyRequestBuilder<UserInfo<T>, T>(this.entityApi, {
      SAP__Origin: sapOrigin,
      UniqueName: uniqueName
    });
  }

  /**
   * Returns a request builder for querying all `UserInfo` entities.
   * @returns A request builder for creating requests to retrieve all `UserInfo` entities.
   */
  getAll(): GetAllRequestBuilder<UserInfo<T>, T> {
    return new GetAllRequestBuilder<UserInfo<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `UserInfo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UserInfo`.
   */
  create(entity: UserInfo<T>): CreateRequestBuilder<UserInfo<T>, T> {
    return new CreateRequestBuilder<UserInfo<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `UserInfo`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UserInfo`.
   */
  update(entity: UserInfo<T>): UpdateRequestBuilder<UserInfo<T>, T> {
    return new UpdateRequestBuilder<UserInfo<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `UserInfo`.
   * @param sapOrigin Key property. See {@link UserInfo.sapOrigin}.
   * @param uniqueName Key property. See {@link UserInfo.uniqueName}.
   * @returns A request builder for creating requests that delete an entity of type `UserInfo`.
   */
  delete(
    sapOrigin: string,
    uniqueName: string
  ): DeleteRequestBuilder<UserInfo<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UserInfo`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UserInfo` by taking the entity as a parameter.
   */
  delete(entity: UserInfo<T>): DeleteRequestBuilder<UserInfo<T>, T>;
  delete(
    sapOriginOrEntity: any,
    uniqueName?: string
  ): DeleteRequestBuilder<UserInfo<T>, T> {
    return new DeleteRequestBuilder<UserInfo<T>, T>(
      this.entityApi,
      sapOriginOrEntity instanceof UserInfo
        ? sapOriginOrEntity
        : {
            SAP__Origin: sapOriginOrEntity!,
            UniqueName: uniqueName!
          }
    );
  }
}
