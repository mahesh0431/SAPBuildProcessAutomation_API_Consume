"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Task_1 = require("./Task");
const TaskRequestBuilder_1 = require("./TaskRequestBuilder");
const TaskSupports_1 = require("./TaskSupports");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class TaskApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Task_1.Task;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            DESCRIPTION: new odata_v2_1.OneToOneLink('Description', this, linkedApis[0]),
            TASK_DEFINITION_DATA: new odata_v2_1.OneToOneLink('TaskDefinitionData', this, linkedApis[1]),
            CUSTOM_ATTRIBUTE_DATA: new odata_v2_1.Link('CustomAttributeData', this, linkedApis[2]),
            WORKFLOW_LOGS: new odata_v2_1.Link('WorkflowLogs', this, linkedApis[3])
        };
        return this;
    }
    requestBuilder() {
        return new TaskRequestBuilder_1.TaskRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Task_1.Task, this.deSerializers);
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
                 * Static representation of the {@link taskDefinitionId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TASK_DEFINITION_ID: fieldBuilder.buildEdmTypeField('TaskDefinitionID', 'Edm.String', true),
                /**
                 * Static representation of the {@link taskDefinitionName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TASK_DEFINITION_NAME: fieldBuilder.buildEdmTypeField('TaskDefinitionName', 'Edm.String', true),
                /**
                 * Static representation of the {@link status} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STATUS: fieldBuilder.buildEdmTypeField('Status', 'Edm.String', true),
                /**
                 * Static representation of the {@link taskTitle} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TASK_TITLE: fieldBuilder.buildEdmTypeField('TaskTitle', 'Edm.String', true),
                /**
                 * Static representation of the {@link hasComments} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HAS_COMMENTS: fieldBuilder.buildEdmTypeField('HasComments', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link hasAttachments} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HAS_ATTACHMENTS: fieldBuilder.buildEdmTypeField('HasAttachments', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link hasPotentialOwners} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HAS_POTENTIAL_OWNERS: fieldBuilder.buildEdmTypeField('HasPotentialOwners', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link supportsClaim} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPORTS_CLAIM: fieldBuilder.buildEdmTypeField('SupportsClaim', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link supportsRelease} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPORTS_RELEASE: fieldBuilder.buildEdmTypeField('SupportsRelease', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link supportsForward} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPORTS_FORWARD: fieldBuilder.buildEdmTypeField('SupportsForward', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link supportsComments} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPORTS_COMMENTS: fieldBuilder.buildEdmTypeField('SupportsComments', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link supportsAttachments} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPORTS_ATTACHMENTS: fieldBuilder.buildEdmTypeField('SupportsAttachments', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link createdOn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_ON: fieldBuilder.buildEdmTypeField('CreatedOn', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link createdBy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_BY: fieldBuilder.buildEdmTypeField('CreatedBy', 'Edm.String', true),
                /**
                 * Static representation of the {@link createdByName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_BY_NAME: fieldBuilder.buildEdmTypeField('CreatedByName', 'Edm.String', true),
                /**
                 * Static representation of the {@link processor} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROCESSOR: fieldBuilder.buildEdmTypeField('Processor', 'Edm.String', true),
                /**
                 * Static representation of the {@link completionDeadLine} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPLETION_DEAD_LINE: fieldBuilder.buildEdmTypeField('CompletionDeadLine', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link substitutedUserName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUBSTITUTED_USER_NAME: fieldBuilder.buildEdmTypeField('SubstitutedUserName', 'Edm.String', true),
                /**
                 * Static representation of the {@link priority} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRIORITY: fieldBuilder.buildEdmTypeField('Priority', 'Edm.String', true),
                /**
                 * Static representation of the {@link priorityNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRIORITY_NUMBER: fieldBuilder.buildEdmTypeField('PriorityNumber', 'Edm.Int32', true),
                /**
                 * Static representation of the {@link taskSupports} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TASK_SUPPORTS: fieldBuilder.buildComplexTypeField('TaskSupports', TaskSupports_1.TaskSupportsField, true),
                /**
                 * Static representation of the {@link guiLink} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                GUI_LINK: fieldBuilder.buildEdmTypeField('GUI_Link', 'Edm.String', true),
                /**
                 * Static representation of the {@link confidenceLevel} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONFIDENCE_LEVEL: fieldBuilder.buildEdmTypeField('ConfidenceLevel', 'Edm.Decimal', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Task_1.Task)
            };
        }
        return this._schema;
    }
}
exports.TaskApi = TaskApi;
//# sourceMappingURL=TaskApi.js.map