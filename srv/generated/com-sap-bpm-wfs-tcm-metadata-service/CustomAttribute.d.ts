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
import type { CustomAttributeApi } from './CustomAttributeApi';
/**
 * This class represents the entity "CustomAttributeCollection" of service "com.sap.bpm.wfs.tcm.metadata".
 */
export declare class CustomAttribute<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomAttributeType<T>
{
  readonly _entityApi: CustomAttributeApi<T>;
  /**
   * Technical entity name for CustomAttribute.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the CustomAttribute entity
   */
  static _keys: string[];
  /**
   * Sap Origin.
   * Maximum length: 16.
   */
  sapOrigin: DeserializedType<T, 'Edm.String'>;
  /**
   * Instance Id.
   */
  instanceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  name: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   * @nullable
   */
  value?: DeserializedType<T, 'Edm.String'> | null;
  constructor(_entityApi: CustomAttributeApi<T>);
}
export interface CustomAttributeType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sapOrigin: DeserializedType<T, 'Edm.String'>;
  instanceId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  value?: DeserializedType<T, 'Edm.String'> | null;
}
//# sourceMappingURL=CustomAttribute.d.ts.map
