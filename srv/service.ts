import cds from "@sap/cds";
import { Request } from "@sap/cds/apis/services";

import { comSapBpmWfsTcmMetadataService as wfApi } from "./generated/com-sap-bpm-wfs-tcm-metadata-service";
import {
  retrieveJwt,
} from "@sap-cloud-sdk/connectivity";

module.exports = class sapCloudSDKBuildTS extends cds.ApplicationService {
  async init() {
    const getTaskInstances = async function (Request: Request) {
      const { taskApi } = wfApi();
      const jwt = retrieveJwt((Request as any).req);
      const resultPromise = await taskApi
        .requestBuilder()
        .getAll()
        .setCustomServicePath("/public/workflow/odata/v1/tcm")
        .top(5)
        .execute({ destinationName: "sap_process_automation_service_user_token", jwt:jwt });
      return resultPromise;
    };
    this.on("getTaskInstances", async function (req) {
      return await getTaskInstances(req);
    });
    await super.init();
  }
};
