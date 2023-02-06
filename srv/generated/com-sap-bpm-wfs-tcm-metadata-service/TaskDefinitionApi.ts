/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaskDefinition } from './TaskDefinition';
import { TaskDefinitionRequestBuilder } from './TaskDefinitionRequestBuilder';
import { CustomAttributeDefinitionApi } from './CustomAttributeDefinitionApi';
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
  OrderableEdmTypeField,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class TaskDefinitionApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaskDefinition<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link customAttributeDefinitionData} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOM_ATTRIBUTE_DEFINITION_DATA: Link<
      TaskDefinition<DeSerializersT>,
      DeSerializersT,
      CustomAttributeDefinitionApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [CustomAttributeDefinitionApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CUSTOM_ATTRIBUTE_DEFINITION_DATA: new Link(
        'CustomAttributeDefinitionData',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = TaskDefinition;

  requestBuilder(): TaskDefinitionRequestBuilder<DeSerializersT> {
    return new TaskDefinitionRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaskDefinition<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaskDefinition<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TaskDefinition<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TaskDefinition, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(TaskDefinition, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SAP_ORIGIN: OrderableEdmTypeField<
      TaskDefinition<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TASK_DEFINITION_ID: OrderableEdmTypeField<
      TaskDefinition<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TASK_NAME: OrderableEdmTypeField<
      TaskDefinition<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY: OrderableEdmTypeField<
      TaskDefinition<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customAttributeDefinitionData} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOM_ATTRIBUTE_DEFINITION_DATA: Link<
      TaskDefinition<DeSerializersT>,
      DeSerializersT,
      CustomAttributeDefinitionApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TaskDefinition<DeSerializers>>;
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
         * Static representation of the {@link taskDefinitionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_DEFINITION_ID: fieldBuilder.buildEdmTypeField(
          'TaskDefinitionID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taskName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_NAME: fieldBuilder.buildEdmTypeField(
          'TaskName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEdmTypeField(
          'Category',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaskDefinition)
      };
    }

    return this._schema;
  }
}
