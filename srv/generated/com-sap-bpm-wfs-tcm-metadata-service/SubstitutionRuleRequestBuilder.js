"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubstitutionRuleRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SubstitutionRule_1 = require("./SubstitutionRule");
/**
 * Request builder class for operations supported on the {@link SubstitutionRule} entity.
 */
class SubstitutionRuleRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `SubstitutionRule` entity based on its keys.
     * @param sapOrigin Key property. See {@link SubstitutionRule.sapOrigin}.
     * @param substitutionRuleId Key property. See {@link SubstitutionRule.substitutionRuleId}.
     * @returns A request builder for creating requests to retrieve one `SubstitutionRule` entity based on its keys.
     */
    getByKey(sapOrigin, substitutionRuleId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SAP__Origin: sapOrigin,
            SubstitutionRuleID: substitutionRuleId
        });
    }
    /**
     * Returns a request builder for querying all `SubstitutionRule` entities.
     * @returns A request builder for creating requests to retrieve all `SubstitutionRule` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `SubstitutionRule` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SubstitutionRule`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `SubstitutionRule`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SubstitutionRule`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(sapOriginOrEntity, substitutionRuleId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, sapOriginOrEntity instanceof SubstitutionRule_1.SubstitutionRule
            ? sapOriginOrEntity
            : {
                SAP__Origin: sapOriginOrEntity,
                SubstitutionRuleID: substitutionRuleId
            });
    }
}
exports.SubstitutionRuleRequestBuilder = SubstitutionRuleRequestBuilder;
//# sourceMappingURL=SubstitutionRuleRequestBuilder.js.map