"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowLogRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const WorkflowLog_1 = require("./WorkflowLog");
/**
 * Request builder class for operations supported on the {@link WorkflowLog} entity.
 */
class WorkflowLogRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `WorkflowLog` entity based on its keys.
     * @param sapOrigin Key property. See {@link WorkflowLog.sapOrigin}.
     * @param instanceId Key property. See {@link WorkflowLog.instanceId}.
     * @param eventOrder Key property. See {@link WorkflowLog.eventOrder}.
     * @returns A request builder for creating requests to retrieve one `WorkflowLog` entity based on its keys.
     */
    getByKey(sapOrigin, instanceId, eventOrder) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SAP__Origin: sapOrigin,
            InstanceID: instanceId,
            EventOrder: eventOrder
        });
    }
    /**
     * Returns a request builder for querying all `WorkflowLog` entities.
     * @returns A request builder for creating requests to retrieve all `WorkflowLog` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `WorkflowLog` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WorkflowLog`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `WorkflowLog`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WorkflowLog`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(sapOriginOrEntity, instanceId, eventOrder) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, sapOriginOrEntity instanceof WorkflowLog_1.WorkflowLog
            ? sapOriginOrEntity
            : {
                SAP__Origin: sapOriginOrEntity,
                InstanceID: instanceId,
                EventOrder: eventOrder
            });
    }
}
exports.WorkflowLogRequestBuilder = WorkflowLogRequestBuilder;
//# sourceMappingURL=WorkflowLogRequestBuilder.js.map