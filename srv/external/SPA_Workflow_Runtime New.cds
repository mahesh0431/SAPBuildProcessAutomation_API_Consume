/* checksum : c61089fedbae884c4e486d23a570ae41 */
@Capabilities.BatchSupported : false
@Capabilities.KeyAsSegmentSupported : true
@Core.Description : 'Processes & Workflows'
@Core.SchemaVersion : 'v1'
@Core.LongDescription : ```
This API uses the workflow capability of SAP Build Process Automation. With the API, you can, for example, start new workflow instances and work with tasks.

Note: These APIs are designed for loosely coupled clients. This means:

- If SAP Build Process Automation adds fields to responses, the API version number does not increase. Your client must ignore new fields.
- The order of fields in responses and of entries in arrays may change. This applies unless the API provides an explicit means to specify the desired order.

```
service Processes._.Workflows {};

@Common.Label : 'User Task Instances'
@Core.Description : 'Retrieve instances by query parameters'
@Core.LongDescription : ```
Retrieves user task instances by parameters. If no parameters are specified, all instances with status READY, RESERVED, CANCELED, or COMPLETED are returned.
Parameters for different attributes of the instance are evaluated using the logical 'and' operator. If a parameter is specified multiple times,
results are matched using the logical 'or' operator, unless noted otherwise. Empty parameters are treated as if they were not specified.
By default, returned tasks are sorted by creation time in ascending order.

Note: Certain selection criteria and response fields are not relevant for workflows that originate from the process builder of SAP Build Process Automation. They do exist for
tasks that originate from other editors.

Roles permitted to execute this operation:
  - Global roles: ProcessAutomationAdmin
```
@openapi.path : '/v1/task-instances'
function Processes._.Workflows.v1_task_instances(
  @description : ```
  The number of records you want to skip from the beginning.
  You can skip at most 4000 records. To indicate a result range that starts, for example, at 1001, combine the \$skip with the \$top parameter.
  If not specified, no records are skipped. You can use this parameter only once.
  Refer also to the \$top parameter.
  ```
  @openapi.in : 'query'
  @openapi.name : '$skip'
  _skip : Integer,
  @description : ```
  The number of records you want to show.
  You can get at most 1000 records per API call. To indicate a result range that starts, for example, at 1001, combine the \$top with the \$skip parameter.
  If not specified, 100 records are returned. You can use this parameter only once.
  Refer also to the \$skip parameter.
  ```
  @openapi.in : 'query'
  @openapi.name : '$top'
  _top : Integer,
  @description : `Specify whether the total count of the task instances, which match the search criteria, should be returned as a value
of the X-Total-Count response header. To enable the header, use the 'allpages' setting. To disable the header, use the 'none' setting.
The values are case-sensitive. You can use this parameter only once.`
  @assert.range : true
  @openapi.in : 'query'
  @openapi.name : '$inlinecount'
  _inlinecount : String enum {
    allpages;
    none;
  },
  @description : `You can request custom task attributes to become part of the task output by specifying the value 'attributes' for the '\$expand' parameter.
Otherwise, if the '\$expand' parameter is not specified, the 'attributes' field is not included into task output. Note that labels as well as the order of the custom task attributes in which they are returned, are taken from the latest versions of the workflow definitions where these attributes are present.
`
  @assert.range : true
  @openapi.in : 'query'
  @openapi.name : '$expand'
  _expand : String enum {
    attributes;
  },
  @description : ```
  The attribute and direction by which tasks are sorted. The sort attribute and direction are separated by a space.
  The parameter value is case-sensitive. You can only specify one ordering parameter, which contains attribute and direction.
  To stabilize the order of tasks the implicit second ordering parameter 'createdAt asc' is applied.
  
   * claimedAt asc - Ascending, task claim time from the oldest to the most recent, tasks with status READY (not yet claimed) first.
   * claimedAt desc - Descending, from the most recently claimed tasks to the oldest ones, tasks with status READY (not yet claimed) last.
   * completedAt asc - Ascending, task completion or cancelation time from the oldest to the most recent, not yet COMPLETED tasks first.
   * completedAt desc - Descending, from the most recently COMPLETED or CANCELED tasks to the oldest ones, not yet COMPLETED tasks last.
   * createdAt asc - Ascending, task creation time from the oldest to the most recent.
   * createdAt desc - Descending, from the most recently created tasks to the oldest ones.
   * lastChangedAt asc - Ascending, task last change time from the oldest to the most recent.
   * lastChangedAt desc - Descending, from the most recently changed tasks to the oldest ones.
   * dueDate asc - Ascending, tasks due date from the oldest to the most distant in future ones, tasks without due date first.
   * dueDate desc - Descending, tasks due date from the most distant in future to the oldest ones, tasks without due date last.
   * subject asc - Ascending, from A to Z case-sensitive.
   * subject desc - Descending, from Z to A case-sensitive.
   * description asc - Ascending, from A to Z case-sensitive, tasks without description first.
   * description desc - Descending, from Z to A case-sensitive, tasks without description last.
   * activityId asc - Ascending, from A to Z case-sensitive.
   * activityId desc - Descending, from Z to A case-sensitive.
   * id asc - Ascending, from A to Z case-sensitive.
   * id desc - Descending, from Z to A case-sensitive.
   * processor asc - Ascending, from A to Z case-sensitive, tasks without processor first.
   * processor desc - Descending, from Z to A case-sensitive, tasks without processor last.
   * workflowDefinitionId asc - Ascending, from A to Z case-sensitive.
   * workflowDefinitionId desc - Descending, from Z to A case-sensitive.
   * workflowInstanceId asc - Ascending, from A to Z case-sensitive.
   * workflowInstanceId desc - Descending, from Z to A case-sensitive.
   * priority asc - Ascending, tasks priority from lowest to highest.
   * priority desc - Descending, tasks priority from highest to lowest.
  ```
  @assert.range : true
  @openapi.in : 'query'
  @openapi.name : '$orderby'
  _orderby : String enum {
    claimedAt_asc = 'claimedAt asc';
    claimedAt_desc = 'claimedAt desc';
    completedAt_asc = 'completedAt asc';
    completedAt_desc = 'completedAt desc';
    createdAt_asc = 'createdAt asc';
    createdAt_desc = 'createdAt desc';
    lastChangedAt_asc = 'lastChangedAt asc';
    lastChangedAt_desc = 'lastChangedAt desc';
    dueDate_asc = 'dueDate asc';
    dueDate_desc = 'dueDate desc';
    subject_asc = 'subject asc';
    subject_desc = 'subject desc';
    description_asc = 'description asc';
    description_desc = 'description desc';
    activityId_asc = 'activityId asc';
    activityId_desc = 'activityId desc';
    id_asc = 'id asc';
    id_desc = 'id desc';
    processor_asc = 'processor asc';
    processor_desc = 'processor desc';
    workflowDefinitionId_asc = 'workflowDefinitionId asc';
    workflowDefinitionId_desc = 'workflowDefinitionId desc';
    workflowInstanceId_asc = 'workflowInstanceId asc';
    workflowInstanceId_desc = 'workflowInstanceId desc';
    priority_asc = 'priority asc';
    priority_desc = 'priority desc';
  },
  @description : 'The workflow instance ID for which the user task instances are returned. The workflow instance ID is 36 characters long.'
  @openapi.in : 'query'
  workflowInstanceId : String(36),
  @description : 'The workflow definition ID for which the user task instances are returned.'
  @openapi.in : 'query'
  workflowDefinitionId : String(64),
  @description : 'The processor of the user task instance.'
  @openapi.in : 'query'
  processor : String(255),
  @description : 'The unique ID of the user task instance. The user task instance ID is 36 characters long.'
  @openapi.in : 'query'
  id : String(36),
  @description : 'The activityId of the user task instance. This field represents the ID of the user task definition.'
  @openapi.in : 'query'
  activityId : String,
  @description : 'The description of the user task instance in UTF-8 encoding. You must not specify texts that contain commas with this parameter.'
  @openapi.in : 'query'
  description : String(4000),
  @description : 'The subject of the user task instance in UTF-8 encoding. You must not specify texts that contain commas with this parameter.'
  @openapi.in : 'query'
  subject : String(255),
  @description : ```
  Time when the user task instance has been created.
  Evaluated using the logical 'or' operator with the values of the 'createdFrom' and 'createdUpTo' parameters if they are specified.
  
  Supports two date formats:
  1. yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
  2. yyyyMMddHHmmss.SSS
  
  ```
  @openapi.in : 'query'
  createdAt : String,
  @description : ```
  The start time (inclusive) of the time range when the user task instance was created.
  Must be less or equal to the value of the 'createdUpTo' parameter if the latter is specified.
  Evaluated using the logical 'or' operator with the value of the 'createdAt' parameter if the latter is specified.
  
  Supports two date formats:
  1. yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
  2. yyyyMMddHHmmss.SSS
  
  ```
  @openapi.in : 'query'
  createdFrom : String,
  @description : ```
  The end time (inclusive) of the time range when the user task instance was created.
  Must be greater or equal to the value of the 'createdFrom' parameter if the latter is specified.
  Evaluated using the logical 'or' operator with the value of the 'createdAt' parameter if the latter is specified.
  
  Supports two date formats:
  1. yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
  2. yyyyMMddHHmmss.SSS
  
  ```
  @openapi.in : 'query'
  createdUpTo : String,
  @description : ```
  Time when the user task instance was claimed.
  Evaluated using the logical 'or' operator with the values of the 'claimedFrom' and 'claimedUpTo' parameters if they are specified.
  
  Supports two date formats:
  1. yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
  2. yyyyMMddHHmmss.SSS
  
  ```
  @openapi.in : 'query'
  claimedAt : String,
  @description : ```
  The start time (inclusive) of the time range when the user task instance was claimed.
  Must be less or equal to the value of the 'claimedUpTo' parameter if the latter is specified.
  Evaluated using the logical 'or' operator with the value of the 'claimedAt' parameter if the latter is specified.
  
  Supports two date formats:
  1. yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
  2. yyyyMMddHHmmss.SSS
  
  ```
  @openapi.in : 'query'
  claimedFrom : String,
  @description : ```
  The end time (inclusive) of the time range when the user task instance was claimed.
  Must be greater or equal to the value of the 'claimedFrom' parameter if the latter is specified.
  Evaluated using the logical 'or' operator with the value of the 'claimedAt' parameter if the latter is specified.
  
  Supports two date formats:
  1. yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
  2. yyyyMMddHHmmss.SSS
  
  ```
  @openapi.in : 'query'
  claimedUpTo : String,
  @description : ```
  Time when the user task instance was COMPLETED or CANCELED.
  Evaluated using the logical 'or' operator with the values of the 'completedFrom' and 'completedUpTo' parameters if they are specified.
  
  Supports two date formats:
  1. yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
  2. yyyyMMddHHmmss.SSS
  
  ```
  @openapi.in : 'query'
  completedAt : String,
  @description : ```
  The start time (inclusive) of the time range when the user task instance was COMPLETED or CANCELED.
  Must be less or equal to the value of the 'completedUpTo' parameter if the latter is specified.
  Evaluated using the logical 'or' operator with the value of the 'completedAt' parameter if the latter is specified.
  
  Supports two date formats:
  1. yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
  2. yyyyMMddHHmmss.SSS
  
  ```
  @openapi.in : 'query'
  completedFrom : String,
  @description : ```
  The end time (inclusive) of the time range when the user task instance was COMPLETED or CANCELED.
  Must be greater or equal to the value of the 'completedFrom' parameter if the latter is specified.
  Evaluated using the logical 'or' operator with the value of the 'completedAt' parameter if the latter is specified.
  
  Supports two date formats:
  1. yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
  2. yyyyMMddHHmmss.SSS
  
  ```
  @openapi.in : 'query'
  completedUpTo : String,
  @description : ```
  Time when the user task instance has been changed for the last time.
  Evaluated using the logical 'or' operator with the values of the 'lastChangedFrom' and 'lastChangedTo' parameters if they are specified.
  
  Supports two date formats:
  1. yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
  2. yyyyMMddHHmmss.SSS
  
  ```
  @openapi.in : 'query'
  lastChangedAt : String,
  @description : ```
  The start time (inclusive) of the time range when the user task instance was changed for the last time.
  Must be less or equal to the value of the 'lastChangedUpTo' parameter if the latter is specified.
  Evaluated using the logical 'or' operator with the value of the 'lastChangedAt' parameter if the latter is specified.
  
  Supports two date formats:
  1. yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
  2. yyyyMMddHHmmss.SSS
  
  ```
  @openapi.in : 'query'
  lastChangedFrom : String,
  @description : ```
  The end time (inclusive) of the time range when the user task instance was changed for the last time.
  Must be greater or equal to the value of the 'lastChangedFrom' parameter if the latter is specified.
  Evaluated using the logical 'or' operator with the value of the 'lastChangedAt' parameter if the latter is specified.
  
  Supports two date formats:
  1. yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
  2. yyyyMMddHHmmss.SSS
  
  ```
  @openapi.in : 'query'
  lastChangedUpTo : String,
  @description : ```
  The due date of the user task instance.
  Evaluated using the logical 'or' operator with the values of the 'dueDateFrom' and 'dueDateUpTo' parameters if they are specified.
  
  Supports two date formats:
  1. yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
  2. yyyyMMddHHmmss.SSS
  
  ```
  @openapi.in : 'query'
  dueDate : String,
  @description : ```
  The start time (inclusive) of the due date time range for the user task instance.
  Must be less or equal to the value of the 'dueDateUpTo' parameter if the latter is specified.
  Evaluated using the logical 'or' operator with the value of the 'dueDate' parameter if the latter is specified.
  
  Supports two date formats:
  1. yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
  2. yyyyMMddHHmmss.SSS
  
  ```
  @openapi.in : 'query'
  dueDateFrom : String,
  @description : ```
  The end time (inclusive) of the due date time range for the user task instance.
  Must be greater or equal to the 'dueDateFrom' parameter if the latter is specified.
  Evaluated using the logical 'or' operator with the value of the 'dueDate' parameter if the latter is specified.
  
  Supports two date formats:
  1. yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
  2. yyyyMMddHHmmss.SSS
  
  ```
  @openapi.in : 'query'
  dueDateUpTo : String,
  @description : `The priority of the user task instance.
The values are case-insensitive.
`
  @assert.range : true
  @openapi.in : 'query'
  priority : String enum {
    LOW;
    MEDIUM;
    HIGH;
    VERY_HIGH;
  },
  @description : `The status of the user task instance.
The values are case-insensitive.
`
  @assert.range : true
  @openapi.in : 'query'
  status : String enum {
    READY;
    RESERVED;
    COMPLETED;
    CANCELED;
  },
  @description : `The users who must be among the recipient users of the user task instance. A user task instance has to match at least one of the recipient users specified.
Specify the users by repeating this parameter multiple times, with one user each.
`
  @openapi.in : 'query'
  recipientUsers : String,
  @description : `The groups which must be among the recipient groups of the user task instance. A user task instance has to match at least one of the recipient groups specified.
Specify the groups by repeating this parameter multiple times, with one user each.
`
  @openapi.in : 'query'
  recipientGroups : String,
  @description : ```
  Text, which should be contained in at least one of the following fields of the user task instance:
  
   * subject
   * description
   * activityId
   * id
   * processor
   * workflowDefinitionId
   * workflowInstanceId
  
  Performed filtering is case-insensitive. You must not use this parameter more than once.
  
  ```
  @openapi.in : 'query'
  containsText : String,
  @description : ```
  Example of a parameter that filters task instances by the value of the custom task attribute with the ID 'ExampleCustomAttribute'.
  You can specify parameters for other attributes in an analogous way.
  If you specify a parameter several times, the logical operators apply as outlined in the overall description of this API.
  If custom task attributes with different IDs are present in the URL, only tasks which contain all of them with the values specified will be returned as a response to the request.
  If a query by custom task attributes matches too many task definitions, you have to limit the query further. Refer, for example, to parameter 'definitionId'.
  
  ```
  @openapi.in : 'query'
  @openapi.name : 'attributes.ExampleCustomAttribute'
  attributes_ExampleCustomAttribute : String,
  @description : ```
  The definition ID of the user task.
  It consists of the ID of the task defined in the workflow definition (task definition ID) as well as the workflow definition ID delimited by an '@' sign.
  For optimal performance, specify this parameter when searching for tasks by custom task attributes.
  If the custom task attribute IDs from the query match more than 50 task definitions, you have to specify one or more task definition IDs when searching for tasks by custom task attributes.
  
  ```
  @openapi.in : 'query'
  definitionId : String
) returns many Processes._.Workflows_types.TaskInstance;

