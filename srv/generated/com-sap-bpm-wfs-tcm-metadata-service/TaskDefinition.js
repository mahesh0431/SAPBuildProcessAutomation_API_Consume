"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDefinition = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "TaskDefinitionCollection" of service "com.sap.bpm.wfs.tcm.metadata".
 */
class TaskDefinition extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.TaskDefinition = TaskDefinition;
/**
 * Technical entity name for TaskDefinition.
 */
TaskDefinition._entityName = 'TaskDefinitionCollection';
/**
 * Default url path for the according service.
 */
TaskDefinition._defaultServicePath = 'VALUE_IS_UNDEFINED';
/**
 * All key fields of the TaskDefinition entity
 */
TaskDefinition._keys = ['SAP__Origin', 'TaskDefinitionID'];
//# sourceMappingURL=TaskDefinition.js.map