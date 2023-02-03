/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import type { TaskDefinitionAttributeList } from './task-definition-attribute-list';
/**
 * Representation of the 'TaskDefinition' schema.
 */
export type TaskDefinition =
  | {
      /**
       * The definition ID of the task definition. The ID is at most 511 characters long.
       * It consists of the ID of the task defined in the workflow definition (task definition ID) as well as the workflow definition ID delimited by an '@' sign.
       *
       * Max Length: 511.
       */
      id: string;
      /**
       * The name of the corresponding task in the workflow definition, in the original language. The value is taken from the latest workflow definition where the task definition exists.
       */
      name: string;
      /**
       * The time when the task definition was created.
       * Format: "date-time".
       */
      createdAt: string;
      attributeDefinitions?: TaskDefinitionAttributeList;
    }
  | Record<string, any>;
