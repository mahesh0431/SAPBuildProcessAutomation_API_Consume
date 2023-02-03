/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'WorkflowInstanceExecutionLog' schema.
 */
export type WorkflowInstanceExecutionLog =
  | {
      /**
       * The ID of the execution log entry.
       */
      id: string;
      /**
       * The execution log entry type.
       */
      type:
        | 'WORKFLOW_STARTED'
        | 'WORKFLOW_COMPLETED'
        | 'WORKFLOW_CANCELED'
        | 'WORKFLOW_CONTINUED'
        | 'WORKFLOW_SUSPENDED'
        | 'WORKFLOW_CONTEXT_OVERWRITTEN_BY_ADMIN'
        | 'WORKFLOW_CONTEXT_PATCHED_BY_ADMIN'
        | 'WORKFLOW_ROLES_PATCHED_BY_ADMIN'
        | 'WORKFLOW_RESUMED'
        | 'USERTASK_CREATED'
        | 'USERTASK_CLAIMED'
        | 'USERTASK_RELEASED'
        | 'USERTASK_COMPLETED'
        | 'USERTASK_FAILED'
        | 'USERTASK_PATCHED_BY_ADMIN'
        | 'USERTASK_CANCELED_BY_BOUNDARY_EVENT'
        | 'SERVICETASK_CREATED'
        | 'SERVICETASK_COMPLETED'
        | 'SERVICETASK_FAILED'
        | 'SCRIPTTASK_CREATED'
        | 'SCRIPTTASK_COMPLETED'
        | 'SCRIPTTASK_FAILED'
        | 'INTERMEDIATE_TIMER_EVENT_REACHED'
        | 'INTERMEDIATE_TIMER_EVENT_TRIGGERED'
        | 'INTERMEDIATE_TIMER_EVENT_FAILED'
        | 'INTERMEDIATE_MESSAGE_EVENT_REACHED'
        | 'INTERMEDIATE_MESSAGE_EVENT_TRIGGERED'
        | 'NONCANCELING_BOUNDARY_TIMER_EVENT_TRIGGERED'
        | 'CANCELING_BOUNDARY_TIMER_EVENT_TRIGGERED'
        | 'MAILTASK_CREATED'
        | 'MAILTASK_COMPLETED'
        | 'MAILTASK_FAILED'
        | 'EXCLUSIVE_GATEWAY_REACHED'
        | 'EXCLUSIVE_GATEWAY_FAILED'
        | 'PARALLEL_GATEWAY_REACHED'
        | 'PARALLEL_GATEWAY_FAILED'
        | 'AUTOMATIONTASK_CREATED'
        | 'AUTOMATIONTASK_COMPLETED'
        | 'AUTOMATIONTASK_FAILED'
        | 'RULETASK_CREATED'
        | 'RULETASK_COMPLETED'
        | 'RULETASK_FAILED'
        | 'INTERMEDIATE_ESCALATION_EVENT_EMITTED'
        | 'CANCELING_BOUNDARY_ESCALATION_EVENT_TRIGGERED'
        | 'NONCANCELING_BOUNDARY_ESCALATION_EVENT_TRIGGERED';
      /**
       * The time the execution log entry was created.
       * Format: "date-time".
       */
      timestamp: string;
      /**
       * An ID that groups events together by their activity and their token of execution in the workflow.
       * For example, all events relating to the same script task (started, failed, completed) would have the same referenceInstanceId.
       *
       */
      referenceInstanceId: string;
      /**
       * The ID of the model element. The ID is at most 255 characters long.
       * Max Length: 255.
       */
      activityId?: string;
      /**
       * The ID of the parent workflow instance. The ID is at most 64 characters long.
       * Max Length: 64.
       */
      parentInstanceId?: string;
      /**
       * The ID of the root workflow instance. The ID is at most 64 characters long.
       * Max Length: 64.
       */
      rootInstanceId?: string;
      /**
       * The name of the model element or the subject of the user task. The name/subject is at most 255 characters long.
       * Max Length: 255.
       */
      subject?: string;
      /**
       * The user who executed the action. The user ID is at most 255 characters long.
       * Max Length: 255.
       */
      userId?: string;
      /**
       * The code of the escalation emitted.
       */
      escalationCode?: string;
      ruleService?:
        | {
            /**
             * ID of the Rule Service.
             */
            id?: string;
            /**
             * Version of the Rule Service.
             */
            version?: string;
            /**
             * Revision of the Rule Service.
             */
            revision?: string;
          }
        | Record<string, any>;
      error?:
        | {
            /**
             * The error message.
             */
            message?: string;
            /**
             * The error category.
             */
            errorCode?: string;
            /**
             * The log ID referring to the error.
             */
            logId?: string;
          }
        | Record<string, any>;
      /**
       * The recipient users of a user task.
       * Max Items: 100.
       */
      recipientUsers?: Set<string>;
      /**
       * The recipient groups of a user task.
       * Max Items: 100.
       */
      recipientGroups?: Set<string>;
      /**
       * The user who started the user task. The user ID is at most 255 characters long.
       * Max Length: 255.
       */
      initiatorId?: string;
      /**
       * Information about the service task.
       */
      restEndpoint?:
        | {
            /**
             * The HTTP method.
             */
            httpMethod?: string;
            /**
             * The name of the destination.
             */
            destinationName: string;
            /**
             * The subdomain of the account in which the destination was looked up.
             */
            destinationSubdomain?: string;
            /**
             * The URL configured in the destination.
             */
            destinationUrl?: string;
            /**
             * The relative URL configured in the service task.
             */
            relativePath?: string;
          }
        | Record<string, any>;
      /**
       * The remaining number of retries. If no retries are left the workflow instance is ERRONEOUS.
       */
      retriesRemaining?: number;
      /**
       * The ID of the user task. The ID is at least 36 characters long.
       * Max Length: 255.
       * Min Length: 36.
       */
      taskId?: string;
      /**
       * The changes made to the context or user task.
       */
      changes?:
        | {
            /**
             * The variables, which were created in the context.
             */
            create?: Set<string>;
            /**
             * The variables, which were updated in the context or the user task attributes, which were updated.
             */
            update?: Set<string>;
            /**
             * The variables, which were deleted from the context.
             */
            delete?: Set<string>;
          }
        | Record<string, any>;
      /**
       * The recipients of a mail task.
       */
      recipients?:
        | {
            /**
             * The 'to' recipients.
             */
            to?: string[];
            /**
             * The 'cc' recipients.
             */
            cc?: string[];
            /**
             * The 'bcc' recipients.
             */
            bcc?: string[];
            /**
             * The ignored recipients from "to", "cc" and "bcc" fields if they exist.
             * Default: [].
             */
            ignored?: string[];
          }
        | Record<string, any>;
      /**
       * Indicates whether the sending of emails is disabled.
       */
      sendDisabled?: boolean;
      /**
       * The name of the principal on whose behalf the service task has been executed.
       */
      propagatedPrincipal?: string;
      /**
       * The name of the affected model element. The activity name is at most 255 characters long.
       * Max Length: 255.
       */
      activityName?: string;
      /**
       * The activityId of the boundary timer event causing the cancellation of the user task. It is at most 255 characters long.
       * Max Length: 255.
       */
      cause?: string;
      /**
       * The name of the boundary timer event. The name is at most 64 characters long.
       * Max Length: 64.
       */
      boundaryEventName?: string;
      /**
       * The subdomain of the account in which the destination was looked up.
       */
      destinationSubdomain?: string;
    }
  | Record<string, any>;
