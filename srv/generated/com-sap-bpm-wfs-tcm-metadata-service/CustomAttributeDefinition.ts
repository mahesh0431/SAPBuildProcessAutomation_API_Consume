/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { CustomAttributeDefinitionApi } from './CustomAttributeDefinitionApi';

/**
 * This class represents the entity "CustomAttributeDefinitionCollection" of service "com.sap.bpm.wfs.tcm.metadata".
 */
export class CustomAttributeDefinition<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomAttributeDefinitionType<T>
{
  /**
   * Technical entity name for CustomAttributeDefinition.
   */
  static _entityName = 'CustomAttributeDefinitionCollection';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the CustomAttributeDefinition entity
   */
  static _keys = ['SAP__Origin', 'TaskDefinitionID', 'Name'];
  /**
   * Sap Origin.
   * Maximum length: 16.
   */
  sapOrigin!: DeserializedType<T, 'Edm.String'>;
  /**
   * Task Definition Id.
   */
  taskDefinitionId!: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  name!: DeserializedType<T, 'Edm.String'>;
  /**
   * Type.
   * @nullable
   */
  type?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Label.
   * @nullable
   */
  label?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: CustomAttributeDefinitionApi<T>) {
    super(_entityApi);
  }
}

export interface CustomAttributeDefinitionType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sapOrigin: DeserializedType<T, 'Edm.String'>;
  taskDefinitionId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  type?: DeserializedType<T, 'Edm.String'> | null;
  label?: DeserializedType<T, 'Edm.String'> | null;
}
