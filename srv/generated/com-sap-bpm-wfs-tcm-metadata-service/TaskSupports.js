"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSupports = exports.TaskSupportsField = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * TaskSupportsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
class TaskSupportsField extends odata_v2_1.ComplexTypeField {
    /**
     * Creates an instance of TaskSupportsField.
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName, fieldOf, deSerializers, fieldOptions) {
        super(fieldName, fieldOf, deSerializers, TaskSupports, fieldOptions);
        this._fieldBuilder = new odata_v2_1.FieldBuilder(this, this.deSerializers);
        /**
         * Representation of the {@link TaskSupports.description} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.description = this._fieldBuilder.buildEdmTypeField('Description', 'Edm.Boolean', true);
        /**
         * Representation of the {@link TaskSupports.customAttributeData} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.customAttributeData = this._fieldBuilder.buildEdmTypeField('CustomAttributeData', 'Edm.Boolean', true);
        /**
         * Representation of the {@link TaskSupports.uiExecutionLink} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.uiExecutionLink = this._fieldBuilder.buildEdmTypeField('UIExecutionLink', 'Edm.Boolean', true);
        /**
         * Representation of the {@link TaskSupports.workflowLog} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.workflowLog = this._fieldBuilder.buildEdmTypeField('WorkflowLog', 'Edm.Boolean', true);
        /**
         * Representation of the {@link TaskSupports.claim} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.claim = this._fieldBuilder.buildEdmTypeField('Claim', 'Edm.Boolean', true);
        /**
         * Representation of the {@link TaskSupports.release} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.release = this._fieldBuilder.buildEdmTypeField('Release', 'Edm.Boolean', true);
        /**
         * Representation of the {@link TaskSupports.forward} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.forward = this._fieldBuilder.buildEdmTypeField('Forward', 'Edm.Boolean', true);
    }
}
exports.TaskSupportsField = TaskSupportsField;
var TaskSupports;
(function (TaskSupports) {
    /**
     * Metadata information on all properties of the `TaskSupports` complex type.
     */
    TaskSupports._propertyMetadata = [
        {
            originalName: 'Description',
            name: 'description',
            type: 'Edm.Boolean',
            isCollection: false
        },
        {
            originalName: 'CustomAttributeData',
            name: 'customAttributeData',
            type: 'Edm.Boolean',
            isCollection: false
        },
        {
            originalName: 'UIExecutionLink',
            name: 'uiExecutionLink',
            type: 'Edm.Boolean',
            isCollection: false
        },
        {
            originalName: 'WorkflowLog',
            name: 'workflowLog',
            type: 'Edm.Boolean',
            isCollection: false
        },
        {
            originalName: 'Claim',
            name: 'claim',
            type: 'Edm.Boolean',
            isCollection: false
        },
        {
            originalName: 'Release',
            name: 'release',
            type: 'Edm.Boolean',
            isCollection: false
        },
        {
            originalName: 'Forward',
            name: 'forward',
            type: 'Edm.Boolean',
            isCollection: false
        }
    ];
})(TaskSupports = exports.TaskSupports || (exports.TaskSupports = {}));
//# sourceMappingURL=TaskSupports.js.map