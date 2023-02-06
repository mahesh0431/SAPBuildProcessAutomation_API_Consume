"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfoApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const UserInfo_1 = require("./UserInfo");
const UserInfoRequestBuilder_1 = require("./UserInfoRequestBuilder");
const Address_1 = require("./Address");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class UserInfoApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = UserInfo_1.UserInfo;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new UserInfoRequestBuilder_1.UserInfoRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(UserInfo_1.UserInfo, this.deSerializers);
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
                 * Static representation of the {@link uniqueName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UNIQUE_NAME: fieldBuilder.buildEdmTypeField('UniqueName', 'Edm.String', false),
                /**
                 * Static representation of the {@link address} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS: fieldBuilder.buildComplexTypeField('Address', Address_1.AddressField, true),
                /**
                 * Static representation of the {@link displayName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DISPLAY_NAME: fieldBuilder.buildEdmTypeField('DisplayName', 'Edm.String', true),
                /**
                 * Static representation of the {@link firstName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FIRST_NAME: fieldBuilder.buildEdmTypeField('FirstName', 'Edm.String', true),
                /**
                 * Static representation of the {@link lastName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_NAME: fieldBuilder.buildEdmTypeField('LastName', 'Edm.String', true),
                /**
                 * Static representation of the {@link company} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
                /**
                 * Static representation of the {@link department} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DEPARTMENT: fieldBuilder.buildEdmTypeField('Department', 'Edm.String', true),
                /**
                 * Static representation of the {@link email} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true),
                /**
                 * Static representation of the {@link workPhone} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WORK_PHONE: fieldBuilder.buildEdmTypeField('WorkPhone', 'Edm.String', true),
                /**
                 * Static representation of the {@link mobilePhone} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MOBILE_PHONE: fieldBuilder.buildEdmTypeField('MobilePhone', 'Edm.String', true),
                /**
                 * Static representation of the {@link homePhone} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HOME_PHONE: fieldBuilder.buildEdmTypeField('HomePhone', 'Edm.String', true),
                /**
                 * Static representation of the {@link mimeType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MIME_TYPE: fieldBuilder.buildEdmTypeField('mime_type', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', UserInfo_1.UserInfo)
            };
        }
        return this._schema;
    }
}
exports.UserInfoApi = UserInfoApi;
//# sourceMappingURL=UserInfoApi.js.map