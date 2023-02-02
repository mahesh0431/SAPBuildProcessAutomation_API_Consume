/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'AttachmentsContext' schema.
 */
export type AttachmentsContext =
  | {
      /**
       * A folder that shall be used for uploading files at the remote repository.
       */
      rootFolder?: string;
      /**
       * A map of groups allowing to semantically separate attachments. The key is the group name.
       */
      groups?: Record<
        string,
        | {
            /**
             * A folder that shall be used for uploading files at the remote repository for this group (i.e. relative to the root folder)
             */
            folder?: string;
            /**
             * A list of references to files in the remote repository
             */
            refs?:
              | {
                  /**
                   * ID of the file in the remote repository
                   */
                  objectId?: string;
                }
              | Record<string, any>[];
          }
        | Record<string, any>
      >;
    }
  | Record<string, any>;