@Common.Label : 'User Task Instances'
@Core.Description : 'Retrieve task by ID'
@Core.LongDescription : ```
Retrieves the user task instance with the specified task instance ID.

Roles permitted to execute this operation: - Global roles: ProcessAutomationAdmin
- Task-specific roles: recipientUsers, recipientGroups [Prerequisite: You are assigned to the ProcessAutomationParticipant global role.]
```
@openapi.path : '/v1/task-instances/{taskInstanceId}'
function Processes._.Workflows.v1_task_instances_(
  @description : 'The ID of the user task instance which should be retrieved. The ID is 36 characters long.'
  @openapi.in : 'path'
  taskInstanceId : String(36),
  @description : `You can request custom task attributes to become part of the task output by specifying the value 'attributes' for the '\$expand' parameter.
Otherwise, if the '\$expand' parameter is not specified, the 'attributes' field is not included into task output. Note that labels as well as the order of the custom task attributes in which they are returned, are taken from the latest versions of the workflow definitions where these attributes are present.
`
  @assert.range : true
  @openapi.in : 'query'
  @openapi.name : '$expand'
  _expand : String enum {
    attributes;
  }
) returns Processes._.Workflows_types.TaskInstance;

@Common.Label : 'User Task Instances'
@Core.Description : 'Update task by ID'
@Core.LongDescription : ```
Updates the status of a user task, its properties, for example, the subject, and its context with the attributes provided in the request body.
Depending on the provided attributes, the user might need administrative privileges for the task instance.
Without administrative privileges, a user can only set the status to COMPLETED. Optionally, the user can change the context when completing the task.

Workflows validate and restrict the update of the context if they originate from the process builder of SAP Build Process Automation. If the validation fails, the response code is 422. See the detail fields of the response body on the specific validations that failed.

Note that patching a translated subject or description is not supported. That means, that GET requests that are executed on a translated user task do not display the patched text.

For more information, see the workflow service documentation on the
[SAP Help Portal](https://help.sap.com/viewer/e157c391253b4ecd93647bf232d18a83/Cloud/en-US/fe41c54d61fa4710b34f2afe11b5d00e.html).

Roles permitted to execute this operation:
 - Global roles: ProcessAutomationAdmin
 - Task-specific roles: recipientUsers, recipientGroups [Prerequisite: You are assigned to the ProcessAutomationParticipant global role.]
```
@openapi.method : 'PATCH'
@openapi.path : '/v1/task-instances/{taskInstanceId}'
action Processes._.Workflows.v1_task_instances__patch(
  @description : 'The ID of the user task instance that is to be updated. The ID is 36 characters long.'
  @openapi.in : 'path'
  taskInstanceId : String(36),
  @openapi.in : 'body'
  body : Processes._.Workflows_types.UpdateTaskInstancePayload
);

@Common.Label : 'User Task Instances'
@Core.Description : 'Retrieve custom task attributes by task instance ID'
@Core.LongDescription : ```
Retrieves custom task attributes of a user task. Labels as well as the order of the custom task attributes in which they are returned, are taken from the latest versions of the workflow definitions where these attributes are present.

Workflows that were created using the process builder of SAP Build Process Automation currently do not contain attributes. This API however exists for tasks that originate from other editors.

Roles permitted to execute this operation: - Global roles: ProcessAutomationAdmin
- Task-specific roles: recipientUsers, recipientGroups [Prerequisite: You are assigned to the ProcessAutomationParticipant global role.]

```
@openapi.path : '/v1/task-instances/{taskInstanceId}/attributes'
function Processes._.Workflows.v1_task_instances__attributes(
  @description : 'The ID of the user task instance for which the custom task attributes should be retrieved. The ID is 36 characters long.'
  @openapi.in : 'path'
  taskInstanceId : String(36)
) returns many Processes._.Workflows_types.CustomAttribute;

@Common.Label : 'User Task Instances'
@Core.Description : 'Retrieve task context by ID'
@Core.LongDescription : ```
Retrieves the context of a user task.

Workflows that were created using the process builder of SAP Build Process Automation return the context as it was provided to the user task, that is, after input mapping.
If there are no input mappings defined, this API returns the complete context.

Roles permitted to execute this operation:
 - Global roles: ProcessAutomationAdmin
 - Task-specific roles: recipientUsers, recipientGroups [Prerequisite: You are assigned to the ProcessAutomationParticipant global role.]
```
@openapi.path : '/v1/task-instances/{taskInstanceId}/context'
function Processes._.Workflows.v1_task_instances__context(
  @description : 'The ID of the user task for which the context should be retrieved. The ID is 36 characters long.'
  @openapi.in : 'path'
  taskInstanceId : String(36)
) returns { };

