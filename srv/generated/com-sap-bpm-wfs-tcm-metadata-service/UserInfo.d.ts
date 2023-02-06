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
import { Address } from './Address';
import type { UserInfoApi } from './UserInfoApi';
/**
 * This class represents the entity "UserInfoCollection" of service "com.sap.bpm.wfs.tcm.metadata".
 */
export declare class UserInfo<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements UserInfoType<T>
{
  readonly _entityApi: UserInfoApi<T>;
  /**
   * Technical entity name for UserInfo.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the UserInfo entity
   */
  static _keys: string[];
  /**
   * Sap Origin.
   * Maximum length: 16.
   */
  sapOrigin: DeserializedType<T, 'Edm.String'>;
  /**
   * Unique Name.
   */
  uniqueName: DeserializedType<T, 'Edm.String'>;
  /**
   * Address.
   * @nullable
   */
  address?: Address<T> | null;
  /**
   * Display Name.
   * @nullable
   */
  displayName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * First Name.
   * @nullable
   */
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Name.
   * @nullable
   */
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * @nullable
   */
  company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Department.
   * @nullable
   */
  department?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * @nullable
   */
  email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Phone.
   * @nullable
   */
  workPhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mobile Phone.
   * @nullable
   */
  mobilePhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Home Phone.
   * @nullable
   */
  homePhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mime Type.
   * @nullable
   */
  mimeType?: DeserializedType<T, 'Edm.String'> | null;
  constructor(_entityApi: UserInfoApi<T>);
}
export interface UserInfoType<T extends DeSerializers = DefaultDeSerializers> {
  sapOrigin: DeserializedType<T, 'Edm.String'>;
  uniqueName: DeserializedType<T, 'Edm.String'>;
  address?: Address<T> | null;
  displayName?: DeserializedType<T, 'Edm.String'> | null;
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  department?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  workPhone?: DeserializedType<T, 'Edm.String'> | null;
  mobilePhone?: DeserializedType<T, 'Edm.String'> | null;
  homePhone?: DeserializedType<T, 'Edm.String'> | null;
  mimeType?: DeserializedType<T, 'Edm.String'> | null;
}
//# sourceMappingURL=UserInfo.d.ts.map
