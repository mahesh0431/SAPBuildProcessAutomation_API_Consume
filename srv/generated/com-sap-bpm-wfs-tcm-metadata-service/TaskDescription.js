"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDescription = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "TaskDescriptionCollection" of service "com.sap.bpm.wfs.tcm.metadata".
 */
class TaskDescription extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.TaskDescription = TaskDescription;
/**
 * Technical entity name for TaskDescription.
 */
TaskDescription._entityName = 'TaskDescriptionCollection';
/**
 * Default url path for the according service.
 */
TaskDescription._defaultServicePath = 'VALUE_IS_UNDEFINED';
/**
 * All key fields of the TaskDescription entity
 */
TaskDescription._keys = ['SAP__Origin', 'InstanceID'];
//# sourceMappingURL=TaskDescription.js.map