@Common.Label : 'Task Definitions'
@Core.Description : 'Retrieve definitions by query parameters'
@Core.LongDescription : ```
Retrieves task definitions by query parameters.

A task definition is identified by the ID of the respective activity within a workflow definition (for example, usertask1) and the workflow definition ID.
The workflow definition ID is version independent. That means, this API assumes that task definitions are semantically the same if they span several
workflow versions and therefore have the same identifier. The latest workflow definition version is expected to contain the leading property values of
the task definition.

At the moment, filtering is limited to the \$skip and \$top parameters for paging through the available task definitions.

The returned task definitions are sorted in descending order of their creation time.

Roles permitted to execute this operation:
  - Global roles: ProcessAutomationAdmin
```
@openapi.path : '/v1/task-definitions'
function Processes._.Workflows.v1_task_definitions(
  @description : ```
  The number of records you want to skip from the beginning.
  You can skip at most 4000 records. To indicate a result range that starts, for example, at 1001, combine the \$skip with the \$top parameter.
  If not specified, no records are skipped. You can use this parameter only once.
  Refer also to the \$top parameter.
  ```
  @openapi.in : 'query'
  @openapi.name : '$skip'
  _skip : Integer,
  @description : ```
  The number of records you want to show.
  You can get at most 1000 records per API call. To indicate a result range that starts, for example, at 1001, combine the \$top with the \$skip parameter.
  If not specified, 100 records are returned. You can use this parameter only once.
  Refer also to the \$skip parameter.
  ```
  @openapi.in : 'query'
  @openapi.name : '$top'
  _top : Integer,
  @description : `Specify whether the total count of the task definitions should be returned as a value of the X-Total-Count response header.
To enable the header, use the 'allpages' setting. To disable the header, use the 'none' setting.
The values are case-sensitive. You can use this parameter only once.`
  @assert.range : true
  @openapi.in : 'query'
  @openapi.name : '$inlinecount'
  _inlinecount : String enum {
    allpages;
    none;
  },
  @description : `You can request custom task attributes to become part of the task output by specifying the value 'attributeDefinitions' for the '\$expand' parameter.
Otherwise, if the '\$expand' parameter is not specified, the 'attributeDefinitions' field is not included into the output. Note that labels as well as the order of the custom task attributes in which they are returned, are taken from the latest versions of the workflow definitions where the corresponding task definition exists.`
  @assert.range : true
  @openapi.in : 'query'
  @openapi.name : '$expand'
  _expand : String enum {
    attributeDefinitions;
  }
) returns Processes._.Workflows_types.TaskDefinitionList;

@Common.Label : 'Workflow Instances'
@Core.Description : 'Retrieve all instances by query parameters'
@Core.LongDescription : ```
Retrieves workflow instances by parameters. If no parameters are specified, all RUNNING, or ERRONEOUS instances are returned.
Parameters for different attributes of the instance are evaluated using the logical 'and' operator. If multiple parameters are
specified for the same attribute or a parameter is specified multiple times, results are matched using the logical 'or' operator,
unless noted otherwise. Empty parameters are treated as if they were not given.

Roles permitted to execute this operation:
 - Global roles: ProcessAutomationAdmin

```
@openapi.path : '/v1/workflow-instances'
function Processes._.Workflows.v1_workflow_instances(
  @description : ```
  The attribute and direction by which workflow instances are sorted. The sort attribute and direction are separated by a space.
  The parameter value is case-sensitive. You can only specify one ordering parameter, which contains attribute and direction.
  If sort by definitionVersion is enabled, then definitionId is also added to the sorting query.
  If not specified, the results are sorted by the 'startedAt' attribute, in descending order.
  
   * id asc - Ascending, from A to Z case-sensitive.
   * id desc - Descending, from Z to A case-sensitive.
   * definitionId asc - Ascending, from A to Z case-sensitive.
   * definitionId desc - Descending, from Z to A case-sensitive.
   * definitionVersion asc - Ascending, from A to Z case-sensitive.
   * definitionVersion desc - Descending, from Z to A case-sensitive.
   * startedAt asc - Ascending, from A to Z case-sensitive.
   * startedAt desc - Descending, from Z to A case-sensitive.
   * completedAt asc - Ascending, workflow instance completion or cancelation time from the oldest to the most recent, not yet COMPLETED workflow instances first.
   * completedAt desc - Descending, from the most recently COMPLETED or CANCELED workflow instance to the oldest ones, not yet COMPLETED workflow instances last.
   * startedBy asc - Ascending, from A to Z case-sensitive.
   * startedBy desc - Descending, from Z to A case-sensitive.
   * subject asc - Ascending, from A to Z case-sensitive, workflow instances without subject first.
   * subject desc - Descending, from Z to A case-sensitive, workflow instances without subject last.
   * businessKey asc - Ascending, from A to Z case-sensitive, workflow instances without business key first.
   * businessKey desc - Descending, from Z to A case-sensitive, workflow instances without business key last.
  ```
  @assert.range : true
  @openapi.in : 'query'
  @openapi.name : '$orderby'
  _orderby : String enum {
    id_asc = 'id asc';
    id_desc = 'id desc';
    definitionId_asc = 'definitionId asc';
    definitionId_desc = 'definitionId desc';
    definitionVersion_asc = 'definitionVersion asc';
    definitionVersion_desc = 'definitionVersion desc';
    startedAt_asc = 'startedAt asc';
    startedAt_desc = 'startedAt desc';
    completedAt_asc = 'completedAt asc';
    completedAt_desc = 'completedAt desc';
    startedBy_asc = 'startedBy asc';
    startedBy_desc = 'startedBy desc';
    subject_asc = 'subject asc';
    subject_desc = 'subject desc';
    businessKey_asc = 'businessKey asc';
    businessKey_desc = 'businessKey desc';
  },
  @description : ```
  Specify the number of records you want to skip from the beginning.
  You can skip at most 4000 records. To indicate a result range that starts, for example, at 1001, combine the \$skip with the \$top parameter.
  If not specified, no records are skipped.
  Refer also to the \$top parameter.
  ```
  @openapi.in : 'query'
  @openapi.name : '$skip'
  _skip : Integer,
  @description : ```
  Specify the number of records you want to show.
  You can get at most 1000 records per API call. To indicate a result range that starts, for example, at 1001, combine the \$top with the \$skip parameter.
  If not specified, 100 records are returned.
  Refer also to the \$skip parameter.
  ```
  @openapi.in : 'query'
  @openapi.name : '$top'
  _top : Integer,
  @description : ```
  Specify whether the total count of the workflow instances, which match the search criteria, should be returned as a value
  of the X-Total-Count response header. To enable the header, use the 'allpages' setting. To disable the header, use the 'none' setting.
  The values are case-sensitive.
  
  ```
  @assert.range : true
  @openapi.in : 'query'
  @openapi.name : '$inlinecount'
  _inlinecount : String enum {
    allpages;
    none;
  },
  @description : ```
  You can request custom workflow attributes to become part of the workflow instance output by specifying the value 'attributes' for the '\$expand' parameter.
  Otherwise, if the '\$expand' parameter is not specified, the 'attributes' field is not included into the output of the workflow instance. Note that labels
  as well as the order of the custom workflow attributes in which they are returned, are taken from the latest versions of the workflow definitions where
  these attributes are present.
  
  ```
  @assert.range : true
  @openapi.in : 'query'
  @openapi.name : '$expand'
  _expand : String enum {
    attributes;
  },
  @description : 'Specify the workflow instance ID. The workflow instance ID is 36 characters long.'
  @openapi.in : 'query'
  id : String(36),
  @description : 'Specify the ID of the workflow definition. The ID is at most 64 characters long.'
  @openapi.in : 'query'
  definitionId : String(64),
  @description : 'Specify the version of the workflow definition.'
  @openapi.in : 'query'
  definitionVersion : String,
  @description : 'Specify the status of the workflow instance. The values are not case-sensitive.'
  @assert.range : true
  @openapi.in : 'query'
  status : String enum {
    RUNNING;
    ERRONEOUS;
    SUSPENDED;
    CANCELED;
    COMPLETED;
  },
  @description : 'Specify at what time the workflow instance was started. Supports two date formats 1) yyyy-MM-dd''T''HH:mm:ss.SSS''Z'' 2) yyyyMMddHHmmss.SSS.'
  @openapi.in : 'query'
  startedAt : String,
  @description : ```
  Specify the beginning (inclusive) of the time range during which a returned workflow was started.
  
  Supports two date formats:
  
  1. yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
  1. yyyyMMddHHmmss.SSS
  
  The parameter operates on the 'startedAt' attribute of a workflow instance. It is combined with the following parameters,
  if available: 'startedUpTo' parameter using the logical 'and' operator; 'startedAt' parameter using the logical 'or' operator.
  
  ```
  @openapi.in : 'query'
  startedFrom : String,
  @description : ```
  Specify the end (inclusive) of the time range during which a returned workflow was started.
  
  Supports two date formats:
  
  1. yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
  1. yyyyMMddHHmmss.SSS
  
  The parameter operates on the 'startedAt' attribute of a workflow instance. It is combined with the following parameters,
  if available: 'startedFrom' parameter using the logical 'and' operator; 'startedAt' parameter using the logical 'or' operator.
  
  ```
  @openapi.in : 'query'
  startedUpTo : String,
  @description : ```
  Specify at what time the workflow instance was changed to status COMPLETED or CANCELED.
  
  Supports two date formats:
  
  1. yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
  1. yyyyMMddHHmmss.SSS
  
  ```
  @openapi.in : 'query'
  completedAt : String,
  @description : ```
  Specify the beginning (inclusive) of the time range during which a returned workflow was changed to status COMPLETED or CANCELED.
  
  Supports two date formats:
  
  1. yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
  1. yyyyMMddHHmmss.SSS
  
  The parameter operates on the 'completedAt' attribute of a workflow instance. It is combined with the following parameters,
  if available: 'completedUpTo' parameter using the logical 'and' operator; 'completedAt' parameter using the logical 'or' operator.
  
  ```
  @openapi.in : 'query'
  completedFrom : String,
  @description : ```
  Specify the end (inclusive) of the time range during which a returned workflow was changed to status COMPLETED or CANCELED.
  
  Supports two date formats:
  
  1. yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
  1. yyyyMMddHHmmss.SSS
  
  The parameter operates on the 'completedAt' attribute of a workflow instance. It is combined with the following parameters,
  if available: 'completedFrom' parameter using the logical 'and' operator; 'completedAt' parameter using the logical 'or' operator.
  
  ```
  @openapi.in : 'query'
  completedUpTo : String,
  @description : 'Specify the user who started the workflow instance, in UTF-8 encoding. The user ID is at most 255 characters long.'
  @openapi.in : 'query'
  startedBy : String(255),
  @description : `Specify the subject of the workflow instance, in UTF-8 encoding.
The subject of a workflow instance is limited to 255 characters.`
  @openapi.in : 'query'
  subject : String(255),
  @description : `Specify the text to search for, in UTF-8 encoding. Searches the id, definitionId, subject, startedBy, and businessKey attributes
of the workflow instances. The maximum length of these attributes is 255 characters.
`
  @openapi.in : 'query'
  containsText : String(255),
  @description : `Specify the business key of the workflow instance, in UTF-8 encoding.
The business key of a workflow instance is limited to 255 characters.`
  @openapi.in : 'query'
  businessKey : String(255),
  @description : `Specify the workflow root instance ID.
The workflow root instance ID is 36 characters long.`
  @openapi.in : 'query'
  rootInstanceId : String(36),
  @description : `Specify the workflow parent instance ID.
The workflow parent instance ID is 36 characters long or it can be null.`
  @openapi.in : 'query'
  parentInstanceId : String(36),
  @description : `Specify the SAP Build Process Automation project ID of the workflow instance.
The project ID of a workflow instance is limited to 255 characters.
`
  @openapi.in : 'query'
  projectId : String(255),
  @description : `Specify the SAP Build Process Automation project version of the workflow instance.
The project version of a workflow instance is limited to 64 characters.
`
  @openapi.in : 'query'
  projectVersion : String(64),
  @description : ```
  Example of a parameter that filters workflow instances by the value of the custom workflow attribute with the ID 'ExampleCustomAttribute'.
  You can specify parameters for other attributes in an analogous way.
  If you specify a parameter several times, the logical operators apply as outlined in the overall description of this API.
  If custom workflow attributes with different IDs are present in the URL, only workflow instances which contain all of them with the values specified will be returned as a response to the request.
  If a query by custom workflow attributes matches too many workflow definitions, you have to limit the query further. Refer, for example, to parameter 'definitionId'.
  
  ```
  @openapi.in : 'query'
  @openapi.name : 'attributes.ExampleCustomAttribute'
  attributes_ExampleCustomAttribute : String
) returns many Processes._.Workflows_types.WorkflowInstance;

