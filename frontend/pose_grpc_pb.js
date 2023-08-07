// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var pose_pb = require('./pose_pb.js');

function serialize_keyframeRequest(arg) {
  if (!(arg instanceof pose_pb.keyframeRequest)) {
    throw new Error('Expected argument of type keyframeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_keyframeRequest(buffer_arg) {
  return pose_pb.keyframeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_keyframeResponse(arg) {
  if (!(arg instanceof pose_pb.keyframeResponse)) {
    throw new Error('Expected argument of type keyframeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_keyframeResponse(buffer_arg) {
  return pose_pb.keyframeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PoseService = exports.PoseService = {
  takePose: {
    path: '/Pose/TakePose',
    requestStream: false,
    responseStream: false,
    requestType: pose_pb.keyframeRequest,
    responseType: pose_pb.keyframeResponse,
    requestSerialize: serialize_keyframeRequest,
    requestDeserialize: deserialize_keyframeRequest,
    responseSerialize: serialize_keyframeResponse,
    responseDeserialize: deserialize_keyframeResponse,
  },
};

exports.PoseClient = grpc.makeGenericClientConstructor(PoseService);
