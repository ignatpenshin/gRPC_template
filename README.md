1. JS prepare packages(via WSL):
```sh
$ sudo npm install grpc google-protobuf @grpc/proto-loader
$ sudo npm install -g protoc-gen-grpc
$ sudo npm install -g request
```

2. Python prepare packages (via venv)
```sh
$ python -m venv venv 
$ pip install -r requirements.txt
 (Important: google-pasta, grpcio, grpcio-tools)
```

--- After .proto file created ---

3. Python -> proto
```sh
$ cd proto/
$ python -m grpc_tools.protoc -I. --python_out=. --grpc_python_out=. pose.proto
$ mv *.py ../backend/*.py
--- Create server like /backend/server.py ---
```

4. JS -> proto
```sh
$ cd PROJECT_ROOT_DIR/
$ sudo protoc-gen-grpc --js_out=import_style=commonjs,binary:./frontend/ --grpc_out=./frontend --proto_path ./proto/ ./proto/pose.proto
--- Create client like /frontend/client.js ---
```

5. Run frontend && backend 
```sh
$ python backend/pose_server.py
$ node frontend/pose_client.js
```