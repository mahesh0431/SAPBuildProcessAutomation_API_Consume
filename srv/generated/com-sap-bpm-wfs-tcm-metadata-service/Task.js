"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "TaskCollection" of service "com.sap.bpm.wfs.tcm.metadata".
 */
class Task extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.Task = Task;
/**
 * Technical entity name for Task.
 */
Task._entityName = 'TaskCollection';
/**
 * Default url path for the according service.
 */
Task._defaultServicePath = 'VALUE_IS_UNDEFINED';
/**
 * All key fields of the Task entity
 */
Task._keys = ['SAP__Origin', 'InstanceID'];
//# sourceMappingURL=Task.js.map