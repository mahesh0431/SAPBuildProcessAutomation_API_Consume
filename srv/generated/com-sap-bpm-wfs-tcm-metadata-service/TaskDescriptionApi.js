"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDescriptionApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const TaskDescription_1 = require("./TaskDescription");
const TaskDescriptionRequestBuilder_1 = require("./TaskDescriptionRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class TaskDescriptionApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = TaskDescription_1.TaskDescription;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new TaskDescriptionRequestBuilder_1.TaskDescriptionRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(TaskDescription_1.TaskDescription, this.deSerializers);
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
                 * Static representation of the {@link instanceId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INSTANCE_ID: fieldBuilder.buildEdmTypeField('InstanceID', 'Edm.String', false),
                /**
                 * Static representation of the {@link description} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DESCRIPTION: fieldBuilder.buildEdmTypeField('Description', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', TaskDescription_1.TaskDescription)
            };
        }
        return this._schema;
    }
}
exports.TaskDescriptionApi = TaskDescriptionApi;
//# sourceMappingURL=TaskDescriptionApi.js.map