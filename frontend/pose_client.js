const grpc = require('grpc');
const messages = require('./pose_pb');
const services = require('./pose_grpc_pb');

async function main() {
    const client = new services.PoseClient(
        'localhost:50051', grpc.credentials.createInsecure()
    );
    const poseRequest = new messages.keyframeRequest();
    let i = 1
    
    while (i < 10) {
        poseRequest.setId(i);

        client.takePose(poseRequest, function (err, response) {
            if (err) {
                console.log('Broken..: ', err);
            } else {
                console.log('Backend response: ', response.getMessage());
            }
        });
        i++;
        await new Promise(r => setTimeout(r, 2000));
    }
}


main();