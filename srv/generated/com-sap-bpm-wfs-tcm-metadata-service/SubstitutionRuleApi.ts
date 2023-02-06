/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubstitutionRule } from './SubstitutionRule';
import { SubstitutionRuleRequestBuilder } from './SubstitutionRuleRequestBuilder';
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
export class SubstitutionRuleApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SubstitutionRule<DeSerializersT>, DeSerializersT>
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

  entityConstructor = SubstitutionRule;

  requestBuilder(): SubstitutionRuleRequestBuilder<DeSerializersT> {
    return new SubstitutionRuleRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SubstitutionRule<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SubstitutionRule<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SubstitutionRule<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SubstitutionRule, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubstitutionRule,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SAP_ORIGIN: OrderableEdmTypeField<
      SubstitutionRule<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUBSTITUTION_RULE_ID: OrderableEdmTypeField<
      SubstitutionRule<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USER: OrderableEdmTypeField<
      SubstitutionRule<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FULL_NAME: OrderableEdmTypeField<
      SubstitutionRule<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BEGIN_DATE: OrderableEdmTypeField<
      SubstitutionRule<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      SubstitutionRule<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    IS_ENABLED: OrderableEdmTypeField<
      SubstitutionRule<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    MODE: OrderableEdmTypeField<
      SubstitutionRule<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUPPORTS_DELETE_SUBSTITUTION_RULE: OrderableEdmTypeField<
      SubstitutionRule<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    SUPPORTS_ENABLE_SUBSTITUTION_RULE: OrderableEdmTypeField<
      SubstitutionRule<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SubstitutionRule<DeSerializers>>;
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
         * Static representation of the {@link substitutionRuleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSTITUTION_RULE_ID: fieldBuilder.buildEdmTypeField(
          'SubstitutionRuleID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link user} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER: fieldBuilder.buildEdmTypeField('User', 'Edm.String', false),
        /**
         * Static representation of the {@link fullName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULL_NAME: fieldBuilder.buildEdmTypeField(
          'FullName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link beginDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BEGIN_DATE: fieldBuilder.buildEdmTypeField(
          'BeginDate',
          'Edm.DateTime',
          false
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link isEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ENABLED: fieldBuilder.buildEdmTypeField(
          'IsEnabled',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link mode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODE: fieldBuilder.buildEdmTypeField('Mode', 'Edm.String', false),
        /**
         * Static representation of the {@link supportsDeleteSubstitutionRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORTS_DELETE_SUBSTITUTION_RULE: fieldBuilder.buildEdmTypeField(
          'SupportsDeleteSubstitutionRule',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link supportsEnableSubstitutionRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORTS_ENABLE_SUBSTITUTION_RULE: fieldBuilder.buildEdmTypeField(
          'SupportsEnableSubstitutionRule',
          'Edm.Boolean',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubstitutionRule)
      };
    }

    return this._schema;
  }
}
