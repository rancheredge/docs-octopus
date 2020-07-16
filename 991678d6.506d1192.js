(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{174:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var b=a(2),r=a(9),n=(a(0),a(186)),c={id:"ble",title:"BLE Adaptor"},l={id:"en/adaptors/ble",title:"BLE Adaptor",description:"## Introduction",source:"@site/docs/en/adaptors/ble.md",permalink:"/docs-octopus/docs/en/adaptors/ble",editUrl:"https://github.com/cnrancher/docs-octopus/tree/master/docs/en/adaptors/ble.md",sidebar:"docs",previous:{title:"MQTT Adaptor",permalink:"/docs-octopus/docs/en/adaptors/mqtt"},next:{title:"Dummy Adaptor",permalink:"/docs-octopus/docs/en/adaptors/dummy"}},i=[{value:"Introduction",id:"introduction",children:[]},{value:"Registration Information",id:"registration-information",children:[]},{value:"Support Model",id:"support-model",children:[]},{value:"Support Platform",id:"support-platform",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Authority",id:"authority",children:[]},{value:"Example",id:"example",children:[]},{value:"BluetoothDevice",id:"bluetoothdevice",children:[{value:"BluetoothDeviceSpec",id:"bluetoothdevicespec",children:[]},{value:"BluetoothDeviceStatus",id:"bluetoothdevicestatus",children:[]}]}],o={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(b.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"introduction"},"Introduction"),Object(n.b)("p",null,"BLE stands for ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"#https://en.wikipedia.org/wiki/Bluetooth_Low_Energy"}),"Bluetooth Low Energy")," (marketed as Bluetooth Smart). BLE is a form of wireless communication designed for short-range communications. "),Object(n.b)("p",null,"BLE adaptor implements on ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"#github.com/bettercap/gatt"}),"bettercap/gatt")," and helps to communicate with BLE supported equipment or define the attributes of the connected device."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"The host that deploys BLE adaptor needs to turn on the Bluetooth module.")),Object(n.b)("h2",{id:"registration-information"},"Registration Information"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Versions"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Register Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Endpoint Socket"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Available"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"v1alpha1")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"adaptors.edge.cattle.io/ble")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"ble.sock")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"*")))),Object(n.b)("h2",{id:"support-model"},"Support Model"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Kind"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Group"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Version"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Available"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"BluetoothDevice")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"devices.edge.cattle.io")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"v1alpha1")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"*")))),Object(n.b)("h2",{id:"support-platform"},"Support Platform"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"OS"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Arch"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"linux")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"amd64"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"linux")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"arm"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"linux")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"arm64"))))),Object(n.b)("h2",{id:"usage"},"Usage"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"kubectl apply -f https://raw.githubusercontent.com/cnrancher/octopus/master/adaptors/ble/deploy/e2e/all_in_one.yaml\n")),Object(n.b)("h2",{id:"authority"},"Authority"),Object(n.b)("p",null,"Grant permissions to Octopus as below:"),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-text"}),"  Resources                                   Non-Resource URLs  Resource Names  Verbs\n  ---------                                   -----------------  --------------  -----\n  bluetoothdevices.devices.edge.cattle.io         []                 []              [create delete get list patch update watch]\n  bluetoothdevices.devices.edge.cattle.io/status  []                 []              [get patch update]\n")),Object(n.b)("h2",{id:"example"},"Example"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Specifies a ",Object(n.b)("inlineCode",{parentName:"li"},"BluetoothDevice")," device link to connect the ",Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"https://www.mi.com/mj-humiture"}),"XiaoMi thermometer"),".")),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-YAML"}),'apiVersion: edge.cattle.io/v1alpha1\nkind: DeviceLink\nmetadata:\n  name: xiaomi-temp-rs2201\nspec:\n  adaptor:\n    node: edge-worker\n    name: adaptors.edge.cattle.io/ble\n  model:\n    apiVersion: "devices.edge.cattle.io/v1alpha1"\n    kind: "BluetoothDevice"\n  template:\n    metadata:\n      labels:\n        device: xiaomi-temp-rs2201\n    spec:\n      parameters:\n        syncInterval: 15s\n        timeout: 30s\n      protocol:\n        endpoint: "MJ_HT_V1"\n      properties:\n        - name: data\n          description: XiaoMi temp sensor with temperature and humidity data\n          accessMode: NotifyOnly\n          visitor:\n            characteristicUUID: 226c000064764566756266734470666d\n        - name: humidity\n          description: Humidity in percent\n          accessMode: ReadOnly\n          visitor:\n            characteristicUUID: f000aa0304514000b000000000000000\n            dataConverter:\n              startIndex: 1\n              endIndex: 0\n              shiftRight: 2\n              orderOfOperations:\n                # Options are Add/Subtract/Multiply/Divide\n                - type: Multiply\n                  value: "0.03125"\n        - name: power-enabled\n          description: Turn the device power on or off\n          accessMode: ReadWrite\n          visitor:\n            characteristicUUID: f000aa0104514000b000000000000001\n            # Sets the defaultValue by chosen one of option in the dataWrite\n            defaultValue: OFF\n            dataWrite:\n              ON: [1]\n              OFF: [0]\n            dataConverter:\n              startIndex: 1\n              endIndex: 0\n              shiftRight: 3\n              orderOfOperations:\n                - type: Multiply\n                  value: "0.03125"\n')),Object(n.b)("p",null,"For more ",Object(n.b)("inlineCode",{parentName:"p"},"BluetoothDevice")," device link examples, please refer to the ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/cnrancher/octopus/tree/master/adaptors/ble/deploy/e2e"}),"deploy/e2e")," directory."),Object(n.b)("h2",{id:"bluetoothdevice"},"BluetoothDevice"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Description"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Schema"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"metadata"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"})),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"https://github.com/kubernetes/apimachinery/blob/master/pkg/apis/meta/v1/types.go#L110"}),"metav1.ObjectMeta")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"false")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"spec"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Defines the desired state of ",Object(n.b)("inlineCode",{parentName:"td"},"BluetoothDevice"),"."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"#bluetoothdevicespec"}),"BluetoothDeviceSpec")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"true")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"status"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Defines the observed state of ",Object(n.b)("inlineCode",{parentName:"td"},"BluetoothDevice"),"."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"#bluettothdevicestatus"}),"BluetoothDeviceStatus")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"false")))),Object(n.b)("h3",{id:"bluetoothdevicespec"},"BluetoothDeviceSpec"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Description"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Schema"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"extension"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Specifies the extension of device."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"*",Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"#bluetoothdeviceextension"}),"BluetoothDeviceExtension")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"false")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"parameters"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Specifies the parameters of device."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"*",Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"#bluetoothdeviceparamters"}),"BluetoothDeviceParameters")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"false")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"protocol"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Specifies the protocol for accessing. the device"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"#bluetoothdeviceprotocol"}),"BluetoothDeviceProtocol")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"true")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"properties"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Specifies the properties of device."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"#bluetoothdeviceproperty"}),"[]BluetoothDeviceProperty")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"false")))),Object(n.b)("h3",{id:"bluetoothdevicestatus"},"BluetoothDeviceStatus"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Description"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Schema"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"properties"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Reports the properties of device."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"#bluetoothdevicestatusproperty"}),"[]BluetoothDeviceStatusProperty")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"false")))),Object(n.b)("h4",{id:"bluetoothdeviceparameters"},"BluetoothDeviceParameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Description"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Schema"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"syncInterval"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Specifies default device sync interval, default to ",Object(n.b)("inlineCode",{parentName:"td"},"15s"),"."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"false")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"timeout"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Specifies default device connection timeout, default to ",Object(n.b)("inlineCode",{parentName:"td"},"30s"),"."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"false")))),Object(n.b)("h4",{id:"bluetoothdeviceprotocol"},"BluetoothDeviceProtocol"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Description"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Schema"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"endpoint"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Specifies the endpoint of device, it can be the name or MAC address of device."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"true")))),Object(n.b)("h4",{id:"bluetoothdeviceproperty"},"BluetoothDeviceProperty"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Description"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Schema"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"name"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Specifies the name of property."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"true")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"description"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Specifies the description of property."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"false")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"accessMode"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Specifies the access mode of property, default to ",Object(n.b)("inlineCode",{parentName:"td"},"NotifyOnly"),"."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"#bluetoothpropertyaccessmode"}),"BluetoothDevicePropertyAccessMode")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"true")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"visitor"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Specifies the visitor of property."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"*",Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"#bluetoothpropertyvisitor"}),"BluetoothDevicePropertyVisitor")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"true")))),Object(n.b)("h4",{id:"bluetoothdevicestatusproperty"},"BluetoothDeviceStatusProperty"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Description"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Schema"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"name"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Reports the name of property."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"false")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"value"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Reports the value of property."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"false")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"accessMode"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Reports the access mode of property."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"#bluetoothpropertyaccessmode"}),"BluetoothDevicePropertyAccessMode")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"false")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"updatedAt"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Reports the updated timestamp of property."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"*",Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"https://github.com/kubernetes/apimachinery/blob/master/pkg/apis/meta/v1/time.go#L33"}),"metav1.Time")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"false")))),Object(n.b)("h4",{id:"bluetoothdevicepropertyaccessmode"},"BluetoothDevicePropertyAccessMode"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Description"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Schema"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ReadOnly"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Property access mode is read only."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"ReadWrite"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Property access mode is read and write."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"NotifyOnly"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Property access mode is notify only."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string")))),Object(n.b)("h4",{id:"bluetoothdevicepropertyvisitor"},"BluetoothDevicePropertyVisitor"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Description"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Schema"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"characteristicUUID"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Specifies the characteristic UUID of property."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"true")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"defaultValue"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Specifies the default value of property, when access mode is ",Object(n.b)("inlineCode",{parentName:"td"},"ReadWrite"),"."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"false")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"dataWrite"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Specifies the data to write to device."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"false")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"dataConverter"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Specifies the converter to convert data read from device to a string."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"#bluetoothdataconverter"}),"BluetoothDataConverter")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"false")))),Object(n.b)("h4",{id:"bluetoothdataconverter"},"BluetoothDataConverter"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Description"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Schema"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"startIndex"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Specifies the start index of the incoming byte stream to be converted."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"int"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"true")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"endIndex"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Specifies the end index of incoming byte stream to be converted."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"int"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"true")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"shiftLeft"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Specifies the number of bits to shift left."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"int"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"false")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"shiftRight"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Specifies the number of bits to shift right."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"int"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"false")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"orderOfOperations"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Specifies in what order the operations."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"#bluetoothdevicearithmeticoperation"}),"[]BluetoothDeviceArithmeticOperation")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"false")))),Object(n.b)("h4",{id:"bluetoothdevicearithmeticoperation"},"BluetoothDeviceArithmeticOperation"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Description"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Schema"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"type"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Specifies the type of arithmetic operation."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"#bluetoothdevicearithmeticoperationtype"}),"BluetoothDeviceArithmeticOperationType")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"true")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"value"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Specifies the value for arithmetic operation, which is in form of float string."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"true")))),Object(n.b)("h4",{id:"bluetoothdevicearithmeticoperationtype"},"BluetoothDeviceArithmeticOperationType"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Description"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Schema"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Add"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Arithmetic operation of add."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Subtract"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Arithmetic operation of subtract."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Multiply"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Arithmetic operation of multiply."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Divide"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Arithmetic operation of divide."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string")))),Object(n.b)("h4",{id:"bluetoothdeviceextension"},"BluetoothDeviceExtension"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Description"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Schema"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Required"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"mqtt"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Specifies the MQTT settings."),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"*",Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"./mqtt-extension#specification"}),"v1alpha1.MQTTOptionsSpec")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"false")))))}p.isMDXComponent=!0},186:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var b=a(0),r=a.n(b);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,b,r=function(e,t){if(null==e)return{};var a,b,r={},n=Object.keys(e);for(b=0;b<n.length;b++)a=n[b],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(b=0;b<n.length;b++)a=n[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},O=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(b.forwardRef)((function(e,t){var a=e.components,b=e.mdxType,n=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),O=p(a),d=b,m=O["".concat(c,".").concat(d)]||O[d]||j[d]||n;return a?r.a.createElement(m,l({ref:t},o,{components:a})):r.a.createElement(m,l({ref:t},o))}));function m(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var n=a.length,c=new Array(n);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:b,c[1]=l;for(var o=2;o<n;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);