/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaskDescription } from './TaskDescription';
import { TaskDescriptionRequestBuilder } from './TaskDescriptionRequestBuilder';
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
export class TaskDescriptionApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaskDescription<DeSerializersT>, DeSerializersT>
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

  entityConstructor = TaskDescription;

  requestBuilder(): TaskDescriptionRequestBuilder<DeSerializersT> {
    return new TaskDescriptionRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaskDescription<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaskDescription<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TaskDescription<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TaskDescription, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaskDescription,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SAP_ORIGIN: OrderableEdmTypeField<
      TaskDescription<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INSTANCE_ID: OrderableEdmTypeField<
      TaskDescription<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      TaskDescription<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<TaskDescription<DeSerializers>>;
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaskDescription)
      };
    }

    return this._schema;
  }
}
