using { Processes._.Workflows_types.TaskInstance as TaskInsance } from './external/SPA_Workflow_Runtime New.cds';

service sapCloudSDKBuildTS {
    function getTaskInstances() returns array of TaskInsance;
}