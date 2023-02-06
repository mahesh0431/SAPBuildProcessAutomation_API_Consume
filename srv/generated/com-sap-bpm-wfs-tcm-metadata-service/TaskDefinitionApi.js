"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDefinitionApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const TaskDefinition_1 = require("./TaskDefinition");
const TaskDefinitionRequestBuilder_1 = require("./TaskDefinitionRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class TaskDefinitionApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = TaskDefinition_1.TaskDefinition;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            CUSTOM_ATTRIBUTE_DEFINITION_DATA: new odata_v2_1.Link('CustomAttributeDefinitionData', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new TaskDefinitionRequestBuilder_1.TaskDefinitionRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(TaskDefinition_1.TaskDefinition, this.deSerializers);
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
                 * Static representation of the {@link taskName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TASK_NAME: fieldBuilder.buildEdmTypeField('TaskName', 'Edm.String', true),
                /**
                 * Static representation of the {@link category} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CATEGORY: fieldBuilder.buildEdmTypeField('Category', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', TaskDefinition_1.TaskDefinition)
            };
        }
        return this._schema;
    }
}
exports.TaskDefinitionApi = TaskDefinitionApi;
//# sourceMappingURL=TaskDefinitionApi.js.map