/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { Job } from './schema';
/**
 * Representation of the 'JobsApi'.
 * This API is part of the 'SPA_Workflow_Runtime New' service.
 */
export const JobsApi = {
  /**
   * Tracks the status of API requests, which the server executed asynchronously.
   * Roles permitted to execute this operation:
   *  - Global roles: ProcessAutomationAdmin
   *
   * @param jobId - The ID of the job for which you check the status.
   * Typically, the ID has been retrieved from another API request that was processed asynchronously.
   * The ID is at most 36 characters long.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getV1JobsByJobId: (jobId: string) =>
    new OpenApiRequestBuilder<Job>('get', '/v1/jobs/{jobId}', {
      pathParameters: { jobId }
    })
};