@Common.Label : 'Workflow Instances'
@Core.Description : 'Start a new instance'
@Core.LongDescription : ```
Starts a new workflow instance of the provided workflow definition. Specify the ID of the workflow definition in the body.
The workflow instance automatically starts based on the latest deployed version of the definition.

Roles permitted to execute this operation:
 - Global roles: ProcessAutomationParticipant

```
@openapi.path : '/v1/workflow-instances'
action Processes._.Workflows.v1_workflow_instances_post(
  @openapi.in : 'body'
  body : Processes._.Workflows_types.WorkflowInstanceStartPayload
) returns Processes._.Workflows_types.WorkflowInstance;

@Common.Label : 'Workflow Instances'
@Core.Description : 'Delete instance by ID'
@Core.LongDescription : ```
Modifies the given workflow instances according to the specified operations.
Currently, the only operation supported is the deletion of workflow instances.
You can at most specify 10000 instances to delete in one API call.

Roles permitted to execute this operation: - Global roles: ProcessAutomationAdmin
```
@openapi.method : 'PATCH'
@openapi.path : '/v1/workflow-instances'
action Processes._.Workflows.v1_workflow_instances_patch(
  @openapi.in : 'body'
  body : many Processes._.Workflows_types.WorkflowInstancesUpdatePayload
);

@Common.Label : 'Workflow Instances'
@Core.Description : 'Update instance'
@Core.LongDescription : ```
Modifies the properties of a given workflow instance, for example, sets its status to CANCELED or RUNNING.

Status changes may not take effect immediately, due to asynchronous processing of the request. When you change the status to CANCELED, note the following:

* Workflow instances in CANCELED status are considered final, that is, no further changes are allowed. This is valid as well for other APIs and the processing according to the workflow definition.

* Workflow instances in CANCELED status stop processing as soon as the system allows.

When you are changing the status to SUSPENDED, note the following:

* Status SUSPENDED manually and temporarily suspends processing.

* You can choose to suspend the specified instance or the whole cascade by setting boolean parameter "cascade". By default, the parameter is false. When set to true, the operation is cascaded to its referenced subflow instances.

* Workflow instances in SUSPENDED status stop processing as soon as the system allows.

* Workflow instances remain in SUSPENDED status until a status change to RUNNING or CANCELED is requested.

* While the workflow instance status reported by the respective API might change with immediate effect, follow-up actions might only be successful, after asynchronous processing within the workflow instance actually has stopped. To check whether asynchronous processing is ongoing, analyze the execution logs or check the workflow definition structure.

When you are changing the status to RUNNING, note the following:

* For workflow instances in ERRONEOUS status, this retries the failed activities. If these activities continue failing, the workflow instance automatically moves again into ERRONEOUS status.

* If the workflow instance had previously been suspended while in ERRONEOUS status, failed activities, such as service tasks, are retried.

* You can choose to retry or resume the specified instance or the whole cascade by setting boolean parameter "cascade". By default, the parameter is false. When set to true, the operation is cascaded to its referenced subflow instances.

When you propagate the status change to subflow instances with the 'cascade' parameter, note the following:

* The effects outlined above are appropriately applied to the subflow instances. For example, instances in a final status like CANCELED are not changed by the API.

Roles permitted to execute this operation:
 - Global roles: ProcessAutomationAdmin
```
@openapi.method : 'PATCH'
@openapi.path : '/v1/workflow-instances/{workflowInstanceId}'
action Processes._.Workflows.v1_workflow_instances__patch(
  @description : 'The ID of the workflow instance, which should be modified. The workflow instance ID is 36 characters long.'
  @openapi.in : 'path'
  workflowInstanceId : String(36),
  @openapi.in : 'body'
  body : Processes._.Workflows_types.WorkflowInstanceUpdatePayload
);

@Common.Label : 'Workflow Instances'
@Core.Description : 'Retrieve workflow instance by ID'
@Core.LongDescription : ```
Retrieves the workflow instance with the specified workflow instance ID.

Roles permitted to execute this operation:
 - Global roles: ProcessAutomationAdmin
```
@openapi.path : '/v1/workflow-instances/{workflowInstanceId}'
function Processes._.Workflows.v1_workflow_instances_(
  @description : 'The ID of the workflow instance, which should be retrieved. The workflow instance ID is 36 characters long.'
  @openapi.in : 'path'
  workflowInstanceId : String(36),
  @description : ```
  You can request custom workflow attributes to become part of the workflow instance output by specifying the value 'attributes' for the '\$expand' parameter.
  Otherwise, if the '\$expand' parameter is not specified, the 'attributes' field is not included into the output of the workflow instance. Note that labels
  as well as the order of the custom workflow attributes in which they are returned, are taken from the latest versions of the workflow definitions where
  these attributes are present.
  
  ```
  @assert.range : true
  @openapi.in : 'query'
  @openapi.name : '$expand'
  _expand : String enum {
    attributes;
  }
) returns Processes._.Workflows_types.WorkflowInstance;

@Common.Label : 'Workflow Instances'
@Core.Description : 'Retrieve custom workflow attributes by workflow instance ID'
@Core.LongDescription : ```
Retrieves custom workflow attributes for a workflow instance. Labels as well as the order of the custom workflow attributes in which they are returned, are taken from the latest versions of the workflow definitions where these attributes are present.

Roles permitted to execute this operation: - Global roles: ProcessAutomationAdmin

```
@openapi.path : '/v1/workflow-instances/{workflowInstanceId}/attributes'
function Processes._.Workflows.v1_workflow_instances__attributes(
  @description : 'The ID of the workflow instance for which the custom workflow attributes should be retrieved. The ID is 36 characters long.'
  @openapi.in : 'path'
  workflowInstanceId : String(36)
) returns many Processes._.Workflows_types.CustomAttribute;

@Common.Label : 'Workflow Instances'
@Core.Description : 'Retrieve instance context'
@Core.LongDescription : ```
Retrieves the context for a workflow instance independent of its status.

Roles permitted to execute this operation:
 - Global roles: ProcessAutomationAdmin
```
@openapi.path : '/v1/workflow-instances/{workflowInstanceId}/context'
function Processes._.Workflows.v1_workflow_instances__context(
  @description : 'The workflow instance ID for which the context should be retrieved. The workflow instance ID is 36 characters long.'
  @openapi.in : 'path'
  workflowInstanceId : String(36)
) returns { };

@Common.Label : 'Workflow Instances'
@Core.Description : 'Update instance context'
@Core.LongDescription : ```
Modifies parts of the context for a workflow instance independent of its status.

Take special care when using this API, because it might change the workflow context in ways that are incompatible with the expectations
of the tasks in the workflow definition. Before changing the context, we recommend that you suspend the workflow instance and make sure that
the execution has come to a halt, that is, that no further steps are being added to the execution log. Refer to PATCH on the parent resource
and GET on the 'execution-logs' sibling resource.

Roles permitted to execute this operation:
 - Global roles: ProcessAutomationAdmin
```
@openapi.method : 'PATCH'
@openapi.path : '/v1/workflow-instances/{workflowInstanceId}/context'
action Processes._.Workflows.v1_workflow_instances__context_patch(
  @description : 'Specify the workflow instance ID for which the context should be modified. The workflow instance ID is 36 characters long.'
  @openapi.in : 'path'
  workflowInstanceId : String(36),
  @description : 'Specify the new parts of the workflow instance context.'
  @openapi.in : 'body'
  body : { }
);

@Common.Label : 'Workflow Instances'
@Core.Description : 'Overwrite instance context'
@Core.LongDescription : ```
Overrides the context for a workflow instance independent of its status.

Take special care when using this API, because it will override the workflow context, that is, it might change the workflow context
in ways that are incompatible with the expectations of the tasks in the workflow definition. Before changing the context, we recommend that you
suspend the workflow instance and check that the execution has come to a halt, that is, no further steps are being added to the execution log.
Refer to PATCH on the parent resource and GET on the 'execution-logs' sibling resource.

Roles permitted to execute this operation:
 - Global roles: ProcessAutomationAdmin
```
@openapi.method : 'PUT'
@openapi.path : '/v1/workflow-instances/{workflowInstanceId}/context'
action Processes._.Workflows.v1_workflow_instances__context_put(
  @description : 'Specify the workflow instance ID for which the context should be overridden. The workflow instance ID is 36 characters long.'
  @openapi.in : 'path'
  workflowInstanceId : String(36),
  @description : 'Specify the new context of the workflow instance.'
  @openapi.in : 'body'
  body : { }
);

