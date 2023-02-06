"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAttributeRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const CustomAttribute_1 = require("./CustomAttribute");
/**
 * Request builder class for operations supported on the {@link CustomAttribute} entity.
 */
class CustomAttributeRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `CustomAttribute` entity based on its keys.
     * @param sapOrigin Key property. See {@link CustomAttribute.sapOrigin}.
     * @param instanceId Key property. See {@link CustomAttribute.instanceId}.
     * @param name Key property. See {@link CustomAttribute.name}.
     * @returns A request builder for creating requests to retrieve one `CustomAttribute` entity based on its keys.
     */
    getByKey(sapOrigin, instanceId, name) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SAP__Origin: sapOrigin,
            InstanceID: instanceId,
            Name: name
        });
    }
    /**
     * Returns a request builder for querying all `CustomAttribute` entities.
     * @returns A request builder for creating requests to retrieve all `CustomAttribute` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `CustomAttribute` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustomAttribute`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `CustomAttribute`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomAttribute`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(sapOriginOrEntity, instanceId, name) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, sapOriginOrEntity instanceof CustomAttribute_1.CustomAttribute
            ? sapOriginOrEntity
            : {
                SAP__Origin: sapOriginOrEntity,
                InstanceID: instanceId,
                Name: name
            });
    }
}
exports.CustomAttributeRequestBuilder = CustomAttributeRequestBuilder;
//# sourceMappingURL=CustomAttributeRequestBuilder.js.map