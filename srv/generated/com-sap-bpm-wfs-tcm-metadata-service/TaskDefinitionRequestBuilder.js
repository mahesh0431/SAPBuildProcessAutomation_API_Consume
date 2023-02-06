"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDefinitionRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const TaskDefinition_1 = require("./TaskDefinition");
/**
 * Request builder class for operations supported on the {@link TaskDefinition} entity.
 */
class TaskDefinitionRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `TaskDefinition` entity based on its keys.
     * @param sapOrigin Key property. See {@link TaskDefinition.sapOrigin}.
     * @param taskDefinitionId Key property. See {@link TaskDefinition.taskDefinitionId}.
     * @returns A request builder for creating requests to retrieve one `TaskDefinition` entity based on its keys.
     */
    getByKey(sapOrigin, taskDefinitionId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SAP__Origin: sapOrigin,
            TaskDefinitionID: taskDefinitionId
        });
    }
    /**
     * Returns a request builder for querying all `TaskDefinition` entities.
     * @returns A request builder for creating requests to retrieve all `TaskDefinition` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `TaskDefinition` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TaskDefinition`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `TaskDefinition`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TaskDefinition`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(sapOriginOrEntity, taskDefinitionId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, sapOriginOrEntity instanceof TaskDefinition_1.TaskDefinition
            ? sapOriginOrEntity
            : {
                SAP__Origin: sapOriginOrEntity,
                TaskDefinitionID: taskDefinitionId
            });
    }
}
exports.TaskDefinitionRequestBuilder = TaskDefinitionRequestBuilder;
//# sourceMappingURL=TaskDefinitionRequestBuilder.js.map