@Common.Label : 'Workflow Instances'
@Core.Description : 'Retrieve error messages'
@Core.LongDescription : ```
Retrieves current error messages for a workflow instance.

Roles permitted to execute this operation:
 - Global roles: ProcessAutomationDeveloper, ProcessAutomationAdmin

```
@openapi.path : '/v1/workflow-instances/{workflowInstanceId}/error-messages'
function Processes._.Workflows.v1_workflow_instances__error_messages(
  @description : 'The workflow instance ID for which the error messages should be retrieved. The workflow instance ID is 36 characters long.'
  @openapi.in : 'path'
  workflowInstanceId : String(36)
) returns many Processes._.Workflows_types.WorkflowInstanceErrorMessage;

@Common.Label : 'Workflow Instances'
@Core.Description : 'Retrieve execution logs'
@Core.LongDescription : ```
Retrieves execution logs for a given workflow instance.

Roles permitted to execute this operation:
 - Global roles: ProcessAutomationAdmin

```
@openapi.path : '/v1/workflow-instances/{workflowInstanceId}/execution-logs'
function Processes._.Workflows.v1_workflow_instances__execution_logs(
  @description : 'The workflow instance ID for which the execution logs should be retrieved. The workflow instance ID is 36 characters long.'
  @openapi.in : 'path'
  workflowInstanceId : String(36)
) returns many Processes._.Workflows_types.WorkflowInstanceExecutionLog;

@Common.Label : 'Data Export'
@Core.Description : 'Data Export'
@Core.LongDescription : ```
Requests the export of workflow definitions metadata, form definitions metadata, workflow instances, and task instances. The file and data structures used are subject to change.

Roles permitted to execute this operation:
 - Global roles: ProcessAutomationAdmin

```
@openapi.path : '/v1/export'
function Processes._.Workflows.v1_export() returns Boolean;

@Common.Label : 'Jobs'
@Core.Description : 'Retrieve Job status'
@Core.LongDescription : ```
Tracks the status of API requests, which the server executed asynchronously.
Roles permitted to execute this operation:
 - Global roles: ProcessAutomationAdmin

```
@openapi.path : '/v1/jobs/{jobId}'
function Processes._.Workflows.v1_jobs_(
  @description : `The ID of the job for which you check the status.
Typically, the ID has been retrieved from another API request that was processed asynchronously.
The ID is at most 36 characters long.`
  @openapi.in : 'path'
  jobId : String(36)
) returns Processes._.Workflows_types.Job;

@Common.Label : 'Messages'
@Core.Description : 'Send message'
@Core.LongDescription : ```
Sends a message to a set of workflow instances for consumption in intermediate message events. The message is identified by the name specified in the workflow model (request body parameter 'definitionId')
and parameters identifying the workflow instances that should consume the message.

From the process builder of SAP Build Process Automation, you currently cannot model intermediate message events. This API exists for workflows that originate from other editors.

The message is consumed by the workflow instances that match the following criteria:

* The instance can be a specific match when using its workflow instance ID (request body parameter 'workflowInstanceId').
Or the instance is a generic match when using the ID of the workflow model together with the business key (request body parameters 'workflowDefinitionId' respectively 'businessKey').
You can either use the specific or generic match but not both in the same call.

* The workflow instance is not in the SUSPENDED state.

* The workflow instance currently waits at the intermediate message event referring to the specified message.

The business key of a workflow instance matches if the business key specified in the request body is the same.

Roles permitted to execute this operation:
 - Global roles: WorkflowMessageSender
```
@openapi.path : '/v1/messages'
action Processes._.Workflows.v1_messages_post(
  @openapi.in : 'body'
  body : Processes._.Workflows_types.SendMessagePayload
) returns many Processes._.Workflows_types.ConsumingWorkflowInstance;

type Processes._.Workflows_types.AttachmentsContext {
  @description : 'A folder that shall be used for uploading files at the remote repository.'
  rootFolder : String;
  @description : 'A map of groups allowing to semantically separate attachments. The key is the group name.'
  groups : { };
};

type Processes._.Workflows_types.SendMessagePayload {
  @description : 'Specify the data to be written into the response variable defined on the intermediate message event.'
  context : { };
  @description : 'Specify the definition ID of the message. This corresponds to the "Message Name" field on the intermediate message event. The definition ID is at most 128 characters long.'
  definitionId : String(128);
  @description : `Specify the workflow instance ID of the workflow instance that should receive the message.
The workflow instance ID is 36 characters long.
You must specify either workflowInstanceId or the pair of workflowDefinitionId and businessKey.`
  workflowInstanceId : String(36);
  @description : `Specify the definition ID of the workflow the message belongs to.
The definition ID is at most 64 characters long.
You must specify either workflowInstanceId or the pair of workflowDefinitionId and businessKey.`
  workflowDefinitionId : String(64);
  @description : `Specify the business key of the workflow instance, that should receive the message.
The business key of a workflow instance is limited to 255 characters.
You must specify either workflowInstanceId or the pair of workflowDefinitionId and businessKey.`
  businessKey : String(255);
};

type Processes._.Workflows_types.TaskInstance {
  @description : 'The definition ID of the user task instance. The ID is at most 255 characters long.'
  activityId : String(255);
  @description : 'The time when the user task instance was claimed and its status changed to RESERVED.'
  claimedAt : Timestamp;
  @description : 'The time when the user task instance status changed to COMPLETED.'
  completedAt : Timestamp;
  @description : 'The time when the user task instance was created.'
  createdAt : Timestamp;
  @description : 'The user who created the user task instance. The user ID is at most 255 characters long.'
  createdBy : String(255);
  @description : 'The last time the user task instance was changed.'
  lastChangedAt : Timestamp;
  @description : 'The description of the user task instance.'
  description : String;
  @description : 'The ID of the user task instance. The ID is at least 36 characters long.'
  id : String(255);
  @description : 'The priority of the user task instance.'
  @assert.range : true
  priority : String enum {
    VERY_HIGH;
    HIGH;
    MEDIUM;
    LOW;
  };
  @description : 'The time when the user task instance is or was due to be COMPLETED.'
  dueDate : Timestamp;
  @description : 'The user who is processing (has claimed) the user task instance. The user ID is at most 255 characters long.'
  processor : String(255);
  @description : 'The recipient users of the user task instance.'
  recipientUsers : many Processes._.Workflows.anonymous.type0;
  @description : 'The recipient groups of the user task instance.'
  recipientGroups : many Processes._.Workflows.anonymous.type1;
  @description : 'The status of the user task instance.'
  @assert.range : true
  status : String enum {
    READY;
    RESERVED;
    CANCELED;
    COMPLETED;
  };
  @description : 'The subject of the user task instance. The subject is at most 255 characters long.'
  subject : String(255);
  @description : 'The definition ID of the workflow the user task instance belongs to. The ID is at most 64 characters long.'
  workflowDefinitionId : String(64);
  @description : 'The instance ID of the workflow the user task instance belongs to. The ID is at least 36 characters long.'
  workflowInstanceId : String(255);
  @description : 'Attributes of the user task instance. Present only if the $expand parameter in the query has the value "attributes".'
  attributes : many Processes._.Workflows_types.CustomAttribute;
  @description : `The definition ID of the user task.
It consists of the ID of the task defined in the workflow definition (task definition ID) as well as the workflow definition ID delimited by an '@' sign.
`
  definitionId : String(511);
  @description : 'The scope to which the definition belongs. Either "own", "shared" or a named scope.'
  applicationScope : String;
};

type Processes._.Workflows_types.TaskInstanceList : many {
  @description : 'The definition ID of the user task instance. The ID is at most 255 characters long.'
  activityId : String(255);
  @description : 'The time when the user task instance was claimed and its status changed to RESERVED.'
  claimedAt : Timestamp;
  @description : 'The time when the user task instance status changed to COMPLETED.'
  completedAt : Timestamp;
  @description : 'The time when the user task instance was created.'
  createdAt : Timestamp;
  @description : 'The user who created the user task instance. The user ID is at most 255 characters long.'
  createdBy : String(255);
  @description : 'The last time the user task instance was changed.'
  lastChangedAt : Timestamp;
  @description : 'The description of the user task instance.'
  description : String;
  @description : 'The ID of the user task instance. The ID is at least 36 characters long.'
  id : String(255);
  @description : 'The priority of the user task instance.'
  @assert.range : true
  priority : String enum {
    VERY_HIGH;
    HIGH;
    MEDIUM;
    LOW;
  };
  @description : 'The time when the user task instance is or was due to be COMPLETED.'
  dueDate : Timestamp;
  @description : 'The user who is processing (has claimed) the user task instance. The user ID is at most 255 characters long.'
  processor : String(255);
  @description : 'The recipient users of the user task instance.'
  recipientUsers : many Processes._.Workflows.anonymous.type2;
  @description : 'The recipient groups of the user task instance.'
  recipientGroups : many Processes._.Workflows.anonymous.type3;
  @description : 'The status of the user task instance.'
  @assert.range : true
  status : String enum {
    READY;
    RESERVED;
    CANCELED;
    COMPLETED;
  };
  @description : 'The subject of the user task instance. The subject is at most 255 characters long.'
  subject : String(255);
  @description : 'The definition ID of the workflow the user task instance belongs to. The ID is at most 64 characters long.'
  workflowDefinitionId : String(64);
  @description : 'The instance ID of the workflow the user task instance belongs to. The ID is at least 36 characters long.'
  workflowInstanceId : String(255);
  @description : 'Attributes of the user task instance. Present only if the $expand parameter in the query has the value "attributes".'
  attributes : many Processes._.Workflows_types.CustomAttribute;
  @description : `The definition ID of the user task.
It consists of the ID of the task defined in the workflow definition (task definition ID) as well as the workflow definition ID delimited by an '@' sign.
`
  definitionId : String(511);
  @description : 'The scope to which the definition belongs. Either "own", "shared" or a named scope.'
  applicationScope : String;
};

