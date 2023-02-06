"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubstitutesRuleRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SubstitutesRule_1 = require("./SubstitutesRule");
/**
 * Request builder class for operations supported on the {@link SubstitutesRule} entity.
 */
class SubstitutesRuleRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `SubstitutesRule` entity based on its keys.
     * @param sapOrigin Key property. See {@link SubstitutesRule.sapOrigin}.
     * @param substitutionRuleId Key property. See {@link SubstitutesRule.substitutionRuleId}.
     * @returns A request builder for creating requests to retrieve one `SubstitutesRule` entity based on its keys.
     */
    getByKey(sapOrigin, substitutionRuleId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SAP__Origin: sapOrigin,
            SubstitutionRuleID: substitutionRuleId
        });
    }
    /**
     * Returns a request builder for querying all `SubstitutesRule` entities.
     * @returns A request builder for creating requests to retrieve all `SubstitutesRule` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `SubstitutesRule` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SubstitutesRule`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `SubstitutesRule`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SubstitutesRule`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(sapOriginOrEntity, substitutionRuleId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, sapOriginOrEntity instanceof SubstitutesRule_1.SubstitutesRule
            ? sapOriginOrEntity
            : {
                SAP__Origin: sapOriginOrEntity,
                SubstitutionRuleID: substitutionRuleId
            });
    }
}
exports.SubstitutesRuleRequestBuilder = SubstitutesRuleRequestBuilder;
//# sourceMappingURL=SubstitutesRuleRequestBuilder.js.map