/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'WorkflowInstanceRolesUpdatePayload' schema.
 */
export type WorkflowInstanceRolesUpdatePayload =
  | {
      /**
       * The users that should be assigned to the viewer role, as a comma-separated list.
       * Specify at most 100 user IDs.
       * The ID of a user can be at most 255 characters long.
       * Pattern: "^(.{0,255},){0,99}.{0,255}$".
       */
      viewerUsers?: string;
      /**
       * The groups that should be assigned to the viewer role, as a comma-separated list.
       * Specify at most 100 group IDs.
       * The ID of a group can be at most 255 characters long.
       * Pattern: "^(.{0,255},){0,99}.{0,255}$".
       */
      viewerGroups?: string;
      /**
       * The users that should be assigned to the admin role, as a comma-separated list.
       * Specify at most 100 user IDs.
       * The ID of a user can be at most 255 characters long.
       * Pattern: "^(.{0,255},){0,99}.{0,255}$".
       */
      adminUsers?: string;
      /**
       * The groups that should be assigned to the admin role, as a comma-separated list.
       * Specify at most 100 group IDs.
       * The ID of a group can be at most 255 characters long.
       * Pattern: "^(.{0,255},){0,99}.{0,255}$".
       */
      adminGroups?: string;
      /**
       * The users that should be assigned to the context viewer role, as a comma-separated list.
       * Specify at most 100 user IDs.
       * The ID of a user can be at most 255 characters long.
       * Pattern: "^(.{0,255},){0,99}.{0,255}$".
       */
      contextViewerUsers?: string;
      /**
       * The groups that should be assigned to the context viewer role, as a comma-separated list.
       * Specify at most 100 group IDs.
       * The ID of a group can be at most 255 characters long.
       * Pattern: "^(.{0,255},){0,99}.{0,255}$".
       */
      contextViewerGroups?: string;
      /**
       * The users that should be assigned to the context admin role, as a comma-separated list.
       * Specify at most 100 user IDs.
       * The ID of a user can be at most 255 characters long.
       * Pattern: "^(.{0,255},){0,99}.{0,255}$".
       */
      contextAdminUsers?: string;
      /**
       * The groups that should be assigned to the context admin role, as a comma-separated list.
       * Specify at most 100 group IDs.
       * The ID of a group can be at most 255 characters long.
       * Pattern: "^(.{0,255},){0,99}.{0,255}$".
       */
      contextAdminGroups?: string;
    }
  | Record<string, any>;