type Processes._.Workflows_types.UpdateTaskInstancePayload {
  @description : 'The changes to the context of the workflow instance the user task belongs to.'
  context : { };
  @description : 'Specify the new status of the task instance.'
  @assert.range : true
  status : String enum {
    COMPLETED;
  };
  @description : `Specify the decision taken by the user when the task status is set to 'COMPLETED'.
The decision can be evaluated with a respective expression to adapt the control flow accordingly.`
  decision : String(255);
  @description : ```
  Specify the new subject of the task instance.
  The subject can be at most 255 characters long.
  
  Note that patching a translated subject is not supported, i.e. GET requests executed on a translated user task do not display the patched text.
  ```
  subject : String(255);
  @description : ```
  Specify the new description of the task instance.
  The description can be at most 4000 characters long.
  
  Note that patching a translated description is not supported, i.e. GET requests executed on a translated user task do not display the patched text.
  ```
  description : String(4000);
  @description : `Specify the new recipient users of the task instance as a comma-separated list.
Specify at most 100 recipient users.
The ID of a recipient user can be at most 255 characters long.`
  recipientUsers : String;
  @description : `Specify the new recipient groups of the task instance, as a comma-separated list.
Specify at most 100 recipient groups.
The ID of a recipient group can be at most 255 characters long.`
  recipientGroups : String;
  @description : `Specify the new processor of the task instance.
The ID of the processor can be at most 255 characters long and must not contain commas.`
  processor : String(255);
  @description : 'Specify the new due date of the task instance.'
  dueDate : Timestamp;
  @description : 'Specify the new priority of the task instance.'
  @assert.range : true
  priority : String enum {
    VERY_HIGH;
    HIGH;
    MEDIUM;
    LOW;
  };
  @description : 'Specify the confidenceLevel for a task instance. The value must be between 0.0 and 1.0. To delete the confidenceLevel, specify a value of -1.0.'
  confidenceLevel : Double;
};

type Processes._.Workflows_types.TaskDefinition {
  @description : `The definition ID of the task definition. The ID is at most 511 characters long.
It consists of the ID of the task defined in the workflow definition (task definition ID) as well as the workflow definition ID delimited by an '@' sign.
`
  id : String(511);
  @description : 'The name of the corresponding task in the workflow definition, in the original language. The value is taken from the latest workflow definition where the task definition exists.'
  name : String;
  @description : 'The time when the task definition was created.'
  createdAt : Timestamp;
  @description : 'Attribute definitions of the task definition. Present only if the $expand parameter in the query has the value "attributeDefinitions".'
  attributeDefinitions : Processes._.Workflows_types.TaskDefinitionAttributeList;
};

type Processes._.Workflows_types.TaskDefinitionList : many {
  @description : `The definition ID of the task definition. The ID is at most 511 characters long.
It consists of the ID of the task defined in the workflow definition (task definition ID) as well as the workflow definition ID delimited by an '@' sign.
`
  id : String(511);
  @description : 'The name of the corresponding task in the workflow definition, in the original language. The value is taken from the latest workflow definition where the task definition exists.'
  name : String;
  @description : 'The time when the task definition was created.'
  createdAt : Timestamp;
  @description : 'Attribute definitions of the task definition. Present only if the $expand parameter in the query has the value "attributeDefinitions".'
  attributeDefinitions : Processes._.Workflows_types.TaskDefinitionAttributeList;
};

type Processes._.Workflows_types.FormMetadata {
  @description : `The definition ID of the form definition. The ID is at most 255 characters long.
`
  id : String(255);
  @description : 'The name of the form definition, in the original language.'
  name : String;
  @description : 'The technical version of the form definition version.'
  version : Integer;
  @description : 'The revision of the form definition version.'
  revision : String;
  @description : 'The type of the form definition version.'
  @assert.range : true
  type : String enum {
    start;
    task;
  };
  @description : 'The time when the form definition version was deployed.'
  createdAt : Timestamp;
  @description : 'The ID of the user who deployed the form definition version.'
  createdBy : String;
  @description : 'A list of workflow definitions in case the form definition version is of type ''start'''
  workflowDefinitions : many Processes._.Workflows.anonymous.type4;
};

type Processes._.Workflows_types.FormModel {
  content : many { };
};

type Processes._.Workflows_types.WorkflowDefinition {
  @description : 'The workflow definition ID. The ID is at most 64 characters long.'
  id : String(64);
  @description : 'The workflow definition name. The name is at most 255 characters long.'
  name : String(255);
  @description : 'The workflow definition version.'
  version : String;
  @description : 'The time when the workflow definition was deployed.'
  createdAt : Timestamp;
  @description : `The user who deployed the workflow definition. The user ID is at most 255 characters long.
This property may not be included for workflow definitions that were deployed before May 21, 2018.`
  createdBy : String(255);
  @description : 'The scope to which the definition belongs. Either "own", "shared" or a named scope.'
  applicationScope : String;
  @description : 'The jobs related to the workflow definition.'
  jobs : many Processes._.Workflows_types.WorkflowDefinitionJob;
};

type Processes._.Workflows_types.WorkflowDefinitionJob {
  @description : 'The job ID. The ID is at least 36 characters long.'
  id : String(255);
  @description : 'The purpose of the job.'
  @assert.range : true
  purpose : String enum {
    delete;
  };
};

type Processes._.Workflows_types.WorkflowModel {
  contents : { };
};

type Processes._.Workflows_types.WorkflowDefinitionList : many {
  @description : 'The workflow definition ID. The ID is at most 64 characters long.'
  id : String(64);
  @description : 'The workflow definition name. The name is at most 255 characters long.'
  name : String(255);
  @description : 'The workflow definition version.'
  version : String;
  @description : 'The time when the workflow definition was deployed.'
  createdAt : Timestamp;
  @description : `The user who deployed the workflow definition. The user ID is at most 255 characters long.
This property may not be included for workflow definitions that were deployed before May 21, 2018.`
  createdBy : String(255);
  @description : 'The scope to which the definition belongs. Either "own", "shared" or a named scope.'
  applicationScope : String;
  @description : 'The jobs related to the workflow definition.'
  jobs : many Processes._.Workflows_types.WorkflowDefinitionJob;
};

type Processes._.Workflows_types.WorkflowDefinitionVersion {
  @description : 'The workflow definition ID. The ID is at most 64 characters long.'
  id : String(64);
  @description : 'The workflow definition name. The name is at most 255 characters long.'
  name : String(255);
  @description : 'The workflow definition version.'
  version : String;
  @description : 'The time when the workflow definition was deployed.'
  createdAt : Timestamp;
  @description : `The user who deployed the workflow definition. The user ID is at most 255 characters long.
This property may not be included for workflow definitions that were deployed before May 21, 2018.`
  createdBy : String(255);
  @description : 'The scope to which the definition belongs. Either "own", "shared" or a named scope.'
  applicationScope : String;
};

type Processes._.Workflows_types.WorkflowDefinitionVersionList : many {
  @description : 'The workflow definition ID. The ID is at most 64 characters long.'
  id : String(64);
  @description : 'The workflow definition name. The name is at most 255 characters long.'
  name : String(255);
  @description : 'The workflow definition version.'
  version : String;
  @description : 'The time when the workflow definition was deployed.'
  createdAt : Timestamp;
  @description : `The user who deployed the workflow definition. The user ID is at most 255 characters long.
This property may not be included for workflow definitions that were deployed before May 21, 2018.`
  createdBy : String(255);
  @description : 'The scope to which the definition belongs. Either "own", "shared" or a named scope.'
  applicationScope : String;
};

type Processes._.Workflows_types.SampleContext {
  @description : 'The ID of the default start context. The ID is at most 255 characters long.'
  id : String(255);
  @description : 'The default start context configured in the start event.'
  content : { };
  @description : 'The ID of the start event for which the default start context is configured. The ID is at most 255 characters long.'
  modelElementId : String(255);
};

type Processes._.Workflows_types.WorkflowInstanceUpdatePayload {
  @description : 'The new status of the workflow instance.'
  @assert.range : true
  status : String enum {
    CANCELED;
    RUNNING;
    SUSPENDED;
  };
  @description : 'Indicate whether the statuses of the whole cascade of workflow instances are changed, including the workflow instance given in the API request as well as its subflow instances, or only of the given workflow instance. By default, no cascade to subflow instances happens.'
  cascade : Boolean;
};

type Processes._.Workflows_types.WorkflowInstancesUpdatePayload {
  @description : 'The ID of the workflow instance, which should be modified. The ID of a workflow instance is 36 characters long.'
  id : String(36);
  @description : 'If set to true, the workflow instance and related data (for example, execution logs) are deleted.'
  deleted : Boolean;
};

type Processes._.Workflows_types.WorkflowInstanceStartPayload {
  @description : 'Specify the ID of the workflow definition for which an instance should be started. The ID is at most 64 characters long.'
  definitionId : String(64);
  @description : 'Specify the initial context of the workflow instance.'
  context : { };
};

type Processes._.Workflows_types.WorkflowInstance {
  @description : 'The ID of the workflow definition for which the instance was started. The ID is at most 64 characters long.'
  definitionId : String(64);
  @description : 'The version of the workflow definition for which the instance was started.'
  definitionVersion : String;
  @description : 'The workflow instance ID. The ID is at least 36 characters long.'
  id : String(255);
  @description : 'The time when the workflow instance started.'
  startedAt : Timestamp;
  @description : 'The user who started the workflow instance. The user ID is at most 255 characters long.'
  startedBy : String(255);
  @description : 'The time when the workflow instance status changed to COMPLETED.'
  completedAt : Timestamp;
  @description : 'The status of the workflow instance.'
  @assert.range : true
  status : String enum {
    RUNNING;
    ERRONEOUS;
    SUSPENDED;
    CANCELED;
    COMPLETED;
  };
  @description : 'The business key of the workflow instance. The business key of a workflow instance is limited to 255 characters.'
  businessKey : String(255);
  @description : 'The subject of the workflow instance. The subject of a workflow instance is limited to 255 characters.'
  subject : String(255);
  @description : 'The workflow root instance ID. The root ID is at least 36 characters long.'
  rootInstanceId : String(255);
  @description : 'The workflow parent instance ID. The parent ID can be null or at least 36 characters long.'
  parentInstanceId : String(255);
  @description : 'The scope to which the workflow instance belongs. Either "own", "shared", or a named scope.'
  applicationScope : String;
  @description : 'The project ID  of the SAP Build Process Automation project to which workflowinstance belongs to. It has the format of region.subaccount.projectName. The projectid is limited to 255 characters.'
  projectId : String(255);
  @description : 'The project version of SAP Build Process Automation project to which workflowinstance belongs to. The projectversion is limited to 64 characters.'
  projectVersion : String(64);
  @description : 'Attributes of the workflow instance. Present only if the $expand parameter in the query has the value "attributes".'
  attributes : many Processes._.Workflows_types.CustomAttribute;
};

