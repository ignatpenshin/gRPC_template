const grpc = require('grpc');
const messages = require('./pose_pb');
const services = require('./pose_grpc_pb');

function main() {
    const client = new services.PoseClient(
        'localhost:50051', grpc.credentials.createInsecure()
    );
    const poseRequest = new messages.keyframeRequest();
    poseRequest.setId(1);

    client.takePose(poseRequest, function (err, response) {
        if (err) {
            console.log('Broken..: ', err);
        } else {
            console.log('Backend response: ', response.getMessage());
        }
    });
}


main();