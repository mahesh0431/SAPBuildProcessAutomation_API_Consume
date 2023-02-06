/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubstitutesRule } from './SubstitutesRule';
import { SubstitutesRuleRequestBuilder } from './SubstitutesRuleRequestBuilder';
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
export class SubstitutesRuleApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SubstitutesRule<DeSerializersT>, DeSerializersT>
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

  entityConstructor = SubstitutesRule;

  requestBuilder(): SubstitutesRuleRequestBuilder<DeSerializersT> {
    return new SubstitutesRuleRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SubstitutesRule<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SubstitutesRule<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SubstitutesRule<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SubstitutesRule, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubstitutesRule,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SAP_ORIGIN: OrderableEdmTypeField<
      SubstitutesRule<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUBSTITUTION_RULE_ID: OrderableEdmTypeField<
      SubstitutesRule<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USER: OrderableEdmTypeField<
      SubstitutesRule<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FULL_NAME: OrderableEdmTypeField<
      SubstitutesRule<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BEGIN_DATE: OrderableEdmTypeField<
      SubstitutesRule<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      SubstitutesRule<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    IS_ENABLED: OrderableEdmTypeField<
      SubstitutesRule<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    MODE: OrderableEdmTypeField<
      SubstitutesRule<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUPPORTS_DELETE_SUBSTITUTION_RULE: OrderableEdmTypeField<
      SubstitutesRule<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    SUPPORTS_ENABLE_SUBSTITUTION_RULE: OrderableEdmTypeField<
      SubstitutesRule<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SubstitutesRule<DeSerializers>>;
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
        ALL_FIELDS: new AllFields('*', SubstitutesRule)
      };
    }

    return this._schema;
  }
}