type Processes._.Workflows_types.ConsumingWorkflowInstance {
  @description : 'The ID of the workflow instance, which consumed the message. The ID is at least 36 characters long.'
  id : String(255);
};

type Processes._.Workflows_types.WorkflowInstanceExecutionLog {
  @description : 'The ID of the execution log entry.'
  id : String;
  @description : 'The execution log entry type.'
  @assert.range : true
  type : String enum {
    WORKFLOW_STARTED;
    WORKFLOW_COMPLETED;
    WORKFLOW_CANCELED;
    WORKFLOW_CONTINUED;
    WORKFLOW_SUSPENDED;
    WORKFLOW_CONTEXT_OVERWRITTEN_BY_ADMIN;
    WORKFLOW_CONTEXT_PATCHED_BY_ADMIN;
    WORKFLOW_ROLES_PATCHED_BY_ADMIN;
    WORKFLOW_RESUMED;
    USERTASK_CREATED;
    USERTASK_CLAIMED;
    USERTASK_RELEASED;
    USERTASK_COMPLETED;
    USERTASK_FAILED;
    USERTASK_PATCHED_BY_ADMIN;
    USERTASK_CANCELED_BY_BOUNDARY_EVENT;
    SERVICETASK_CREATED;
    SERVICETASK_COMPLETED;
    SERVICETASK_FAILED;
    SCRIPTTASK_CREATED;
    SCRIPTTASK_COMPLETED;
    SCRIPTTASK_FAILED;
    INTERMEDIATE_TIMER_EVENT_REACHED;
    INTERMEDIATE_TIMER_EVENT_TRIGGERED;
    INTERMEDIATE_TIMER_EVENT_FAILED;
    INTERMEDIATE_MESSAGE_EVENT_REACHED;
    INTERMEDIATE_MESSAGE_EVENT_TRIGGERED;
    NONCANCELING_BOUNDARY_TIMER_EVENT_TRIGGERED;
    CANCELING_BOUNDARY_TIMER_EVENT_TRIGGERED;
    MAILTASK_CREATED;
    MAILTASK_COMPLETED;
    MAILTASK_FAILED;
    EXCLUSIVE_GATEWAY_REACHED;
    EXCLUSIVE_GATEWAY_FAILED;
    PARALLEL_GATEWAY_REACHED;
    PARALLEL_GATEWAY_FAILED;
    AUTOMATIONTASK_CREATED;
    AUTOMATIONTASK_COMPLETED;
    AUTOMATIONTASK_FAILED;
    RULETASK_CREATED;
    RULETASK_COMPLETED;
    RULETASK_FAILED;
    INTERMEDIATE_ESCALATION_EVENT_EMITTED;
    CANCELING_BOUNDARY_ESCALATION_EVENT_TRIGGERED;
    NONCANCELING_BOUNDARY_ESCALATION_EVENT_TRIGGERED;
  };
  @description : 'The time the execution log entry was created.'
  timestamp : Timestamp;
  @description : `An ID that groups events together by their activity and their token of execution in the workflow.
For example, all events relating to the same script task (started, failed, completed) would have the same referenceInstanceId.
`
  referenceInstanceId : String;
  @description : 'The ID of the model element. The ID is at most 255 characters long.'
  activityId : String(255);
  @description : 'The ID of the parent workflow instance. The ID is at most 64 characters long.'
  parentInstanceId : String(64);
  @description : 'The ID of the root workflow instance. The ID is at most 64 characters long.'
  rootInstanceId : String(64);
  @description : 'The name of the model element or the subject of the user task. The name/subject is at most 255 characters long.'
  subject : String(255);
  @description : 'The user who executed the action. The user ID is at most 255 characters long.'
  userId : String(255);
  @description : 'The code of the escalation emitted.'
  escalationCode : String;
  ruleService : {
    @description : 'ID of the Rule Service.'
    id : String;
    @description : 'Version of the Rule Service.'
    version : String;
    @description : 'Revision of the Rule Service.'
    revision : String;
  };
  error : {
    @description : 'The error message.'
    message : String;
    @description : 'The error category.'
    errorCode : String;
    @description : 'The log ID referring to the error.'
    logId : String;
  };
  @description : 'The recipient users of a user task.'
  recipientUsers : many Processes._.Workflows.anonymous.type5;
  @description : 'The recipient groups of a user task.'
  recipientGroups : many Processes._.Workflows.anonymous.type6;
  @description : 'The user who started the user task. The user ID is at most 255 characters long.'
  initiatorId : String(255);
  @description : 'Information about the service task.'
  restEndpoint : {
    @description : 'The HTTP method.'
    httpMethod : String;
    @description : 'The name of the destination.'
    destinationName : String;
    @description : 'The subdomain of the account in which the destination was looked up.'
    destinationSubdomain : String;
    @description : 'The URL configured in the destination.'
    destinationUrl : String;
    @description : 'The relative URL configured in the service task.'
    relativePath : String;
  };
  @description : 'The remaining number of retries. If no retries are left the workflow instance is ERRONEOUS.'
  retriesRemaining : Integer;
  @description : 'The ID of the user task. The ID is at least 36 characters long.'
  taskId : String(255);
  @description : 'The changes made to the context or user task.'
  changes : {
    @description : 'The variables, which were created in the context.'
    create : many String;
    @description : 'The variables, which were updated in the context or the user task attributes, which were updated.'
    update : many String;
    @description : 'The variables, which were deleted from the context.'
    delete : many String;
  };
  @description : 'The recipients of a mail task.'
  recipients : {
    @description : 'The ''to'' recipients.'
    to : many String;
    @description : 'The ''cc'' recipients.'
    cc : many String;
    @description : 'The ''bcc'' recipients.'
    bcc : many String;
    @description : 'The ignored recipients from "to", "cc" and "bcc" fields if they exist.'
    ignored : many String;
  };
  @description : 'Indicates whether the sending of emails is disabled.'
  sendDisabled : Boolean;
  @description : 'The name of the principal on whose behalf the service task has been executed.'
  propagatedPrincipal : String;
  @description : 'The name of the affected model element. The activity name is at most 255 characters long.'
  activityName : String(255);
  @description : 'The activityId of the boundary timer event causing the cancellation of the user task. It is at most 255 characters long.'
  cause : String(255);
  @description : 'The name of the boundary timer event. The name is at most 64 characters long.'
  boundaryEventName : String(64);
  @description : 'The subdomain of the account in which the destination was looked up.'
  destinationSubdomain : String;
};

type Processes._.Workflows_types.WorkflowInstanceExecutionLogList : many {
  @description : 'The ID of the execution log entry.'
  id : String;
  @description : 'The execution log entry type.'
  @assert.range : true
  type : String enum {
    WORKFLOW_STARTED;
    WORKFLOW_COMPLETED;
    WORKFLOW_CANCELED;
    WORKFLOW_CONTINUED;
    WORKFLOW_SUSPENDED;
    WORKFLOW_CONTEXT_OVERWRITTEN_BY_ADMIN;
    WORKFLOW_CONTEXT_PATCHED_BY_ADMIN;
    WORKFLOW_ROLES_PATCHED_BY_ADMIN;
    WORKFLOW_RESUMED;
    USERTASK_CREATED;
    USERTASK_CLAIMED;
    USERTASK_RELEASED;
    USERTASK_COMPLETED;
    USERTASK_FAILED;
    USERTASK_PATCHED_BY_ADMIN;
    USERTASK_CANCELED_BY_BOUNDARY_EVENT;
    SERVICETASK_CREATED;
    SERVICETASK_COMPLETED;
    SERVICETASK_FAILED;
    SCRIPTTASK_CREATED;
    SCRIPTTASK_COMPLETED;
    SCRIPTTASK_FAILED;
    INTERMEDIATE_TIMER_EVENT_REACHED;
    INTERMEDIATE_TIMER_EVENT_TRIGGERED;
    INTERMEDIATE_MESSAGE_EVENT_REACHED;
    INTERMEDIATE_MESSAGE_EVENT_TRIGGERED;
    NONCANCELING_BOUNDARY_TIMER_EVENT_TRIGGERED;
    CANCELING_BOUNDARY_TIMER_EVENT_TRIGGERED;
    MAILTASK_CREATED;
    MAILTASK_COMPLETED;
    MAILTASK_FAILED;
    EXCLUSIVE_GATEWAY_REACHED;
    EXCLUSIVE_GATEWAY_FAILED;
    PARALLEL_GATEWAY_REACHED;
    PARALLEL_GATEWAY_FAILED;
    AUTOMATIONTASK_CREATED;
    AUTOMATIONTASK_COMPLETED;
    AUTOMATIONTASK_FAILED;
    RULETASK_CREATED;
    RULETASK_COMPLETED;
    RULETASK_FAILED;
    INTERMEDIATE_ESCALATION_EVENT_EMITTED;
    CANCELING_BOUNDARY_ESCALATION_EVENT_TRIGGERED;
    NONCANCELING_BOUNDARY_ESCALATION_EVENT_TRIGGERED;
  };
  @description : 'The time the execution log entry was created.'
  timestamp : Timestamp;
  @description : `An ID that groups events together by their activity and their token of execution in the workflow.
For example, all events relating to the same script task (started, failed, completed) would have the same referenceInstanceId.
`
  referenceInstanceId : String;
  @description : 'The ID of the model element. The ID is at most 255 characters long.'
  activityId : String(255);
  @description : 'The name of the model element or the subject of the user task. The name/subject is at most 255 characters long.'
  subject : String(255);
  @description : 'The user who executed the action. The user ID is at most 255 characters long.'
  userId : String(255);
  @description : 'The code of the escalation emitted.'
  escalationCode : String;
  ruleService : {
    @description : 'ID of the Rule Service.'
    id : String;
    @description : 'Version of the Rule Service.'
    version : String;
    @description : 'Revision of the Rule Service.'
    revision : String;
  };
  error : {
    @description : 'The error message.'
    message : String;
    @description : 'The error category.'
    errorCode : String;
    @description : 'The log ID referring to the error.'
    logId : String;
  };
  @description : 'The recipient users of a user task.'
  recipientUsers : many Processes._.Workflows.anonymous.type7;
  @description : 'The recipient groups of a user task.'
  recipientGroups : many Processes._.Workflows.anonymous.type8;
  @description : 'The user who started the user task. The user ID is at most 255 characters long.'
  initiatorId : String(255);
  @description : 'Information about the service task.'
  restEndpoint : {
    @description : 'The HTTP method.'
    httpMethod : String;
    @description : 'The name of the destination.'
    destinationName : String;
    @description : 'The subdomain of the account in which the destination was looked up.'
    destinationSubdomain : String;
    @description : 'The URL configured in the destination.'
    destinationUrl : String;
    @description : 'The relative URL configured in the service task.'
    relativePath : String;
  };
  @description : 'The remaining number of retries. If no retries are left the workflow instance is ERRONEOUS.'
  retriesRemaining : Integer;
  @description : 'The ID of the user task. The ID is at least 36 characters long.'
  taskId : String(255);
  @description : 'The changes made to the context or user task.'
  changes : {
    @description : 'The variables, which were created in the context.'
    create : many String;
    @description : 'The variables, which were updated in the context or the user task attributes, which were updated.'
    update : many String;
    @description : 'The variables, which were deleted from the context.'
    delete : many String;
  };
  @description : 'The recipients of a mail task.'
  recipients : {
    @description : 'The ''to'' recipients.'
    to : many String;
    @description : 'The ''cc'' recipients.'
    cc : many String;
    @description : 'The ''bcc'' recipients.'
    bcc : many String;
    @description : 'The ignored recipients from "to", "cc" and "bcc" fields if they exist.'
    ignored : many String;
  };
  @description : 'Indicates whether the sending of emails is disabled.'
  sendDisabled : Boolean;
  @description : 'The name of the principal on whose behalf the service task has been executed.'
  propagatedPrincipal : String;
  @description : 'The name of the affected model element. The activity name is at most 255 characters long.'
  activityName : String(255);
  @description : 'The activityId of the boundary timer event causing the cancellation of the user task. It is at most 255 characters long.'
  cause : String(255);
  @description : 'The name of the boundary timer event. The name is at most 64 characters long.'
  boundaryEventName : String(64);
  @description : 'The subdomain of the account in which the destination was looked up.'
  destinationSubdomain : String;
};

