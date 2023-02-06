/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkflowLog } from './WorkflowLog';
import { WorkflowLogRequestBuilder } from './WorkflowLogRequestBuilder';
import { UserInfoApi } from './UserInfoApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class WorkflowLogApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WorkflowLog<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link performedByDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERFORMED_BY_DETAILS: OneToOneLink<
      WorkflowLog<DeSerializersT>,
      DeSerializersT,
      UserInfoApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [UserInfoApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      PERFORMED_BY_DETAILS: new OneToOneLink(
        'PerformedByDetails',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = WorkflowLog;

  requestBuilder(): WorkflowLogRequestBuilder<DeSerializersT> {
    return new WorkflowLogRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WorkflowLog<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WorkflowLog<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<WorkflowLog<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof WorkflowLog, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(WorkflowLog, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SAP_ORIGIN: OrderableEdmTypeField<
      WorkflowLog<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INSTANCE_ID: OrderableEdmTypeField<
      WorkflowLog<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EVENT_ORDER: OrderableEdmTypeField<
      WorkflowLog<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REFERENCE_INSTANCE_ID: OrderableEdmTypeField<
      WorkflowLog<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERFORMED_BY: OrderableEdmTypeField<
      WorkflowLog<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERFORMED_BY_NAME: OrderableEdmTypeField<
      WorkflowLog<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: OrderableEdmTypeField<
      WorkflowLog<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TIMESTAMP: OrderableEdmTypeField<
      WorkflowLog<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      WorkflowLog<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPORTS_NAVIGATION: OrderableEdmTypeField<
      WorkflowLog<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    RESULT: OrderableEdmTypeField<
      WorkflowLog<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESULT_TYPE: OrderableEdmTypeField<
      WorkflowLog<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_TIMESTAMP: OrderableEdmTypeField<
      WorkflowLog<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    END_TIMESTAMP: OrderableEdmTypeField<
      WorkflowLog<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link performedByDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERFORMED_BY_DETAILS: OneToOneLink<
      WorkflowLog<DeSerializersT>,
      DeSerializersT,
      UserInfoApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WorkflowLog<DeSerializers>>;
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
         * Static representation of the {@link eventOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVENT_ORDER: fieldBuilder.buildEdmTypeField(
          'EventOrder',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link referenceInstanceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_INSTANCE_ID: fieldBuilder.buildEdmTypeField(
          'ReferenceInstanceID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link performedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERFORMED_BY: fieldBuilder.buildEdmTypeField(
          'PerformedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link performedByName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERFORMED_BY_NAME: fieldBuilder.buildEdmTypeField(
          'PerformedByName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEdmTypeField('Status', 'Edm.String', false),
        /**
         * Static representation of the {@link timestamp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIMESTAMP: fieldBuilder.buildEdmTypeField(
          'Timestamp',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link supportsNavigation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORTS_NAVIGATION: fieldBuilder.buildEdmTypeField(
          'SupportsNavigation',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link result} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESULT: fieldBuilder.buildEdmTypeField('Result', 'Edm.String', true),
        /**
         * Static representation of the {@link resultType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESULT_TYPE: fieldBuilder.buildEdmTypeField(
          'ResultType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creationTimestamp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_TIMESTAMP: fieldBuilder.buildEdmTypeField(
          'CreationTimestamp',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link endTimestamp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_TIMESTAMP: fieldBuilder.buildEdmTypeField(
          'EndTimestamp',
          'Edm.DateTime',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkflowLog)
      };
    }

    return this._schema;
  }
}
