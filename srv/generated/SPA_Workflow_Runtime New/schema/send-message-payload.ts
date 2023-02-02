/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'SendMessagePayload' schema.
 */
export type SendMessagePayload =
  | {
      /**
       * Specify the data to be written into the response variable defined on the intermediate message event.
       */
      context?: Record<string, any>;
      /**
       * Specify the definition ID of the message. This corresponds to the "Message Name" field on the intermediate message event. The definition ID is at most 128 characters long.
       * Max Length: 128.
       * Min Length: 1.
       */
      definitionId: string;
      /**
       * Specify the workflow instance ID of the workflow instance that should receive the message.
       * The workflow instance ID is 36 characters long.
       * You must specify either workflowInstanceId or the pair of workflowDefinitionId and businessKey.
       * Max Length: 36.
       * Min Length: 36.
       */
      workflowInstanceId?: string;
      /**
       * Specify the definition ID of the workflow the message belongs to.
       * The definition ID is at most 64 characters long.
       * You must specify either workflowInstanceId or the pair of workflowDefinitionId and businessKey.
       * Max Length: 64.
       * Min Length: 1.
       */
      workflowDefinitionId?: string;
      /**
       * Specify the business key of the workflow instance, that should receive the message.
       * The business key of a workflow instance is limited to 255 characters.
       * You must specify either workflowInstanceId or the pair of workflowDefinitionId and businessKey.
       * Max Length: 255.
       */
      businessKey?: string;
    }
  | Record<string, any>;
