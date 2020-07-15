(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{173:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(9),b=(a(0),a(186)),c={id:"ble",title:"BLE Adaptor"},l={id:"en/adaptors/ble",title:"BLE Adaptor",description:"### Introduction",source:"@site/docs/en/adaptors/ble.md",permalink:"/docs-octopus/docs/en/adaptors/ble",editUrl:"https://github.com/cnrancher/docs-octopus/edit/master/website/docs/en/adaptors/ble.md",sidebar:"docs",previous:{title:"MQTT Adaptor",permalink:"/docs-octopus/docs/en/adaptors/mqtt"},next:{title:"Dummy Adaptor",permalink:"/docs-octopus/docs/en/adaptors/dummy"}},i=[{value:"Introduction",id:"introduction",children:[]},{value:"Registration Information",id:"registration-information",children:[]},{value:"Support Model",id:"support-model",children:[]},{value:"Support Platform",id:"support-platform",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Authority",id:"authority",children:[]},{value:"Example of BLE deviceLink YAML",id:"example-of-ble-devicelink-yaml",children:[]},{value:"BLE Device Spec",id:"ble-device-spec",children:[]}],O={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h3",{id:"introduction"},"Introduction"),Object(b.b)("p",null,"BLE stands for Bluetooth Low Energy (marketed as Bluetooth Smart). BLE is a form of wireless communication designed for short-range communications. "),Object(b.b)("p",null,"BLE adaptor implements the Bluetooth protocol and helps to define the attributes of the connected BLE device."),Object(b.b)("h3",{id:"registration-information"},"Registration Information"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Versions"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Register Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Endpoint Socket"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Available"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"v1alpha1")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"adaptors.edge.cattle.io/ble")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"ble.sock")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"*")))),Object(b.b)("h3",{id:"support-model"},"Support Model"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Kind"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Group"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Version"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Available"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"BluetoothDevice")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"devices.edge.cattle.io")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"v1alpha1")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"*")))),Object(b.b)("h3",{id:"support-platform"},"Support Platform"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"OS"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Arch"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"linux")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"amd64"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"linux")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"arm"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"linux")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"arm64"))))),Object(b.b)("h3",{id:"usage"},"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ kubectl apply -f https://raw.githubusercontent.com/cnrancher/octopus/master/adaptors/ble/deploy/e2e/all_in_one.yaml\n")),Object(b.b)("h3",{id:"authority"},"Authority"),Object(b.b)("p",null,"Grant permissions to Octopus as below:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"  Resources                                   Non-Resource URLs  Resource Names  Verbs\n  ---------                                   -----------------  --------------  -----\n  bluetoothdevices.devices.edge.cattle.io         []                 []              [create delete get list patch update watch]\n  bluetoothdevices.devices.edge.cattle.io/status  []                 []              [get patch update]\n")),Object(b.b)("h3",{id:"example-of-ble-devicelink-yaml"},"Example of BLE deviceLink YAML"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-YAML"}),'apiVersion: edge.cattle.io/v1alpha1\nkind: DeviceLink\nmetadata:\n  name: xiaomi-temp-rs2201\nspec:\n  adaptor:\n    node: edge-worker\n    name: adaptors.edge.cattle.io/ble\n  model:\n    apiVersion: "devices.edge.cattle.io/v1alpha1"\n    kind: "BluetoothDevice"\n  template:\n    metadata:\n      labels:\n        device: xiaomi-temp-rs2201\n    spec:\n      parameters:\n        syncInterval: 15s\n        timeout: 10s\n      extension:\n        mqtt:\n          client:\n            server: tcp://test.mosquitto.org:1883\n          message:\n            topic:\n              prefix: cattle.io/octopus\n              with: nn # namespace/name\n      protocol:\n        name: "MJ_HT_V1"\n        macAddress: ""\n      properties:\n      - name: data\n        description: XiaoMi temp sensor with temperature and humidity data\n        accessMode: NotifyOnly\n        visitor:\n          characteristicUUID: 226c000064764566756266734470666d\n')),Object(b.b)("p",null,"For more BLE deviceLink examples, please refer to the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/cnrancher/octopus/tree/master/adaptors/ble/deploy/e2e"}),"deploy/e2e")," directory."),Object(b.b)("h3",{id:"ble-device-spec"},"BLE Device Spec"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"parameters"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Parameter of the BLE device"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#deviceparamters"}),"DeviceParamters")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"protocol"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Device protocol config"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#deviceprotocol"}),"DeviceProtocol")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"properties"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Device properties"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#deviceproperty"}),"DeviceProperty")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"extension"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Integrate with deivce MQTT extension"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#deviceextension"}),"DeviceExtension")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))),Object(b.b)("h4",{id:"deviceparamters"},"DeviceParamters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"syncInterval"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Device properties sync interval, default to ",Object(b.b)("inlineCode",{parentName:"td"},"15s")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"timeout"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Device connection timeout, default to ",Object(b.b)("inlineCode",{parentName:"td"},"10s")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))),Object(b.b)("h4",{id:"deviceprotocol"},"DeviceProtocol"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Device name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NOT required when the device macAddress is provided")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"macAddress"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Device access mac address"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NOT required when the device name is provided")))),Object(b.b)("h4",{id:"deviceproperty"},"DeviceProperty"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Property name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"description"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Property description"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accessMode"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Property accessMode"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#propertyaccessmode"}),"PropertyAccessMode")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"visitor"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Property visitor"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#propertyvisitor"}),"PropertyVisitor")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")))),Object(b.b)("h4",{id:"propertyaccessmode"},"PropertyAccessMode"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ReadOnly"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Property access mode is read only"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ReadWrite"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Property access mode is read and write"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NotifyOnly"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Property access mode is notify only"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))),Object(b.b)("h4",{id:"propertyvisitor"},"PropertyVisitor"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"characteristicUUID"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Property UUID"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defaultValue"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Config data write to the bluetooth device(set when access mode is ",Object(b.b)("inlineCode",{parentName:"td"},"ReadWrite"),"), for example ",Object(b.b)("inlineCode",{parentName:"td"},"ON")," configed in the dataWrite"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dataWrite"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Responsible for converting the data from the string into byte that is understood by the bluetooth device, for example: ",Object(b.b)("inlineCode",{parentName:"td"},'"ON":[1], "OFF":[0]')),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dataConverter"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Responsible for converting the data being read from the bluetooth device into string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#bluetoothdataconverter"}),"BluetoothDataConverter")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))),Object(b.b)("h4",{id:"bluetoothdataconverter"},"BluetoothDataConverter"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"startIndex"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the start index of the incoming byte stream to be converted"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"endIndex"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the end index of incoming byte stream to be converted"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"shiftLeft"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the number of bits to shift left"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"shiftRight"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the number of bits to shift right"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"orderOfOperations"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies in what order the operations"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[]*",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#BluetoothOperations"}),"BluetoothOperations")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))),Object(b.b)("h4",{id:"bluetoothoperations"},"BluetoothOperations"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"operationType"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the operation to be performed"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#bluetootharithmeticoperationtype"}),"BluetoothArithmeticOperationType")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"operationValue"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies with what value the operation is to be performed"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")))),Object(b.b)("h4",{id:"bluetootharithmeticoperationtype"},"BluetoothArithmeticOperationType"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Add"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Arithmetic operation of add"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Subtract"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Arithmetic operation of subtract"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Multiply"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Arithmetic operation of multiply"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Divide"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Arithmetic operation of divide"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))),Object(b.b)("h4",{id:"deviceextension"},"DeviceExtension"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"reference the ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#example-of-ble-devicelink-yaml"}),"example YAML")," of BLE device for MQTT integration."),Object(b.b)("li",{parentName:"ul"},"check ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"./mqtt-extension"}),"Integrate with MQTT Documentation")," for more details.")))}p.isMDXComponent=!0},186:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var O=r.a.createContext({}),p=function(e){var t=r.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},j=function(e){var t=p(e.components);return r.a.createElement(O.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),j=p(a),d=n,m=j["".concat(c,".").concat(d)]||j[d]||o[d]||b;return a?r.a.createElement(m,l({ref:t},O,{components:a})):r.a.createElement(m,l({ref:t},O))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var O=2;O<b;O++)c[O]=a[O];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);