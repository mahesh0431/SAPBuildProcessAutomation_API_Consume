"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfo = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "UserInfoCollection" of service "com.sap.bpm.wfs.tcm.metadata".
 */
class UserInfo extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.UserInfo = UserInfo;
/**
 * Technical entity name for UserInfo.
 */
UserInfo._entityName = 'UserInfoCollection';
/**
 * Default url path for the according service.
 */
UserInfo._defaultServicePath = 'VALUE_IS_UNDEFINED';
/**
 * All key fields of the UserInfo entity
 */
UserInfo._keys = ['SAP__Origin', 'UniqueName'];
//# sourceMappingURL=UserInfo.js.map