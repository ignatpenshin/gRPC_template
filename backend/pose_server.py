import concurrent
from concurrent import futures

import grpc

import pose_pb2
import pose_pb2_grpc


class PoseServicer(pose_pb2_grpc.PoseServicer):
    def TakePose(self, request, context):
        print("request: ", request)
        response = pose_pb2.keyframeResponse()
        response.message = f"server_response message! {request}"
        return response


def main():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    pose_pb2_grpc.add_PoseServicer_to_server(PoseServicer(), server)
    print("Server started. Listening on port 50051")
    server.add_insecure_port('[::]:50051')
    server.start()
    server.wait_for_termination()


main()
