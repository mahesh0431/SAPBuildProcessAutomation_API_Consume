"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDescriptionRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const TaskDescription_1 = require("./TaskDescription");
/**
 * Request builder class for operations supported on the {@link TaskDescription} entity.
 */
class TaskDescriptionRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `TaskDescription` entity based on its keys.
     * @param sapOrigin Key property. See {@link TaskDescription.sapOrigin}.
     * @param instanceId Key property. See {@link TaskDescription.instanceId}.
     * @returns A request builder for creating requests to retrieve one `TaskDescription` entity based on its keys.
     */
    getByKey(sapOrigin, instanceId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SAP__Origin: sapOrigin,
            InstanceID: instanceId
        });
    }
    /**
     * Returns a request builder for querying all `TaskDescription` entities.
     * @returns A request builder for creating requests to retrieve all `TaskDescription` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `TaskDescription` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TaskDescription`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `TaskDescription`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TaskDescription`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(sapOriginOrEntity, instanceId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, sapOriginOrEntity instanceof TaskDescription_1.TaskDescription
            ? sapOriginOrEntity
            : {
                SAP__Origin: sapOriginOrEntity,
                InstanceID: instanceId
            });
    }
}
exports.TaskDescriptionRequestBuilder = TaskDescriptionRequestBuilder;
//# sourceMappingURL=TaskDescriptionRequestBuilder.js.map