type Processes._.Workflows_types.WorkflowInstanceErrorMessage {
  @description : 'The ID of the model element where the error occurred. The ID is at most 255 characters long.'
  activityId : String(255);
  @description : 'The name of the model element where the error occurred. The name is at most 255 characters long.'
  activityName : String(255);
  @description : 'The error category.'
  errorCode : String;
  @description : 'The log ID referring to the error.'
  logId : String;
  @description : 'The error message.'
  message : String;
  @description : 'The time when the error occurred.'
  timestamp : Timestamp;
};

type Processes._.Workflows_types.WorkflowInstanceErrorMessageList : many {
  @description : 'The ID of the model element where the error occurred. The ID is at most 255 characters long.'
  activityId : String(255);
  @description : 'The name of the model element where the error occurred. The name is at most 255 characters long.'
  activityName : String(255);
  @description : 'The error category.'
  errorCode : String;
  @description : 'The log ID referring to the error.'
  logId : String;
  @description : 'The error message.'
  message : String;
  @description : 'The time when the error occurred.'
  timestamp : Timestamp;
};

type Processes._.Workflows_types.WorkflowInstanceRoles {
  @description : 'The users that are assigned to the viewer role on this workflow instance.'
  viewerUsers : many Processes._.Workflows.anonymous.type9;
  @description : 'The groups that are assigned to the viewer role on this workflow instance.'
  viewerGroups : many Processes._.Workflows.anonymous.type10;
  @description : 'The users that are assigned to the admin role on this workflow instance.'
  adminUsers : many Processes._.Workflows.anonymous.type11;
  @description : 'The groups that are assigned to the admin role on this workflow instance.'
  adminGroups : many Processes._.Workflows.anonymous.type12;
  @description : 'The users that are assigned to the context viewer role on this workflow instance.'
  contextViewerUsers : many Processes._.Workflows.anonymous.type13;
  @description : 'The groups that are assigned to the context viewer role on this workflow instance.'
  contextViewerGroups : many Processes._.Workflows.anonymous.type14;
  @description : 'The users that are assigned to the context admin role on this workflow instance.'
  contextAdminUsers : many Processes._.Workflows.anonymous.type15;
  @description : 'The groups that are assigned to the context admin role on this workflow instance.'
  contextAdminGroups : many Processes._.Workflows.anonymous.type16;
};

type Processes._.Workflows_types.WorkflowInstanceRolesUpdatePayload {
  @description : `The users that should be assigned to the viewer role, as a comma-separated list.
Specify at most 100 user IDs.
The ID of a user can be at most 255 characters long.`
  viewerUsers : String;
  @description : `The groups that should be assigned to the viewer role, as a comma-separated list.
Specify at most 100 group IDs.
The ID of a group can be at most 255 characters long.`
  viewerGroups : String;
  @description : `The users that should be assigned to the admin role, as a comma-separated list.
Specify at most 100 user IDs.
The ID of a user can be at most 255 characters long.`
  adminUsers : String;
  @description : `The groups that should be assigned to the admin role, as a comma-separated list.
Specify at most 100 group IDs.
The ID of a group can be at most 255 characters long.`
  adminGroups : String;
  @description : `The users that should be assigned to the context viewer role, as a comma-separated list.
Specify at most 100 user IDs.
The ID of a user can be at most 255 characters long.`
  contextViewerUsers : String;
  @description : `The groups that should be assigned to the context viewer role, as a comma-separated list.
Specify at most 100 group IDs.
The ID of a group can be at most 255 characters long.`
  contextViewerGroups : String;
  @description : `The users that should be assigned to the context admin role, as a comma-separated list.
Specify at most 100 user IDs.
The ID of a user can be at most 255 characters long.`
  contextAdminUsers : String;
  @description : `The groups that should be assigned to the context admin role, as a comma-separated list.
Specify at most 100 group IDs.
The ID of a group can be at most 255 characters long.`
  contextAdminGroups : String;
};

type Processes._.Workflows_types.TechnicalError {
  error : {
    @description : 'The error category.'
    code : String;
    @description : 'The error message.'
    message : String;
    @description : 'The log ID referring to the error.'
    logId : String;
    details : many {
      @description : 'The severity of the error.'
      severity : String;
      @description : 'The detailed error message.'
      message : String;
    };
  };
};

type Processes._.Workflows_types.ConflictError {
  error : {
    @description : 'The error message.'
    message : String;
    @description : 'The log ID referring to the error.'
    logId : String;
  };
};

type Processes._.Workflows_types.Job {
  @description : 'The status of the job.'
  @assert.range : true
  status : String enum {
    RUNNING;
    ERRONEOUS;
  };
  @description : 'The details of the job.'
  details : { };
  error : {
    @description : 'The error category.'
    code : String;
    @description : 'The error message.'
    message : String;
    @description : 'The log ID referring to the error.'
    logId : String;
  };
};

type Processes._.Workflows_types.UnauthorizedError {
  @description : 'The error name.'
  error : String;
  @description : 'The error description.'
  error_description : String;
};

type Processes._.Workflows_types.CustomAttribute {
  @description : 'The ID of the attribute.'
  id : String(255);
  @description : 'The label which represents how the attribute should be presented to end users.'
  label : String(255);
  @description : 'The value of the attribute.'
  value : String(4000);
  @description : 'The type of the attribute.'
  @assert.range : true
  type : String enum {
    string;
  };
};

type Processes._.Workflows_types.CustomAttributeList : many {
  @description : 'The ID of the attribute.'
  id : String(255);
  @description : 'The label which represents how the attribute should be presented to end users.'
  label : String(255);
  @description : 'The value of the attribute.'
  value : String(4000);
  @description : 'The type of the attribute.'
  @assert.range : true
  type : String enum {
    string;
  };
};

type Processes._.Workflows_types.TaskDefinitionAttribute {
  @description : 'The ID of the attribute.'
  id : String(255);
  @description : 'The label, which represents how the attribute is presented to end users.'
  label : String(255);
  @description : 'The type of the attribute.'
  @assert.range : true
  type : String enum {
    string;
  };
};

type Processes._.Workflows_types.TaskDefinitionAttributeList : many {
  @description : 'The ID of the attribute.'
  id : String(255);
  @description : 'The label, which represents how the attribute is presented to end users.'
  label : String(255);
  @description : 'The type of the attribute.'
  @assert.range : true
  type : String enum {
    string;
  };
};

@description : 'The ID of the user. The user ID is at most 255 characters long.'
type Processes._.Workflows.anonymous.type0 : String(255);

@description : 'The ID of the group. The group ID is at most 255 characters long.'
type Processes._.Workflows.anonymous.type1 : String(255);

@description : 'The ID of the user. The user ID is at most 255 characters long.'
type Processes._.Workflows.anonymous.type2 : String(255);

@description : 'The ID of the group. The group ID is at most 255 characters long.'
type Processes._.Workflows.anonymous.type3 : String(255);

@description : 'A workflow definition'
type Processes._.Workflows.anonymous.type4 {
  @description : 'ID of the workflow definition'
  Id : String;
};

@description : 'The ID of the user. The user ID is at most 255 characters long.'
type Processes._.Workflows.anonymous.type5 : String(255);

@description : 'The ID of the group. The group ID is at most 255 characters long.'
type Processes._.Workflows.anonymous.type6 : String(255);

@description : 'The ID of the user. The user ID is at most 255 characters long.'
type Processes._.Workflows.anonymous.type7 : String(255);

@description : 'The ID of the group. The group ID is at most 255 characters long.'
type Processes._.Workflows.anonymous.type8 : String(255);

@description : 'The ID of the user. The user ID is at most 255 characters long.'
type Processes._.Workflows.anonymous.type9 : String(255);

@description : 'The ID of the group. The group ID is at most 255 characters long.'
type Processes._.Workflows.anonymous.type10 : String(255);

@description : 'The ID of the user. The user ID is at most 255 characters long.'
type Processes._.Workflows.anonymous.type11 : String(255);

@description : 'The ID of the group. The group ID is at most 255 characters long.'
type Processes._.Workflows.anonymous.type12 : String(255);

@description : 'The ID of the user. The user ID is at most 255 characters long.'
type Processes._.Workflows.anonymous.type13 : String(255);

@description : 'The ID of the group. The group ID is at most 255 characters long.'
type Processes._.Workflows.anonymous.type14 : String(255);

@description : 'The ID of the user. The user ID is at most 255 characters long.'
type Processes._.Workflows.anonymous.type15 : String(255);

@description : 'The ID of the group. The group ID is at most 255 characters long.'
type Processes._.Workflows.anonymous.type16 : String(255);

