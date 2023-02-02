/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  TaskInstance,
  UpdateTaskInstancePayload,
  CustomAttribute
} from './schema';
/**
 * Representation of the 'UserTaskInstancesApi'.
 * This API is part of the 'SPA_Workflow_Runtime New' service.
 */
export const UserTaskInstancesApi = {
  /**
   * Retrieves user task instances by parameters. If no parameters are specified, all instances with status READY, RESERVED, CANCELED, or COMPLETED are returned.
   * Parameters for different attributes of the instance are evaluated using the logical 'and' operator. If a parameter is specified multiple times,
   * results are matched using the logical 'or' operator, unless noted otherwise. Empty parameters are treated as if they were not specified.
   * By default, returned tasks are sorted by creation time in ascending order.
   *
   * Note: Certain selection criteria and response fields are not relevant for workflows that originate from the process builder of SAP Build Process Automation. They do exist for
   * tasks that originate from other editors.
   *
   * Roles permitted to execute this operation:
   *   - Global roles: ProcessAutomationAdmin
   * @param queryParameters - Object containing the following keys: $skip, $top, $inlinecount, $expand, $orderby, workflowInstanceId, workflowDefinitionId, processor, id, activityId, description, subject, createdAt, createdFrom, createdUpTo, claimedAt, claimedFrom, claimedUpTo, completedAt, completedFrom, completedUpTo, lastChangedAt, lastChangedFrom, lastChangedUpTo, dueDate, dueDateFrom, dueDateUpTo, priority, status, recipientUsers, recipientGroups, containsText, attributes.ExampleCustomAttribute, definitionId.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getV1TaskInstances: (queryParameters?: {
    $skip?: number;
    $top?: number;
    $inlinecount?: 'allpages' | 'none';
    $expand?: 'attributes';
    $orderby?:
      | 'claimedAt asc'
      | 'claimedAt desc'
      | 'completedAt asc'
      | 'completedAt desc'
      | 'createdAt asc'
      | 'createdAt desc'
      | 'lastChangedAt asc'
      | 'lastChangedAt desc'
      | 'dueDate asc'
      | 'dueDate desc'
      | 'subject asc'
      | 'subject desc'
      | 'description asc'
      | 'description desc'
      | 'activityId asc'
      | 'activityId desc'
      | 'id asc'
      | 'id desc'
      | 'processor asc'
      | 'processor desc'
      | 'workflowDefinitionId asc'
      | 'workflowDefinitionId desc'
      | 'workflowInstanceId asc'
      | 'workflowInstanceId desc'
      | 'priority asc'
      | 'priority desc';
    workflowInstanceId?: string;
    workflowDefinitionId?: string;
    processor?: string;
    id?: string;
    activityId?: string;
    description?: string;
    subject?: string;
    createdAt?: string;
    createdFrom?: string;
    createdUpTo?: string;
    claimedAt?: string;
    claimedFrom?: string;
    claimedUpTo?: string;
    completedAt?: string;
    completedFrom?: string;
    completedUpTo?: string;
    lastChangedAt?: string;
    lastChangedFrom?: string;
    lastChangedUpTo?: string;
    dueDate?: string;
    dueDateFrom?: string;
    dueDateUpTo?: string;
    priority?: 'LOW' | 'MEDIUM' | 'HIGH' | 'VERY_HIGH';
    status?: 'READY' | 'RESERVED' | 'COMPLETED' | 'CANCELED';
    recipientUsers?: string;
    recipientGroups?: string;
    containsText?: string;
    'attributes.ExampleCustomAttribute'?: string;
    definitionId?: string;
  }) =>
    new OpenApiRequestBuilder<TaskInstance[]>('get', '/v1/task-instances', {
      queryParameters
    }),
  /**
   * Retrieves the user task instance with the specified task instance ID.
   *
   * Roles permitted to execute this operation: - Global roles: ProcessAutomationAdmin
   * - Task-specific roles: recipientUsers, recipientGroups [Prerequisite: You are assigned to the ProcessAutomationParticipant global role.]
   * @param taskInstanceId - The ID of the user task instance which should be retrieved. The ID is 36 characters long.
   * @param queryParameters - Object containing the following keys: $expand.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getV1TaskInstancesByTaskInstanceId: (
    taskInstanceId: string,
    queryParameters?: { $expand?: 'attributes' }
  ) =>
    new OpenApiRequestBuilder<TaskInstance>(
      'get',
      '/v1/task-instances/{taskInstanceId}',
      {
        pathParameters: { taskInstanceId },
        queryParameters
      }
    ),
  /**
   * Updates the status of a user task, its properties, for example, the subject, and its context with the attributes provided in the request body.
   * Depending on the provided attributes, the user might need administrative privileges for the task instance.
   * Without administrative privileges, a user can only set the status to COMPLETED. Optionally, the user can change the context when completing the task.
   *
   * Workflows validate and restrict the update of the context if they originate from the process builder of SAP Build Process Automation. If the validation fails, the response code is 422. See the detail fields of the response body on the specific validations that failed.
   *
   * Note that patching a translated subject or description is not supported. That means, that GET requests that are executed on a translated user task do not display the patched text.
   *
   * For more information, see the workflow service documentation on the
   * [SAP Help Portal](https://help.sap.com/viewer/e157c391253b4ecd93647bf232d18a83/Cloud/en-US/fe41c54d61fa4710b34f2afe11b5d00e.html).
   *
   * Roles permitted to execute this operation:
   *  - Global roles: ProcessAutomationAdmin
   *  - Task-specific roles: recipientUsers, recipientGroups [Prerequisite: You are assigned to the ProcessAutomationParticipant global role.]
   * @param taskInstanceId - The ID of the user task instance that is to be updated. The ID is 36 characters long.
   * @param body - Specify the request body according to the given schema.
   * The length of the request body is limited to ensure optimal operation of the service.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateV1TaskInstancesByTaskInstanceId: (
    taskInstanceId: string,
    body: UpdateTaskInstancePayload
  ) =>
    new OpenApiRequestBuilder<any>(
      'patch',
      '/v1/task-instances/{taskInstanceId}',
      {
        pathParameters: { taskInstanceId },
        body
      }
    ),
  /**
   * Retrieves custom task attributes of a user task. Labels as well as the order of the custom task attributes in which they are returned, are taken from the latest versions of the workflow definitions where these attributes are present.
   *
   * Workflows that were created using the process builder of SAP Build Process Automation currently do not contain attributes. This API however exists for tasks that originate from other editors.
   *
   * Roles permitted to execute this operation: - Global roles: ProcessAutomationAdmin
   * - Task-specific roles: recipientUsers, recipientGroups [Prerequisite: You are assigned to the ProcessAutomationParticipant global role.]
   *
   * @param taskInstanceId - The ID of the user task instance for which the custom task attributes should be retrieved. The ID is 36 characters long.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getV1TaskInstancesAttributesByTaskInstanceId: (taskInstanceId: string) =>
    new OpenApiRequestBuilder<CustomAttribute[]>(
      'get',
      '/v1/task-instances/{taskInstanceId}/attributes',
      {
        pathParameters: { taskInstanceId }
      }
    ),
  /**
   * Retrieves the context of a user task.
   *
   * Workflows that were created using the process builder of SAP Build Process Automation return the context as it was provided to the user task, that is, after input mapping.
   * If there are no input mappings defined, this API returns the complete context.
   *
   * Roles permitted to execute this operation:
   *  - Global roles: ProcessAutomationAdmin
   *  - Task-specific roles: recipientUsers, recipientGroups [Prerequisite: You are assigned to the ProcessAutomationParticipant global role.]
   * @param taskInstanceId - The ID of the user task for which the context should be retrieved. The ID is 36 characters long.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getV1TaskInstancesContextByTaskInstanceId: (taskInstanceId: string) =>
    new OpenApiRequestBuilder<Record<string, any>>(
      'get',
      '/v1/task-instances/{taskInstanceId}/context',
      {
        pathParameters: { taskInstanceId }
      }
    )
};
