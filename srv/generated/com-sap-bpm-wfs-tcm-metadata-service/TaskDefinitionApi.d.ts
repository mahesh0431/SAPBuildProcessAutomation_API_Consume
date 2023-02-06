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
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link
} from '@sap-cloud-sdk/odata-v2';
export declare class TaskDefinitionApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaskDefinition<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  constructor(deSerializers?: DeSerializersT);
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [CustomAttributeDefinitionApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof TaskDefinition;
  requestBuilder(): TaskDefinitionRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    TaskDefinition<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<TaskDefinition<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof TaskDefinition, DeSerializersT>;
  private _schema?;
  get schema(): {
    SAP_ORIGIN: OrderableEdmTypeField<
      TaskDefinition<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TASK_DEFINITION_ID: OrderableEdmTypeField<
      TaskDefinition<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TASK_NAME: OrderableEdmTypeField<
      TaskDefinition<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY: OrderableEdmTypeField<
      TaskDefinition<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
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
    ALL_FIELDS: AllFields<
      TaskDefinition<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >
    >;
  };
}
//# sourceMappingURL=TaskDefinitionApi.d.ts.map
