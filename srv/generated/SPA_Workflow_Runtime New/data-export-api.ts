/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
/**
 * Representation of the 'DataExportApi'.
 * This API is part of the 'SPA_Workflow_Runtime New' service.
 */
export const DataExportApi = {
  /**
   * Requests the export of workflow definitions metadata, form definitions metadata, workflow instances, and task instances. The file and data structures used are subject to change.
   *
   * Roles permitted to execute this operation:
   *  - Global roles: ProcessAutomationAdmin
   *
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getV1Export: () => new OpenApiRequestBuilder<any>('get', '/v1/export')
};
