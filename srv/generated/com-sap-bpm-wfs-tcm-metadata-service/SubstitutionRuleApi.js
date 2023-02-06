"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubstitutionRuleApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const SubstitutionRule_1 = require("./SubstitutionRule");
const SubstitutionRuleRequestBuilder_1 = require("./SubstitutionRuleRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SubstitutionRuleApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SubstitutionRule_1.SubstitutionRule;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new SubstitutionRuleRequestBuilder_1.SubstitutionRuleRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SubstitutionRule_1.SubstitutionRule, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link sapOrigin} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SAP_ORIGIN: fieldBuilder.buildEdmTypeField('SAP__Origin', 'Edm.String', false),
                /**
                 * Static representation of the {@link substitutionRuleId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUBSTITUTION_RULE_ID: fieldBuilder.buildEdmTypeField('SubstitutionRuleID', 'Edm.String', false),
                /**
                 * Static representation of the {@link user} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                USER: fieldBuilder.buildEdmTypeField('User', 'Edm.String', false),
                /**
                 * Static representation of the {@link fullName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FULL_NAME: fieldBuilder.buildEdmTypeField('FullName', 'Edm.String', false),
                /**
                 * Static representation of the {@link beginDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BEGIN_DATE: fieldBuilder.buildEdmTypeField('BeginDate', 'Edm.DateTime', false),
                /**
                 * Static representation of the {@link endDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                END_DATE: fieldBuilder.buildEdmTypeField('EndDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link isEnabled} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_ENABLED: fieldBuilder.buildEdmTypeField('IsEnabled', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link mode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MODE: fieldBuilder.buildEdmTypeField('Mode', 'Edm.String', false),
                /**
                 * Static representation of the {@link supportsDeleteSubstitutionRule} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPORTS_DELETE_SUBSTITUTION_RULE: fieldBuilder.buildEdmTypeField('SupportsDeleteSubstitutionRule', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link supportsEnableSubstitutionRule} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPORTS_ENABLE_SUBSTITUTION_RULE: fieldBuilder.buildEdmTypeField('SupportsEnableSubstitutionRule', 'Edm.Boolean', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', SubstitutionRule_1.SubstitutionRule)
            };
        }
        return this._schema;
    }
}
exports.SubstitutionRuleApi = SubstitutionRuleApi;
//# sourceMappingURL=SubstitutionRuleApi.js.map