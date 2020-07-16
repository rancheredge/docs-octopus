(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{161:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var a=t(2),c=t(9),o=(t(0),t(186)),r={id:"quick-start",title:"\u5feb\u901f\u5165\u95e8\u6307\u5357"},i={id:"cn/quick-start",title:"\u5feb\u901f\u5165\u95e8\u6307\u5357",description:"## \u524d\u7f6e\u6761\u4ef6",source:"@site/docs/cn/quick-start.md",permalink:"/docs-octopus/docs/cn/quick-start",editUrl:"https://github.com/cnrancher/docs-octopus/tree/master/docs/cn/quick-start.md",sidebar:"cn-docs",previous:{title:"\u5173\u4e8e Octopus",permalink:"/docs-octopus/docs/cn/about"},next:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/docs-octopus/docs/cn/install"}},s=[{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",children:[]},{value:"\u4f7f\u7528\u6b65\u9aa4",id:"\u4f7f\u7528\u6b65\u9aa4",children:[{value:"1. \u4f7f\u7528k3d\u642d\u5efak3s\u96c6\u7fa4(\u53ef\u9009)",id:"1-\u4f7f\u7528k3d\u642d\u5efak3s\u96c6\u7fa4\u53ef\u9009",children:[]},{value:"2. \u90e8\u7f72 Octopus",id:"2-\u90e8\u7f72-octopus",children:[]},{value:"3. \u90e8\u7f72\u8bbe\u5907\u6a21\u578b\u548c\u8bbe\u5907\u63a7\u5236\u5668",id:"3-\u90e8\u7f72\u8bbe\u5907\u6a21\u578b\u548c\u8bbe\u5907\u63a7\u5236\u5668",children:[]},{value:"4. \u521b\u5efa DeviceLink",id:"4-\u521b\u5efa-devicelink",children:[]},{value:"5. \u7ba1\u7406\u8bbe\u5907",id:"5-\u7ba1\u7406\u8bbe\u5907",children:[]}]}],p={rightToc:s};function l(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),Object(o.b)("p",null,"\u5df2\u6709k3s\u96c6\u7fa4\u6216Kubernetes\u96c6\u7fa4\u3002"),Object(o.b)("h2",{id:"\u4f7f\u7528\u6b65\u9aa4"},"\u4f7f\u7528\u6b65\u9aa4"),Object(o.b)("p",null,"\u5728\u672c\u6f14\u7ec3\u4e2d\uff0c\u6211\u4eec\u5c06\u90e8\u7f72Octopus\u5e76\u901a\u8fc7\u5176\u7ba1\u7406",Object(o.b)("inlineCode",{parentName:"p"},"\u4e00\u7c7b\u865a\u62df\u8bbe\u5907"),"\u5e76\u6267\u884c\u4ee5\u4e0b\u4efb\u52a1\uff1a"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#1-%E4%BD%BF%E7%94%A8k3d%E6%90%AD%E5%BB%BAk3s%E9%9B%86%E7%BE%A4%E5%8F%AF%E9%80%89"}),"\u4f7f\u7528k3d\u642d\u5efak3s\u96c6\u7fa4")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#2-%E9%83%A8%E7%BD%B2-octopus"}),"\u90e8\u7f72 Octopus")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#3-%E9%83%A8%E7%BD%B2%E8%AE%BE%E5%A4%87%E6%A8%A1%E5%9E%8B%E5%92%8C%E8%AE%BE%E5%A4%87%E6%8E%A7%E5%88%B6%E5%99%A8"}),"\u90e8\u7f72\u8bbe\u5907\u6a21\u578b\u548c\u8bbe\u5907\u63a7\u5236\u5668")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#4-%E5%88%9B%E5%BB%BA-devicelink"}),"\u521b\u5efa DeviceLink")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#5-%E7%AE%A1%E7%90%86%E8%AE%BE%E5%A4%87"}),"\u7ba1\u7406\u8bbe\u5907"))),Object(o.b)("h3",{id:"1-\u4f7f\u7528k3d\u642d\u5efak3s\u96c6\u7fa4\u53ef\u9009"},"1. \u4f7f\u7528k3d\u642d\u5efak3s\u96c6\u7fa4(\u53ef\u9009)"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/rancher/k3d"}),"k3d"),"\u662f\u5feb\u901f\u642d\u5efa\u5bb9\u5668\u5316k3s\u96c6\u7fa4\u7684\u5de5\u5177\u3002 \u60a8\u53ef\u4ee5\u4f7f\u7528Docker\u5728\u5355\u53f0\u8ba1\u7b97\u673a\u4e0a\u542f\u52a8\u591a\u8282\u70b9k3s\u96c6\u7fa4\u3002\u5982\u679c\u60a8\u5df2\u6709k3\u96c6\u7fa4\u6216Kubernetes\u96c6\u7fa4\uff0c\u8bf7\u8df3\u8fc7\u6b64\u6b65\u9aa4\u3002"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u8fd0\u884c\u4ee5\u4e0b\u6307\u4ee4\uff0c\u542f\u52a8\u5177\u67093\u4e2aworker\u8282\u70b9\u7684\u672c\u5730k3s\u96c6\u7fa4\u3002"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"curl -fL https://octopus-assets.oss-cn-beijing.aliyuncs.com/k3d/cluster-k3s-spinup.sh | bash -\n")),Object(o.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u8bf4\u660e")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u5982\u679c\u5b89\u88c5\u6210\u529f\uff0c\u5219\u5e94\u8be5\u770b\u5230\u4ee5\u4e0b\u65e5\u5fd7\uff0c\u8bf7\u4f7f\u7528",Object(o.b)("inlineCode",{parentName:"p"},"CTRL+C"),"\u952e\u4ee5\u505c\u6b62\u672c\u5730\u96c6\u7fa4\u3002"))),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-logs"}),"[INFO] [0604 17:09:41] creating edge cluster with v1.17.2\nINFO[0000] Created cluster network with ID d5fcd8f2a5951d9ef4dba873f57dd7984f25cf81ab51776c8bac88c559c2d363\nINFO[0000] Created docker volume  k3d-edge-images\nINFO[0000] Creating cluster [edge]\nINFO[0000] Creating server using docker.io/rancher/k3s:v1.17.2-k3s1...\nINFO[0008] SUCCESS: created cluster [edge]\nINFO[0008] You can now use the cluster with:\n\nexport KUBECONFIG=\"$(k3d get-kubeconfig --name='edge')\"\nkubectl cluster-info\n[WARN] [0604 17:09:50] default kubeconfig has been backup in /Users/guangbochen/.kube/rancher-k3s.yaml_k3d_bak\n[INFO] [0604 17:09:50] edge cluster's kubeconfig wrote in /Users/guangbochen/.kube/rancher-k3s.yaml now\n[INFO] [0604 17:09:50] waiting node edge-control-plane for ready\nINFO[0000] Adding 1 agent-nodes to k3d cluster edge...\nINFO[0000] Created agent-node with ID 3197e431b1a060fbb591b4c315c4949f1b472213312ff8e04c898e3353e05bdc\n[INFO] [0604 17:10:01] waiting node edge-worker for ready\nINFO[0000] Adding 1 agent-nodes to k3d cluster edge...\nINFO[0000] Created agent-node with ID d9bb3e589e745797f3b189962d14de77cfc6afe86d1b6af93a43d808a9c72b5c\n[INFO] [0604 17:10:13] waiting node edge-worker1 for ready\nINFO[0000] Adding 1 agent-nodes to k3d cluster edge...\nINFO[0000] Created agent-node with ID bc69aa9867aa2081df0cf425661ae002142bd667d3d618bc5a5b34bc092d7562\n[INFO] [0604 17:10:25] waiting node edge-worker2 for ready\n[WARN] [0604 17:10:37] please input CTRL+C to stop the local cluster\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u6253\u5f00\u4e00\u4e2a\u65b0\u7ec8\u7aef\uff0c\u5e76\u914d\u7f6e",Object(o.b)("inlineCode",{parentName:"p"},"KUBECONFIG"),"\u4ee5\u8bbf\u95ee\u672c\u5730k3s\u96c6\u7fa4\u3002"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"export KUBECONFIG=~/.kube/rancher-k3s.yaml\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"\u8fd0\u884c",Object(o.b)("inlineCode",{parentName:"p"},"kubectl get node"),"\u547d\u4ee4\uff0c \u68c0\u67e5\u672c\u5730k3s\u96c6\u7fa4\u7684\u8282\u70b9\u662f\u5426\u6b63\u5e38\u3002"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"kubectl get node\nNAME                 STATUS   ROLES    AGE     VERSION\nedge-control-plane   Ready    master   3m46s   v1.17.2+k3s1\nedge-worker2         Ready    <none>   3m8s    v1.17.2+k3s1\nedge-worker          Ready    <none>   3m33s   v1.17.2+k3s1\nedge-worker1         Ready    <none>   3m21s   v1.17.2+k3s1\n")))),Object(o.b)("h3",{id:"2-\u90e8\u7f72-octopus"},"2. \u90e8\u7f72 Octopus"),Object(o.b)("p",null,"\u6709",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./install"}),"\u4e24\u79cd\u90e8\u7f72Octopus\u7684\u65b9\u6cd5"),"\uff0c\u4e3a\u65b9\u4fbf\u8d77\u89c1\uff0c\u6211\u4eec\u5c06\u901a\u8fc7\u4e00\u4efd ",Object(o.b)("inlineCode",{parentName:"p"},"all-in-one"),"\u7684YAML\u6587\u4ef6\u6765\u90e8\u7f72\u3002 \u5b89\u88c5\u7a0b\u5e8fYAML\u6587\u4ef6\u4f4d\u4e8eGithub\u4e0a\u7684",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/cnrancher/octopus/tree/master/deploy/e2e"}),Object(o.b)("inlineCode",{parentName:"a"},"deploy/e2e")),"\u76ee\u5f55\u4e0b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"kubectl apply -f https://raw.githubusercontent.com/cnrancher/octopus/master/deploy/e2e/all_in_one.yaml\n")),Object(o.b)("p",null,"\u9884\u671f\u7ed3\u679c\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-log"}),"namespace/octopus-system created\ncustomresourcedefinition.apiextensions.k8s.io/devicelinks.edge.cattle.io created\nrole.rbac.authorization.k8s.io/octopus-leader-election-role created\nclusterrole.rbac.authorization.k8s.io/octopus-manager-role created\nrolebinding.rbac.authorization.k8s.io/octopus-leader-election-rolebinding created\nclusterrolebinding.rbac.authorization.k8s.io/octopus-manager-rolebinding created\nservice/octopus-brain created\nservice/octopus-limb created\ndeployment.apps/octopus-brain created\ndaemonset.apps/octopus-limb created\n")),Object(o.b)("p",null,"\u5b89\u88c5\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u9a8c\u8bc1Octopus\u7684\u72b6\u6001\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"kubectl get all -n octopus-system\nNAME                                 READY   STATUS    RESTARTS   AGE\npod/octopus-limb-w8vcf               1/1     Running   0          14s\npod/octopus-limb-862kh               1/1     Running   0          14s\npod/octopus-limb-797d8               1/1     Running   0          14s\npod/octopus-limb-8w462               1/1     Running   0          14s\npod/octopus-brain-65fdb4ff99-zvw62   1/1     Running   0          14s\n\nNAME                    TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE\nservice/octopus-brain   ClusterIP   10.43.92.81    <none>        8080/TCP   14s\nservice/octopus-limb    ClusterIP   10.43.143.49   <none>        8080/TCP   14s\n\nNAME                          DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE\ndaemonset.apps/octopus-limb   4         4         4       4            4           <none>          14s\n\nNAME                            READY   UP-TO-DATE   AVAILABLE   AGE\ndeployment.apps/octopus-brain   1/1     1            1           14s\n\nNAME                                       DESIRED   CURRENT   READY   AGE\nreplicaset.apps/octopus-brain-65fdb4ff99   1         1         1       14s\n\n")),Object(o.b)("h3",{id:"3-\u90e8\u7f72\u8bbe\u5907\u6a21\u578b\u548c\u8bbe\u5907\u63a7\u5236\u5668"},"3. \u90e8\u7f72\u8bbe\u5907\u6a21\u578b\u548c\u8bbe\u5907\u63a7\u5236\u5668"),Object(o.b)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u4f1a\u4f7f\u7528\u8bbe\u5907\u6a21\u62df\u5668\u8fdb\u884c\u6d4b\u8bd5(\u4e0d\u9700\u8981\u5c06\u5176\u8fde\u63a5\u5230\u771f\u5b9e\u7684\u7269\u7406\u8bbe\u5907)\u3002"),Object(o.b)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u5c06\u8bbe\u5907\u63cf\u8ff0\u4e3aKubernetes\u4e2d\u7684\u4e00\u79cd\u8d44\u6e90\u3002 \u6b64\u63cf\u8ff0\u8fc7\u7a0b\u5373\u4e3a\u5bf9\u8bbe\u5907\u8fdb\u884c\u5efa\u6a21\u3002 \u5728Kubernetes\u4e2d\uff0c\u63cf\u8ff0\u8d44\u6e90\u7684\u6700\u4f73\u65b9\u6cd5\u662f\u4f7f\u7528",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/#customresourcedefinitions"}),"CustomResourceDefinitions"),"\uff0c\u56e0\u6b64",Object(o.b)("strong",{parentName:"p"},"\u5b9a\u4e49Octopus\u7684\u8bbe\u5907\u6a21\u578b\u5b9e\u9645\u4e0a\u662f\u5728\u5b9a\u4e49CustomResourceDefinition"),", \u53ef\u5feb\u901f\u6d4f\u89c8\u4e00\u4e0b\u4e0b\u5217\u7684",Object(o.b)("inlineCode",{parentName:"p"},"DummySpecialDevice"),"\u6a21\u578b\uff08\u5047\u8bbe\u8fd9\u662f\u4e00\u4e2a\u667a\u80fd\u98ce\u6247\uff09\uff1a"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u8bf4\u660e")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u4e0b\u5217YAML\u53ef\u901a\u8fc7",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/kubernetes/code-generator"}),"code-generator"),"\u52a8\u6001\u751f\u6210\uff0c\u65e0\u9700\u624b\u52a8\u7f16\u8f91\u3002"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: apiextensions.k8s.io/v1\nkind: CustomResourceDefinition\nmetadata:\n  annotations:\n    controller-gen.kubebuilder.io/version: v0.2.5\n    devices.edge.cattle.io/description: dummy device description\n    devices.edge.cattle.io/device-property: ""\n    devices.edge.cattle.io/enable: "true"\n    devices.edge.cattle.io/icon: ""\n  labels:\n    app.kubernetes.io/name: octopus-adaptor-dummy\n    app.kubernetes.io/version: master\n  name: dummyspecialdevices.devices.edge.cattle.io\nspec:\n  group: devices.edge.cattle.io\n  names:\n    kind: DummySpecialDevice\n    listKind: DummySpecialDeviceList\n    plural: dummyspecialdevices\n    singular: dummyspecialdevice\n  scope: Namespaced\n  versions:\n  - name: v1alpha1\n    schema:\n      openAPIV3Schema:\n        description: DummySpecialDevice is the Schema for the dummy special device\n          API.\n        properties:\n          ...\n          spec:\n            description: DummySpecialDeviceSpec defines the desired state of DummySpecialDevice.\n            properties:\n              gear:\n                description: Specifies how fast the dummy special device should be.\n                enum:\n                - slow\n                - middle\n                - fast\n                type: string\n              "on":\n                description: Turn on the dummy special device.\n                type: boolean\n              protocol:\n                description: Protocol for accessing the dummy special device.\n                properties:\n                  location:\n                    type: string\n                required:\n                - location\n                type: object\n            required:\n            - "on"\n            - protocol\n            type: object\n          status:\n            description: DummySpecialDeviceStatus defines the observed state of DummySpecialDevice.\n            properties:\n              gear:\n                description: Reports the current gear of dummy special device.\n                enum:\n                - slow\n                - middle\n                - fast\n                type: string\n              rotatingSpeed:\n                description: Reports the detail number of speed of dummy special device.\n                format: int32\n                type: integer\n            type: object\n        type: object\n    ...\nstatus:\n  ...\n')),Object(o.b)("p",null,"\u865a\u62df\u8bbe\u5907\u9002\u914d\u5668\uff08Dummy Adaptor\uff09\u7684\u5b89\u88c5YAML\u6587\u4ef6\u4f4d\u4e8e",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/cnrancher/octopus/blob/master/adaptors/dummy/deploy/e2e"}),Object(o.b)("inlineCode",{parentName:"a"},"adaptors/dummy/deploy/e2e")),"\u76ee\u5f55\u4e0b\uff0c\u5373 ",Object(o.b)("inlineCode",{parentName:"p"},"all_in_one.yaml"),", \u5b83\u5305\u542b\u4e86\u8bbe\u5907\u6a21\u578b\u548c\u8bbe\u5907\u9002\u914d\u5668\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6307\u4ee4\u5c06\u5176\u76f4\u63a5\u90e8\u7f72\u5230k3s\u96c6\u7fa4\u4e2d\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"kubectl apply -f https://raw.githubusercontent.com/cnrancher/octopus/master/adaptors/dummy/deploy/e2e/all_in_one.yaml\n")),Object(o.b)("p",null,"\u9884\u671f\u7ed3\u679c\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"customresourcedefinition.apiextensions.k8s.io/dummyspecialdevices.devices.edge.cattle.io created\ncustomresourcedefinition.apiextensions.k8s.io/dummyprotocoldevices.devices.edge.cattle.io created\nclusterrole.rbac.authorization.k8s.io/octopus-adaptor-dummy-manager-role created\nclusterrolebinding.rbac.authorization.k8s.io/octopus-adaptor-dummy-manager-rolebinding created\ndaemonset.apps/octopus-adaptor-dummy-adaptor created\n\nkubectl get all -n octopus-system\nNAME                                      READY   STATUS    RESTARTS   AGE\npod/octopus-limb-w8vcf                    1/1     Running   0          2m27s\npod/octopus-limb-862kh                    1/1     Running   0          2m27s\npod/octopus-limb-797d8                    1/1     Running   0          2m27s\npod/octopus-limb-8w462                    1/1     Running   0          2m27s\npod/octopus-brain-65fdb4ff99-zvw62        1/1     Running   0          2m27s\npod/octopus-adaptor-dummy-adaptor-6xcdz   1/1     Running   0          21s\npod/octopus-adaptor-dummy-adaptor-mmk5l   1/1     Running   0          21s\npod/octopus-adaptor-dummy-adaptor-xnjrf   1/1     Running   0          21s\npod/octopus-adaptor-dummy-adaptor-srsjz   1/1     Running   0          21s\n\nNAME                    TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE\nservice/octopus-brain   ClusterIP   10.43.92.81    <none>        8080/TCP   2m27s\nservice/octopus-limb    ClusterIP   10.43.143.49   <none>        8080/TCP   2m27s\n\nNAME                                           DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE\ndaemonset.apps/octopus-limb                    4         4         4       4            4           <none>          2m27s\ndaemonset.apps/octopus-adaptor-dummy-adaptor   4         4         4       4            4           <none>          21s\n\nNAME                            READY   UP-TO-DATE   AVAILABLE   AGE\ndeployment.apps/octopus-brain   1/1     1            1           2m27s\n\nNAME                                       DESIRED   CURRENT   READY   AGE\nreplicaset.apps/octopus-brain-65fdb4ff99   1         1         1       2m27s\n\n")),Object(o.b)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u8fd8\u9700\u8981\u6388\u4e88Octopus\u7ba1\u7406 ",Object(o.b)("inlineCode",{parentName:"p"},"DummySpecialDevice"),"/",Object(o.b)("inlineCode",{parentName:"p"},"DummyProtocolDevice"),"\u7684\u6743\u9650\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ kubectl get clusterrolebinding | grep octopus\noctopus-manager-rolebinding                            2m49s\noctopus-adaptor-dummy-manager-rolebinding              43s\n\n")),Object(o.b)("h3",{id:"4-\u521b\u5efa-devicelink"},"4. \u521b\u5efa DeviceLink"),Object(o.b)("p",null,"\u524d\u9762\u6211\u4eec\u63d0\u5230\u8fc7DeviceLink\u662fOctopus\u81ea\u5b9a\u4e49\u7684\u4e00\u4e2ak8s\u8d44\u6e90\u5bf9\u8c61\uff08\u7b80\u79f0dl\uff09\uff0c\u7528\u6237\u53ef\u901a\u8fc7\u7f16\u8f91DeviceLink \u7684YAML\u6587\u4ef6\u6765\u8fdb\u884c\u914d\u7f6e\u4e0e\u548c\u7ba1\u7406\u8bbe\u5907\u8fde\u63a5\u3002"),Object(o.b)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"DeviceLink")," YAML\u6765\u8fde\u63a5\u4e00\u4e2a\u865a\u62df\u8bbe\u5907\u3002 DeviceLink\u75313\u90e8\u5206\u7ec4\u6210\uff1aAdaptor\u3001Model\u548cDevice spec\u3002"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Adaptor")," - \u9002\u914d\u5668\u5b9a\u4e49\u4e86\u8981\u4f7f\u7528\u7684\u9002\u914d\u5668\uff08\u5373\u534f\u8bae\uff09\u4ee5\u53ca\u5b9e\u9645\u8bbe\u5907\u5e94\u8fde\u63a5\u7684\u8282\u70b9\u3002"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Model")," - \u6a21\u578b\u63cf\u8ff0\u4e86\u8bbe\u5907\u7684\u6a21\u578b\uff0c\u5b83\u662f\u8bbe\u5907\u6a21\u578b\u7684",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/kubernetes/apimachinery/blob/master/pkg/apis/meta/v1/types.go"}),"TypeMeta")," CRD\u3002"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Device Spec")," - \u8bbe\u5907\u53c2\u6570\u63cf\u8ff0\u4e86\u5982\u4f55\u8fde\u63a5\u5230\u8bbe\u5907\u53ca\u5176\u6240\u9700\u7684\u8bbe\u5907\u5c5e\u6027\u6216\u72b6\u6001\uff0c\u8fd9\u4e9b\u53c2\u6570\u7531\u8bbe\u5907\u6a21\u578b\u7684CRD\u6765\u5b9a\u4e49\u3002")),Object(o.b)("p",null,"\u5047\u8bbe\u6709\u4e00\u4e2a\u540d\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"living-room-fan")," \u7684\u8bbe\u5907\u53ef\u4ee5\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"edge-worker")," \u8282\u70b9\u8fde\u63a5\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0bYAML\u6765\u6d4b\u8bd5\u5176\u5de5\u4f5c\u65b9\u5f0f\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'cat <<EOF | kubectl apply -f -\napiVersion: edge.cattle.io/v1alpha1\nkind: DeviceLink\nmetadata:\n  name: living-room-fan\n  namespace: default\nspec:\n  adaptor:\n    node: edge-worker # select the node that the device will be connect to\n    name: adaptors.edge.cattle.io/dummy\n  model:\n    apiVersion: "devices.edge.cattle.io/v1alpha1"\n    kind: "DummySpecialDevice"\n  template:\n    metadata:\n      labels:\n        device: living-room-fan\n    spec: # specify device specs\n      protocol:\n        location: "living_room"\n      gear: slow\n      "on": true\nEOF\n')),Object(o.b)("p",null,"DeviceLink\u5305\u542b\u4e86",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./devicelink/state-of-dl"}),"\u51e0\u79cd\u72b6\u6001"),"\uff0c\u5982\u679c\u6211\u4eec\u53d1\u73b0\u5176",Object(o.b)("inlineCode",{parentName:"p"},"PHASE"),"\u4e3a",Object(o.b)("strong",{parentName:"p"},"DeviceConnected"),"\u548c",Object(o.b)("inlineCode",{parentName:"p"},"STATUS"),"\u4e3a",Object(o.b)("strong",{parentName:"p"},"Healthy"),"\u7684\u72b6\u6001\u4e0b\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528\u8bbe\u5907\u6a21\u578b\u7684CRD\u5bf9\u8c61\u6765\u67e5\u8be2\u5176\u72b6\u6001\uff08\u5373\u6b64\u5904\u7684dummyspecialdevice\uff09\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"kubectl get devicelink living-room-fan -n default\nNAME              KIND                 NODE          ADAPTOR                         PHASE             STATUS    AGE\nliving-room-fan   DummySpecialDevice   edge-worker   adaptors.edge.cattle.io/dummy   DeviceConnected   Healthy   10s\n\n")),Object(o.b)("p",null,"\u67e5\u770b\u865a\u62df\u8bbe\u5907\u4e0a\u62a5\u7684\u72b6\u6001\u6216\u4fe1\u606f\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"kubectl get dummyspecialdevice living-room-fan -n default -w\nNAME              GEAR   SPEED   AGE\nliving-room-fan   slow   10      32s\nliving-room-fan   slow   11      33s\nliving-room-fan   slow   12      36s\n\n")),Object(o.b)("h3",{id:"5-\u7ba1\u7406\u8bbe\u5907"},"5. \u7ba1\u7406\u8bbe\u5907"),Object(o.b)("p",null,"\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u4fee\u6539\u8bbe\u5907\u5c5e\u6027\u6765\u7ba1\u7406\u5176\u8bbe\u5907\uff0c\u4f8b\u5982\uff0c\u5047\u8bbe\u6211\u4eec\u8981\u5173\u95ed\u98ce\u6247\uff0c\u53ef\u4ee5\u5c06\u5176",Object(o.b)("inlineCode",{parentName:"p"},"on"),"(\u5f00\u5173\u5c5e\u6027)\u914d\u7f6e\u8bbe\u7f6e\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},'"on"\uff1afalse'),"\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'kubectl patch devicelink living-room-fan -n default --type merge --patch \'{"spec":{"template":{"spec":{"on":false}}}}\'\n')),Object(o.b)("p",null,"\u65e5\u5fd7\u663e\u793a ",Object(o.b)("inlineCode",{parentName:"p"},"devicelink.edge.cattle.io/living-room-fan is patched"),"\uff0c\u67e5\u8be2\u5176\u72b6\u6001\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"GEAR"),"\u548c",Object(o.b)("inlineCode",{parentName:"p"},"SPEED"),"\u503c\u5747\u663e\u793a\u4e3a\u7a7a\u503c(\u8868\u793a\u5df2\u5173\u95ed)\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get devicelink living-room-fan -n default\n  NAME              KIND                 NODE          ADAPTOR                         PHASE             STATUS    AGE\n  living-room-fan   DummySpecialDevice   edge-worker   adaptors.edge.cattle.io/dummy   DeviceConnected   Healthy   89s\n\nkubectl get dummyspecialdevice living-room-fan -n default\nNAME              GEAR   SPEED   AGE\nliving-room-fan                  117s\n")))}l.isMDXComponent=!0},186:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return u}));var a=t(0),c=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,c=function(e,n){if(null==e)return{};var t,a,c={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var p=c.a.createContext({}),l=function(e){var n=c.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},b=function(e){var n=l(e.components);return c.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},m=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(t),m=a,u=b["".concat(r,".").concat(m)]||b[m]||d[m]||o;return t?c.a.createElement(u,i({ref:n},p,{components:t})):c.a.createElement(u,i({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var p=2;p<o;p++)r[p]=t[p];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);