/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  WorkflowInstance,
  WorkflowInstanceStartPayload,
  WorkflowInstancesUpdatePayload,
  WorkflowInstanceUpdatePayload,
  CustomAttribute,
  WorkflowInstanceErrorMessage,
  WorkflowInstanceExecutionLog
} from './schema';
/**
 * Representation of the 'WorkflowInstancesApi'.
 * This API is part of the 'SPA_Workflow_Runtime New' service.
 */
export const WorkflowInstancesApi = {
  /**
   * Retrieves workflow instances by parameters. If no parameters are specified, all RUNNING, or ERRONEOUS instances are returned.
   * Parameters for different attributes of the instance are evaluated using the logical 'and' operator. If multiple parameters are
   * specified for the same attribute or a parameter is specified multiple times, results are matched using the logical 'or' operator,
   * unless noted otherwise. Empty parameters are treated as if they were not given.
   *
   * Roles permitted to execute this operation:
   *  - Global roles: ProcessAutomationAdmin
   *
   * @param queryParameters - Object containing the following keys: $orderby, $skip, $top, $inlinecount, $expand, id, definitionId, definitionVersion, status, startedAt, startedFrom, startedUpTo, completedAt, completedFrom, completedUpTo, startedBy, subject, containsText, businessKey, rootInstanceId, parentInstanceId, projectId, projectVersion, attributes.ExampleCustomAttribute.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getV1WorkflowInstances: (queryParameters?: {
    $orderby?:
      | 'id asc'
      | 'id desc'
      | 'definitionId asc'
      | 'definitionId desc'
      | 'definitionVersion asc'
      | 'definitionVersion desc'
      | 'startedAt asc'
      | 'startedAt desc'
      | 'completedAt asc'
      | 'completedAt desc'
      | 'startedBy asc'
      | 'startedBy desc'
      | 'subject asc'
      | 'subject desc'
      | 'businessKey asc'
      | 'businessKey desc';
    $skip?: number;
    $top?: number;
    $inlinecount?: 'allpages' | 'none';
    $expand?: 'attributes';
    id?: string;
    definitionId?: string;
    definitionVersion?: string;
    status?: 'RUNNING' | 'ERRONEOUS' | 'SUSPENDED' | 'CANCELED' | 'COMPLETED';
    startedAt?: string;
    startedFrom?: string;
    startedUpTo?: string;
    completedAt?: string;
    completedFrom?: string;
    completedUpTo?: string;
    startedBy?: string;
    subject?: string;
    containsText?: string;
    businessKey?: string;
    rootInstanceId?: string;
    parentInstanceId?: string;
    projectId?: string;
    projectVersion?: string;
    'attributes.ExampleCustomAttribute'?: string;
  }) =>
    new OpenApiRequestBuilder<WorkflowInstance[]>(
      'get',
      '/v1/workflow-instances',
      {
        queryParameters
      }
    ),
  /**
   * Starts a new workflow instance of the provided workflow definition. Specify the ID of the workflow definition in the body.
   * The workflow instance automatically starts based on the latest deployed version of the definition.
   *
   * Roles permitted to execute this operation:
   *  - Global roles: ProcessAutomationParticipant
   *
   * @param body - Specify the request body according to the given schema.
   * Note that the length of the request body is limited to ensure optimal operation of the service.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createV1WorkflowInstances: (body: WorkflowInstanceStartPayload) =>
    new OpenApiRequestBuilder<WorkflowInstance>(
      'post',
      '/v1/workflow-instances',
      {
        body
      }
    ),
  /**
   * Modifies the given workflow instances according to the specified operations.
   * Currently, the only operation supported is the deletion of workflow instances.
   * You can at most specify 10000 instances to delete in one API call.
   *
   * Roles permitted to execute this operation: - Global roles: ProcessAutomationAdmin
   * @param body - Specify the request body according to the given schema.
   * Note that the length of the request body is limited to ensure optimal operation of the service.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateV1WorkflowInstances: (body: WorkflowInstancesUpdatePayload[]) =>
    new OpenApiRequestBuilder<any>('patch', '/v1/workflow-instances', {
      body
    }),
  /**
   * Retrieves the workflow instance with the specified workflow instance ID.
   *
   * Roles permitted to execute this operation:
   *  - Global roles: ProcessAutomationAdmin
   * @param workflowInstanceId - The ID of the workflow instance, which should be retrieved. The workflow instance ID is 36 characters long.
   * @param queryParameters - Object containing the following keys: $expand.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getV1WorkflowInstancesByWorkflowInstanceId: (
    workflowInstanceId: string,
    queryParameters?: { $expand?: 'attributes' }
  ) =>
    new OpenApiRequestBuilder<WorkflowInstance>(
      'get',
      '/v1/workflow-instances/{workflowInstanceId}',
      {
        pathParameters: { workflowInstanceId },
        queryParameters
      }
    ),
  /**
   * Modifies the properties of a given workflow instance, for example, sets its status to CANCELED or RUNNING.
   *
   * Status changes may not take effect immediately, due to asynchronous processing of the request. When you change the status to CANCELED, note the following:
   *
   * * Workflow instances in CANCELED status are considered final, that is, no further changes are allowed. This is valid as well for other APIs and the processing according to the workflow definition.
   *
   * * Workflow instances in CANCELED status stop processing as soon as the system allows.
   *
   * When you are changing the status to SUSPENDED, note the following:
   *
   * * Status SUSPENDED manually and temporarily suspends processing.
   *
   * * You can choose to suspend the specified instance or the whole cascade by setting boolean parameter "cascade". By default, the parameter is false. When set to true, the operation is cascaded to its referenced subflow instances.
   *
   * * Workflow instances in SUSPENDED status stop processing as soon as the system allows.
   *
   * * Workflow instances remain in SUSPENDED status until a status change to RUNNING or CANCELED is requested.
   *
   * * While the workflow instance status reported by the respective API might change with immediate effect, follow-up actions might only be successful, after asynchronous processing within the workflow instance actually has stopped. To check whether asynchronous processing is ongoing, analyze the execution logs or check the workflow definition structure.
   *
   * When you are changing the status to RUNNING, note the following:
   *
   * * For workflow instances in ERRONEOUS status, this retries the failed activities. If these activities continue failing, the workflow instance automatically moves again into ERRONEOUS status.
   *
   * * If the workflow instance had previously been suspended while in ERRONEOUS status, failed activities, such as service tasks, are retried.
   *
   * * You can choose to retry or resume the specified instance or the whole cascade by setting boolean parameter "cascade". By default, the parameter is false. When set to true, the operation is cascaded to its referenced subflow instances.
   *
   * When you propagate the status change to subflow instances with the 'cascade' parameter, note the following:
   *
   * * The effects outlined above are appropriately applied to the subflow instances. For example, instances in a final status like CANCELED are not changed by the API.
   *
   * Roles permitted to execute this operation:
   *  - Global roles: ProcessAutomationAdmin
   * @param workflowInstanceId - The ID of the workflow instance, which should be modified. The workflow instance ID is 36 characters long.
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateV1WorkflowInstancesByWorkflowInstanceId: (
    workflowInstanceId: string,
    body: WorkflowInstanceUpdatePayload
  ) =>
    new OpenApiRequestBuilder<any>(
      'patch',
      '/v1/workflow-instances/{workflowInstanceId}',
      {
        pathParameters: { workflowInstanceId },
        body
      }
    ),
  /**
   * Retrieves custom workflow attributes for a workflow instance. Labels as well as the order of the custom workflow attributes in which they are returned, are taken from the latest versions of the workflow definitions where these attributes are present.
   *
   * Roles permitted to execute this operation: - Global roles: ProcessAutomationAdmin
   *
   * @param workflowInstanceId - The ID of the workflow instance for which the custom workflow attributes should be retrieved. The ID is 36 characters long.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getV1WorkflowInstancesAttributesByWorkflowInstanceId: (
    workflowInstanceId: string
  ) =>
    new OpenApiRequestBuilder<CustomAttribute[]>(
      'get',
      '/v1/workflow-instances/{workflowInstanceId}/attributes',
      {
        pathParameters: { workflowInstanceId }
      }
    ),
  /**
   * Retrieves the context for a workflow instance independent of its status.
   *
   * Roles permitted to execute this operation:
   *  - Global roles: ProcessAutomationAdmin
   * @param workflowInstanceId - The workflow instance ID for which the context should be retrieved. The workflow instance ID is 36 characters long.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getV1WorkflowInstancesContextByWorkflowInstanceId: (
    workflowInstanceId: string
  ) =>
    new OpenApiRequestBuilder<Record<string, any>>(
      'get',
      '/v1/workflow-instances/{workflowInstanceId}/context',
      {
        pathParameters: { workflowInstanceId }
      }
    ),
  /**
   * Overrides the context for a workflow instance independent of its status.
   *
   * Take special care when using this API, because it will override the workflow context, that is, it might change the workflow context
   * in ways that are incompatible with the expectations of the tasks in the workflow definition. Before changing the context, we recommend that you
   * suspend the workflow instance and check that the execution has come to a halt, that is, no further steps are being added to the execution log.
   * Refer to PATCH on the parent resource and GET on the 'execution-logs' sibling resource.
   *
   * Roles permitted to execute this operation:
   *  - Global roles: ProcessAutomationAdmin
   * @param workflowInstanceId - Specify the workflow instance ID for which the context should be overridden. The workflow instance ID is 36 characters long.
   * @param body - Specify the new context according to the given schema.
   * The length of the request body is limited to ensure optimal operation of the service.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateV1WorkflowInstancesContextByWorkflowInstanceId: (
    workflowInstanceId: string,
    body: Record<string, any>
  ) =>
    new OpenApiRequestBuilder<any>(
      'put',
      '/v1/workflow-instances/{workflowInstanceId}/context',
      {
        pathParameters: { workflowInstanceId },
        body
      }
    ),
  /**
   * Modifies parts of the context for a workflow instance independent of its status.
   *
   * Take special care when using this API, because it might change the workflow context in ways that are incompatible with the expectations
   * of the tasks in the workflow definition. Before changing the context, we recommend that you suspend the workflow instance and make sure that
   * the execution has come to a halt, that is, that no further steps are being added to the execution log. Refer to PATCH on the parent resource
   * and GET on the 'execution-logs' sibling resource.
   *
   * Roles permitted to execute this operation:
   *  - Global roles: ProcessAutomationAdmin
   * @param workflowInstanceId - Specify the workflow instance ID for which the context should be modified. The workflow instance ID is 36 characters long.
   * @param body - Specify the modified parts of the context.
   * Note that the modification is limited by the allowed content length of the request body. The length is restricted to ensure optimal operation of the service.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateV1WorkflowInstancesContextByWorkflowInstanceId_1: (
    workflowInstanceId: string,
    body: Record<string, any>
  ) =>
    new OpenApiRequestBuilder<any>(
      'patch',
      '/v1/workflow-instances/{workflowInstanceId}/context',
      {
        pathParameters: { workflowInstanceId },
        body
      }
    ),
  /**
   * Retrieves current error messages for a workflow instance.
   *
   * Roles permitted to execute this operation:
   *  - Global roles: ProcessAutomationDeveloper, ProcessAutomationAdmin
   *
   * @param workflowInstanceId - The workflow instance ID for which the error messages should be retrieved. The workflow instance ID is 36 characters long.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getV1WorkflowInstancesErrorMessagesByWorkflowInstanceId: (
    workflowInstanceId: string
  ) =>
    new OpenApiRequestBuilder<WorkflowInstanceErrorMessage[]>(
      'get',
      '/v1/workflow-instances/{workflowInstanceId}/error-messages',
      {
        pathParameters: { workflowInstanceId }
      }
    ),
  /**
   * Retrieves execution logs for a given workflow instance.
   *
   * Roles permitted to execute this operation:
   *  - Global roles: ProcessAutomationAdmin
   *
   * @param workflowInstanceId - The workflow instance ID for which the execution logs should be retrieved. The workflow instance ID is 36 characters long.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getV1WorkflowInstancesExecutionLogsByWorkflowInstanceId: (
    workflowInstanceId: string
  ) =>
    new OpenApiRequestBuilder<WorkflowInstanceExecutionLog[]>(
      'get',
      '/v1/workflow-instances/{workflowInstanceId}/execution-logs',
      {
        pathParameters: { workflowInstanceId }
      }
    )
};
