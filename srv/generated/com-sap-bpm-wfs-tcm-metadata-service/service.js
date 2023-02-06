"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comSapBpmWfsTcmMetadataService = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const CustomAttributeApi_1 = require("./CustomAttributeApi");
const CustomAttributeDefinitionApi_1 = require("./CustomAttributeDefinitionApi");
const SubstitutesRuleApi_1 = require("./SubstitutesRuleApi");
const SubstitutionRuleApi_1 = require("./SubstitutionRuleApi");
const TaskApi_1 = require("./TaskApi");
const TaskDefinitionApi_1 = require("./TaskDefinitionApi");
const TaskDescriptionApi_1 = require("./TaskDescriptionApi");
const UserInfoApi_1 = require("./UserInfoApi");
const WorkflowLogApi_1 = require("./WorkflowLogApi");
const function_imports_1 = require("./function-imports");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BatchRequest_1 = require("./BatchRequest");
function comSapBpmWfsTcmMetadataService(deSerializers = odata_v2_1.defaultDeSerializers) {
    return new ComSapBpmWfsTcmMetadataService((0, odata_v2_1.mergeDefaultDeSerializersWith)(deSerializers));
}
exports.comSapBpmWfsTcmMetadataService = comSapBpmWfsTcmMetadataService;
class ComSapBpmWfsTcmMetadataService {
    constructor(deSerializers) {
        this.apis = {};
        this.deSerializers = deSerializers;
    }
    initApi(key, ctor) {
        if (!this.apis[key]) {
            this.apis[key] = new ctor(this.deSerializers);
        }
        return this.apis[key];
    }
    get customAttributeApi() {
        return this.initApi('customAttributeApi', CustomAttributeApi_1.CustomAttributeApi);
    }
    get customAttributeDefinitionApi() {
        return this.initApi('customAttributeDefinitionApi', CustomAttributeDefinitionApi_1.CustomAttributeDefinitionApi);
    }
    get substitutesRuleApi() {
        return this.initApi('substitutesRuleApi', SubstitutesRuleApi_1.SubstitutesRuleApi);
    }
    get substitutionRuleApi() {
        return this.initApi('substitutionRuleApi', SubstitutionRuleApi_1.SubstitutionRuleApi);
    }
    get taskApi() {
        const api = this.initApi('taskApi', TaskApi_1.TaskApi);
        const linkedApis = [
            this.initApi('taskDescriptionApi', TaskDescriptionApi_1.TaskDescriptionApi),
            this.initApi('taskDefinitionApi', TaskDefinitionApi_1.TaskDefinitionApi),
            this.initApi('customAttributeApi', CustomAttributeApi_1.CustomAttributeApi),
            this.initApi('workflowLogApi', WorkflowLogApi_1.WorkflowLogApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get taskDefinitionApi() {
        const api = this.initApi('taskDefinitionApi', TaskDefinitionApi_1.TaskDefinitionApi);
        const linkedApis = [
            this.initApi('customAttributeDefinitionApi', CustomAttributeDefinitionApi_1.CustomAttributeDefinitionApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get taskDescriptionApi() {
        return this.initApi('taskDescriptionApi', TaskDescriptionApi_1.TaskDescriptionApi);
    }
    get userInfoApi() {
        return this.initApi('userInfoApi', UserInfoApi_1.UserInfoApi);
    }
    get workflowLogApi() {
        const api = this.initApi('workflowLogApi', WorkflowLogApi_1.WorkflowLogApi);
        const linkedApis = [this.initApi('userInfoApi', UserInfoApi_1.UserInfoApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    /**
     * @deprecated Since v2.13.0. Use {@link operations} instead.
     */
    get functionImports() {
        return {
            decisionOptions: (parameter) => (0, function_imports_1.decisionOptions)(parameter, this.deSerializers),
            claim: (parameter) => (0, function_imports_1.claim)(parameter, this.deSerializers),
            release: (parameter) => (0, function_imports_1.release)(parameter, this.deSerializers),
            forward: (parameter) => (0, function_imports_1.forward)(parameter, this.deSerializers),
            deleteSubstitutionRule: (parameter) => (0, function_imports_1.deleteSubstitutionRule)(parameter, this.deSerializers),
            enableSubstitutionRule: (parameter) => (0, function_imports_1.enableSubstitutionRule)(parameter, this.deSerializers)
        };
    }
    /**
     * Get unbound functions and actions.
     */
    get operations() {
        return { ...this.functionImports };
    }
    get batch() {
        return BatchRequest_1.batch;
    }
    get changeset() {
        return BatchRequest_1.changeset;
    }
}
//# sourceMappingURL=service.js.map