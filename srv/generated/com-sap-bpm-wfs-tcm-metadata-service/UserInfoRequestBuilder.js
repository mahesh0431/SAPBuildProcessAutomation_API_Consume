"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfoRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const UserInfo_1 = require("./UserInfo");
/**
 * Request builder class for operations supported on the {@link UserInfo} entity.
 */
class UserInfoRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `UserInfo` entity based on its keys.
     * @param sapOrigin Key property. See {@link UserInfo.sapOrigin}.
     * @param uniqueName Key property. See {@link UserInfo.uniqueName}.
     * @returns A request builder for creating requests to retrieve one `UserInfo` entity based on its keys.
     */
    getByKey(sapOrigin, uniqueName) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SAP__Origin: sapOrigin,
            UniqueName: uniqueName
        });
    }
    /**
     * Returns a request builder for querying all `UserInfo` entities.
     * @returns A request builder for creating requests to retrieve all `UserInfo` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `UserInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `UserInfo`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `UserInfo`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `UserInfo`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(sapOriginOrEntity, uniqueName) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, sapOriginOrEntity instanceof UserInfo_1.UserInfo
            ? sapOriginOrEntity
            : {
                SAP__Origin: sapOriginOrEntity,
                UniqueName: uniqueName
            });
    }
}
exports.UserInfoRequestBuilder = UserInfoRequestBuilder;
//# sourceMappingURL=UserInfoRequestBuilder.js.map