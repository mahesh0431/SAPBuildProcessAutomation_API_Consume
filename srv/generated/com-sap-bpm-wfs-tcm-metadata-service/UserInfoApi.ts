/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserInfo } from './UserInfo';
import { UserInfoRequestBuilder } from './UserInfoRequestBuilder';
import { Address, AddressField } from './Address';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class UserInfoApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<UserInfo<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = UserInfo;

  requestBuilder(): UserInfoRequestBuilder<DeSerializersT> {
    return new UserInfoRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<UserInfo<DeSerializersT>, DeSerializersT> {
    return entityBuilder<UserInfo<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<UserInfo<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof UserInfo, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(UserInfo, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SAP_ORIGIN: OrderableEdmTypeField<
      UserInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    UNIQUE_NAME: OrderableEdmTypeField<
      UserInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS: AddressField<UserInfo<DeSerializers>, DeSerializersT, true, true>;
    DISPLAY_NAME: OrderableEdmTypeField<
      UserInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIRST_NAME: OrderableEdmTypeField<
      UserInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_NAME: OrderableEdmTypeField<
      UserInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      UserInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPARTMENT: OrderableEdmTypeField<
      UserInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      UserInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_PHONE: OrderableEdmTypeField<
      UserInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MOBILE_PHONE: OrderableEdmTypeField<
      UserInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOME_PHONE: OrderableEdmTypeField<
      UserInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIME_TYPE: OrderableEdmTypeField<
      UserInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<UserInfo<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link sapOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAP_ORIGIN: fieldBuilder.buildEdmTypeField(
          'SAP__Origin',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link uniqueName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIQUE_NAME: fieldBuilder.buildEdmTypeField(
          'UniqueName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link address} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS: fieldBuilder.buildComplexTypeField(
          'Address',
          AddressField,
          true
        ),
        /**
         * Static representation of the {@link displayName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_NAME: fieldBuilder.buildEdmTypeField(
          'DisplayName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link firstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'FirstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_NAME: fieldBuilder.buildEdmTypeField(
          'LastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link department} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT: fieldBuilder.buildEdmTypeField(
          'Department',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true),
        /**
         * Static representation of the {@link workPhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_PHONE: fieldBuilder.buildEdmTypeField(
          'WorkPhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mobilePhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MOBILE_PHONE: fieldBuilder.buildEdmTypeField(
          'MobilePhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link homePhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOME_PHONE: fieldBuilder.buildEdmTypeField(
          'HomePhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mimeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIME_TYPE: fieldBuilder.buildEdmTypeField(
          'mime_type',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', UserInfo)
      };
    }

    return this._schema;
  }
}
