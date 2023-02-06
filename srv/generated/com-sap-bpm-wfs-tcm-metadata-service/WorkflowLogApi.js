"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowLogApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const WorkflowLog_1 = require("./WorkflowLog");
const WorkflowLogRequestBuilder_1 = require("./WorkflowLogRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class WorkflowLogApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = WorkflowLog_1.WorkflowLog;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PERFORMED_BY_DETAILS: new odata_v2_1.OneToOneLink('PerformedByDetails', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new WorkflowLogRequestBuilder_1.WorkflowLogRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(WorkflowLog_1.WorkflowLog, this.deSerializers);
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
                 * Static representation of the {@link eventOrder} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EVENT_ORDER: fieldBuilder.buildEdmTypeField('EventOrder', 'Edm.Int32', false),
                /**
                 * Static representation of the {@link referenceInstanceId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REFERENCE_INSTANCE_ID: fieldBuilder.buildEdmTypeField('ReferenceInstanceID', 'Edm.String', false),
                /**
                 * Static representation of the {@link performedBy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERFORMED_BY: fieldBuilder.buildEdmTypeField('PerformedBy', 'Edm.String', true),
                /**
                 * Static representation of the {@link performedByName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERFORMED_BY_NAME: fieldBuilder.buildEdmTypeField('PerformedByName', 'Edm.String', true),
                /**
                 * Static representation of the {@link status} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STATUS: fieldBuilder.buildEdmTypeField('Status', 'Edm.String', false),
                /**
                 * Static representation of the {@link timestamp} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIMESTAMP: fieldBuilder.buildEdmTypeField('Timestamp', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link description} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DESCRIPTION: fieldBuilder.buildEdmTypeField('Description', 'Edm.String', true),
                /**
                 * Static representation of the {@link supportsNavigation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPORTS_NAVIGATION: fieldBuilder.buildEdmTypeField('SupportsNavigation', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link result} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RESULT: fieldBuilder.buildEdmTypeField('Result', 'Edm.String', true),
                /**
                 * Static representation of the {@link resultType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RESULT_TYPE: fieldBuilder.buildEdmTypeField('ResultType', 'Edm.String', true),
                /**
                 * Static representation of the {@link creationTimestamp} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATION_TIMESTAMP: fieldBuilder.buildEdmTypeField('CreationTimestamp', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link endTimestamp} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                END_TIMESTAMP: fieldBuilder.buildEdmTypeField('EndTimestamp', 'Edm.DateTime', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', WorkflowLog_1.WorkflowLog)
            };
        }
        return this._schema;
    }
}
exports.WorkflowLogApi = WorkflowLogApi;
//# sourceMappingURL=WorkflowLogApi.js.map