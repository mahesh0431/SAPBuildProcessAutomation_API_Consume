service sapCloudSDKBuildTS @(requires: 'authenticated-user') {
    // define type TC {};
    type TaskCollection {
        instanceId: String;
        status:String;
    }
    function getTaskInstances() returns array of TaskCollection;
}