"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const Task_1 = require("./Task");
/**
 * Request builder class for operations supported on the {@link Task} entity.
 */
class TaskRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `Task` entity based on its keys.
     * @param sapOrigin Key property. See {@link Task.sapOrigin}.
     * @param instanceId Key property. See {@link Task.instanceId}.
     * @returns A request builder for creating requests to retrieve one `Task` entity based on its keys.
     */
    getByKey(sapOrigin, instanceId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SAP__Origin: sapOrigin,
            InstanceID: instanceId
        });
    }
    /**
     * Returns a request builder for querying all `Task` entities.
     * @returns A request builder for creating requests to retrieve all `Task` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Task` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Task`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `Task`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Task`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(sapOriginOrEntity, instanceId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, sapOriginOrEntity instanceof Task_1.Task
            ? sapOriginOrEntity
            : {
                SAP__Origin: sapOriginOrEntity,
                InstanceID: instanceId
            });
    }
}
exports.TaskRequestBuilder = TaskRequestBuilder;
//# sourceMappingURL=TaskRequestBuilder.js.map