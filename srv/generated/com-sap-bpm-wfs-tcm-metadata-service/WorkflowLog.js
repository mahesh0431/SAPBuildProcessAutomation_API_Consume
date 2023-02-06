"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowLog = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "WorkflowLogCollection" of service "com.sap.bpm.wfs.tcm.metadata".
 */
class WorkflowLog extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.WorkflowLog = WorkflowLog;
/**
 * Technical entity name for WorkflowLog.
 */
WorkflowLog._entityName = 'WorkflowLogCollection';
/**
 * Default url path for the according service.
 */
WorkflowLog._defaultServicePath = 'VALUE_IS_UNDEFINED';
/**
 * All key fields of the WorkflowLog entity
 */
WorkflowLog._keys = ['SAP__Origin', 'InstanceID', 'EventOrder'];
//# sourceMappingURL=WorkflowLog.js.map