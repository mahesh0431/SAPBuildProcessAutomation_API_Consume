"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAttributeDefinitionRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const CustomAttributeDefinition_1 = require("./CustomAttributeDefinition");
/**
 * Request builder class for operations supported on the {@link CustomAttributeDefinition} entity.
 */
class CustomAttributeDefinitionRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `CustomAttributeDefinition` entity based on its keys.
     * @param sapOrigin Key property. See {@link CustomAttributeDefinition.sapOrigin}.
     * @param taskDefinitionId Key property. See {@link CustomAttributeDefinition.taskDefinitionId}.
     * @param name Key property. See {@link CustomAttributeDefinition.name}.
     * @returns A request builder for creating requests to retrieve one `CustomAttributeDefinition` entity based on its keys.
     */
    getByKey(sapOrigin, taskDefinitionId, name) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SAP__Origin: sapOrigin,
            TaskDefinitionID: taskDefinitionId,
            Name: name
        });
    }
    /**
     * Returns a request builder for querying all `CustomAttributeDefinition` entities.
     * @returns A request builder for creating requests to retrieve all `CustomAttributeDefinition` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `CustomAttributeDefinition` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustomAttributeDefinition`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `CustomAttributeDefinition`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomAttributeDefinition`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(sapOriginOrEntity, taskDefinitionId, name) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, sapOriginOrEntity instanceof CustomAttributeDefinition_1.CustomAttributeDefinition
            ? sapOriginOrEntity
            : {
                SAP__Origin: sapOriginOrEntity,
                TaskDefinitionID: taskDefinitionId,
                Name: name
            });
    }
}
exports.CustomAttributeDefinitionRequestBuilder = CustomAttributeDefinitionRequestBuilder;
//# sourceMappingURL=CustomAttributeDefinitionRequestBuilder.js.map