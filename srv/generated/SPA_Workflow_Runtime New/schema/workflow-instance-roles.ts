/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'WorkflowInstanceRoles' schema.
 */
export type WorkflowInstanceRoles =
  | {
      /**
       * The users that are assigned to the viewer role on this workflow instance.
       * Max Items: 100.
       */
      viewerUsers: Set<string>;
      /**
       * The groups that are assigned to the viewer role on this workflow instance.
       * Max Items: 100.
       */
      viewerGroups: Set<string>;
      /**
       * The users that are assigned to the admin role on this workflow instance.
       * Max Items: 100.
       */
      adminUsers: Set<string>;
      /**
       * The groups that are assigned to the admin role on this workflow instance.
       * Max Items: 100.
       */
      adminGroups: Set<string>;
      /**
       * The users that are assigned to the context viewer role on this workflow instance.
       * Max Items: 100.
       */
      contextViewerUsers: Set<string>;
      /**
       * The groups that are assigned to the context viewer role on this workflow instance.
       * Max Items: 100.
       */
      contextViewerGroups: Set<string>;
      /**
       * The users that are assigned to the context admin role on this workflow instance.
       * Max Items: 100.
       */
      contextAdminUsers: Set<string>;
      /**
       * The groups that are assigned to the context admin role on this workflow instance.
       * Max Items: 100.
       */
      contextAdminGroups: Set<string>;
    }
  | Record<string, any>;
