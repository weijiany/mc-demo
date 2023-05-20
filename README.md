# MC-Demo

A very easy demo for [MetaController](https://metacontroller.github.io/). It will create a nginx pod when we create a 
Custom Resource in K8S cluster.

## Precondition

Node environment in locally. The server is run on **v18.3.0**

## How to run it in locally?

1. Start K8S cluster.
2. Apply the MetaController resources. `kubectl apply -k https://github.com/metacontroller/metacontroller/manifests/production`
3. Apply manifests. `kubectl apply -f manifests`
4. Install the dependencies. `yarn`
5. Start the web server. `yarn start`
6. Apply the custom resource. `kubectl apply -f cr.yaml`
7. Watching the default namespace status. `watch kubectl get pods`

## Note:

Please change the hook address in [composite-controller.yaml.](manifests%2Fcomposite-controller.yaml) and make sure the 
MetaController can access the web server. You could do nothing if you use [colima](https://github.com/abiosoft/colima)
start the kubernetes cluster as well.
