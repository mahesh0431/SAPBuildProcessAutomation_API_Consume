/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomAttribute } from './CustomAttribute';
import { CustomAttributeRequestBuilder } from './CustomAttributeRequestBuilder';
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
export class CustomAttributeApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustomAttribute<DeSerializersT>, DeSerializersT>
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

  entityConstructor = CustomAttribute;

  requestBuilder(): CustomAttributeRequestBuilder<DeSerializersT> {
    return new CustomAttributeRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomAttribute<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CustomAttribute<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CustomAttribute<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CustomAttribute, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomAttribute,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SAP_ORIGIN: OrderableEdmTypeField<
      CustomAttribute<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INSTANCE_ID: OrderableEdmTypeField<
      CustomAttribute<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      CustomAttribute<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE: OrderableEdmTypeField<
      CustomAttribute<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CustomAttribute<DeSerializers>>;
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
         * Static representation of the {@link instanceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTANCE_ID: fieldBuilder.buildEdmTypeField(
          'InstanceID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomAttribute)
      };
    }

    return this._schema;
  }
}
