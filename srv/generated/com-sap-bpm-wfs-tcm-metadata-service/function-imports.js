"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functionImports = exports.enableSubstitutionRule = exports.deleteSubstitutionRule = exports.forward = exports.release = exports.claim = exports.decisionOptions = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const service_1 = require("./service");
const DecisionOption_1 = require("./DecisionOption");
const SubstitutionRuleReturn_1 = require("./SubstitutionRuleReturn");
/**
 * Decision Options.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function decisionOptions(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        sapOrigin: new odata_v2_1.FunctionImportParameter('SAP__Origin', 'Edm.String', parameters.sapOrigin),
        instanceId: new odata_v2_1.FunctionImportParameter('InstanceID', 'Edm.String', parameters.instanceId)
    };
    return new odata_v2_1.FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'DecisionOptions', data => (0, odata_v2_1.transformReturnValueForComplexTypeList)(data, data => (0, odata_v2_1.entityDeserializer)(deSerializers || odata_v2_1.defaultDeSerializers).deserializeComplexType(data, DecisionOption_1.DecisionOption)), params, deSerializers);
}
exports.decisionOptions = decisionOptions;
/**
 * Claim.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function claim(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        sapOrigin: new odata_v2_1.FunctionImportParameter('SAP__Origin', 'Edm.String', parameters.sapOrigin),
        instanceId: new odata_v2_1.FunctionImportParameter('InstanceID', 'Edm.String', parameters.instanceId),
        comments: new odata_v2_1.FunctionImportParameter('Comments', 'Edm.String', parameters.comments)
    };
    return new odata_v2_1.FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'Claim', data => (0, odata_v2_1.transformReturnValueForEntity)(data, (0, service_1.comSapBpmWfsTcmMetadataService)(deSerializers).taskApi), params, deSerializers);
}
exports.claim = claim;
/**
 * Release.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function release(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        sapOrigin: new odata_v2_1.FunctionImportParameter('SAP__Origin', 'Edm.String', parameters.sapOrigin),
        instanceId: new odata_v2_1.FunctionImportParameter('InstanceID', 'Edm.String', parameters.instanceId)
    };
    return new odata_v2_1.FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'Release', data => (0, odata_v2_1.transformReturnValueForEntity)(data, (0, service_1.comSapBpmWfsTcmMetadataService)(deSerializers).taskApi), params, deSerializers);
}
exports.release = release;
/**
 * Forward.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function forward(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        sapOrigin: new odata_v2_1.FunctionImportParameter('SAP__Origin', 'Edm.String', parameters.sapOrigin),
        instanceId: new odata_v2_1.FunctionImportParameter('InstanceID', 'Edm.String', parameters.instanceId),
        forwardTo: new odata_v2_1.FunctionImportParameter('ForwardTo', 'Edm.String', parameters.forwardTo)
    };
    return new odata_v2_1.FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'Forward', data => (0, odata_v2_1.transformReturnValueForEntity)(data, (0, service_1.comSapBpmWfsTcmMetadataService)(deSerializers).taskApi), params, deSerializers);
}
exports.forward = forward;
/**
 * Delete Substitution Rule.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function deleteSubstitutionRule(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        sapOrigin: new odata_v2_1.FunctionImportParameter('SAP__Origin', 'Edm.String', parameters.sapOrigin),
        substitutionRuleId: new odata_v2_1.FunctionImportParameter('SubstitutionRuleID', 'Edm.String', parameters.substitutionRuleId)
    };
    return new odata_v2_1.FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'DeleteSubstitutionRule', data => (0, odata_v2_1.transformReturnValueForComplexType)(data, data => (0, odata_v2_1.entityDeserializer)(deSerializers || odata_v2_1.defaultDeSerializers).deserializeComplexType(data, SubstitutionRuleReturn_1.SubstitutionRuleReturn)), params, deSerializers);
}
exports.deleteSubstitutionRule = deleteSubstitutionRule;
/**
 * Enable Substitution Rule. The 'execute' method does not exist when using this function import. Please use the 'executeRaw' for getting the raw response.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function enableSubstitutionRule(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        sapOrigin: new odata_v2_1.FunctionImportParameter('SAP__Origin', 'Edm.String', parameters.sapOrigin),
        substitutionRuleId: new odata_v2_1.FunctionImportParameter('SubstitutionRuleID', 'Edm.String', parameters.substitutionRuleId),
        enabled: new odata_v2_1.FunctionImportParameter('Enabled', 'Edm.Boolean', parameters.enabled)
    };
    return new odata_v2_1.FunctionImportRequestBuilder('post', 'VALUE_IS_UNDEFINED', 'EnableSubstitutionRule', data => (0, odata_v2_1.throwErrorWhenReturnTypeIsUnionType)(data, 'EnableSubstitutionRule'), params, deSerializers);
}
exports.enableSubstitutionRule = enableSubstitutionRule;
/**
 * @deprecated Since v2.13.0. Use `operations` instead.
 */
exports.functionImports = {
    decisionOptions,
    claim,
    release,
    forward,
    deleteSubstitutionRule,
    enableSubstitutionRule
};
//# sourceMappingURL=function-imports.js.map