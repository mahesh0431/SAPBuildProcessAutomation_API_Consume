"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAttributeDefinitionApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const CustomAttributeDefinition_1 = require("./CustomAttributeDefinition");
const CustomAttributeDefinitionRequestBuilder_1 = require("./CustomAttributeDefinitionRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustomAttributeDefinitionApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = CustomAttributeDefinition_1.CustomAttributeDefinition;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new CustomAttributeDefinitionRequestBuilder_1.CustomAttributeDefinitionRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(CustomAttributeDefinition_1.CustomAttributeDefinition, this.deSerializers);
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
                 * Static representation of the {@link taskDefinitionId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TASK_DEFINITION_ID: fieldBuilder.buildEdmTypeField('TaskDefinitionID', 'Edm.String', false),
                /**
                 * Static representation of the {@link name} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
                /**
                 * Static representation of the {@link type} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TYPE: fieldBuilder.buildEdmTypeField('Type', 'Edm.String', true),
                /**
                 * Static representation of the {@link label} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LABEL: fieldBuilder.buildEdmTypeField('Label', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', CustomAttributeDefinition_1.CustomAttributeDefinition)
            };
        }
        return this._schema;
    }
}
exports.CustomAttributeDefinitionApi = CustomAttributeDefinitionApi;
//# sourceMappingURL=CustomAttributeDefinitionApi.js.map