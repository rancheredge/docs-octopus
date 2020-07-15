(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{155:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(2),r=a(9),b=(a(0),a(186)),l={id:"modbus",title:"Modbus Adaptor"},c={id:"en/adaptors/modbus",title:"Modbus Adaptor",description:"### Introduction",source:"@site/docs/en/adaptors/modbus.md",permalink:"/docs-octopus/docs/en/adaptors/modbus",editUrl:"https://github.com/cnrancher/docs-octopus/edit/master/website/docs/en/adaptors/modbus.md",sidebar:"docs",previous:{title:"How it Works",permalink:"/docs-octopus/docs/en/adaptors/adaptor"},next:{title:"OPC-UA Adaptor",permalink:"/docs-octopus/docs/en/adaptors/opc-ua"}},i=[{value:"Introduction",id:"introduction",children:[]},{value:"Registers Operation",id:"registers-operation",children:[]},{value:"Registration Information",id:"registration-information",children:[]},{value:"Support Model",id:"support-model",children:[]},{value:"Support Platform",id:"support-platform",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Authority",id:"authority",children:[]},{value:"Modbus DeviceLink YAML",id:"modbus-devicelink-yaml",children:[]},{value:"Modbus Device Spec",id:"modbus-device-spec",children:[]}],O={rightToc:i};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h3",{id:"introduction"},"Introduction"),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.modbustools.com/modbus.html"}),"Modbus")," is a master/slave protocol, the device requesting the information is called the Modbus master and the devices supplying information are Modbus slaves.\nIn a standard Modbus network, there is one master and up to 247 slaves, each with a unique slave address from 1 to 247.\nThe master can also write information to the slaves."),Object(b.b)("p",null,"Modbus adaptor support both TCP and RTU protocol, it acting as the master node and connects to or manipulating the Modbus slave devices on the edge side."),Object(b.b)("h3",{id:"registers-operation"},"Registers Operation"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"Coil Registers"),": readable and writable, 1 bit (off/on)")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"Discrete Input Registers"),": readable, 1 bit (off/on)")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"Input Registers"),": readable, 16 bits (0 to 65,535), essentially measurements and statuses")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"Holding Registers"),": readable and writable, 16 bits (0 to 65,535), essentially configuration values"))),Object(b.b)("h3",{id:"registration-information"},"Registration Information"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Versions"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Register Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Endpoint Socket"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Available"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"v1alpha1")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"adaptors.edge.cattle.io/modbus")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"modbus.sock")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"*")))),Object(b.b)("h3",{id:"support-model"},"Support Model"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Kind"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Group"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Version"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Available"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"ModbusDevice")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"devices.edge.cattle.io")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"v1alpha1")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"*")))),Object(b.b)("h3",{id:"support-platform"},"Support Platform"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"OS"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Arch"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"linux")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"amd64"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"linux")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"arm"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"linux")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"arm64"))))),Object(b.b)("h3",{id:"usage"},"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ kubectl apply -f https://raw.githubusercontent.com/cnrancher/octopus/master/adaptors/modbus/deploy/e2e/all_in_one.yaml\n")),Object(b.b)("h3",{id:"authority"},"Authority"),Object(b.b)("p",null,"Grant permissions to Octopus as below:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"  Resources                                   Non-Resource URLs  Resource Names  Verbs\n  ---------                                   -----------------  --------------  -----\n  modbusdevices.devices.edge.cattle.io         []                 []              [create delete get list patch update watch]\n  modbusdevices.devices.edge.cattle.io/status  []                 []              [get patch update]\n")),Object(b.b)("h3",{id:"modbus-devicelink-yaml"},"Modbus DeviceLink YAML"),Object(b.b)("p",null,"example of modbus deviceLink YAML"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: edge.cattle.io/v1alpha1\nkind: DeviceLink\nmetadata:\n  name: modbus-tcp\nspec:\n  adaptor:\n    node: edge-worker\n    name: adaptors.edge.cattle.io/modbus\n  model:\n    apiVersion: "devices.edge.cattle.io/v1alpha1"\n    kind: "ModbusDevice"\n  template:\n    metadata:\n      labels:\n        device: modbus-tcp\n    spec:\n      protocol:\n        tcp:\n          ip: 192.168.1.3\n          port: 502\n          slaveID: 1\n      properties:\n        - name: temperature\n          description: data collection of temperature sensor\n          readOnly: false\n          visitor:\n            register: HoldingRegister\n            offset: 2\n            quantity: 8\n          value: "33.3"\n          dataType: float\n        - name: temperature-enable\n          description: enable data collection of temperature sensor\n          readOnly: false\n          visitor:\n            register: CoilRegister\n            offset: 2\n            quantity: 1\n          value: "true"\n          dataType: boolean\n\n')),Object(b.b)("h3",{id:"modbus-device-spec"},"Modbus Device Spec"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"parameters"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Parameter of the modbus device"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#modbusdeviceparamters"}),"ModbusDeviceParamters")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"protocol"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Protocol for accessing the modbus device"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#modbusprotocolconfig"}),"ModbusProtocolConfig")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"properties"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Device properties"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#deviceproperty"}),"DeviceProperty")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"extension"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Integrate with deivce MQTT extension"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#deviceextension"}),"DeviceExtension")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))),Object(b.b)("h4",{id:"modbusdeviceparamters"},"ModbusDeviceParamters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"syncInterval"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Device properties sync interval, default to ",Object(b.b)("inlineCode",{parentName:"td"},"5s")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"timeout"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Device connection timeout, default to ",Object(b.b)("inlineCode",{parentName:"td"},"10s")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))),Object(b.b)("h4",{id:"modbusprotocolconfig"},"ModbusProtocolConfig"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"rtu"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Modbus RTU protocol config"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#modbusconfigrtu"}),"ModbusConfigRTU")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"tcp"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Modbus TCP protocol config"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#modbusconfigtcp"}),"ModbusConfigTCP")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))),Object(b.b)("h4",{id:"modbusconfigrtu"},"ModbusConfigRTU"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"serialPort"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Device path (e.g. /dev/ttyS0)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"slaveId"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Slave id of the device"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"baudRate"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Baud rate, a measurement of transmission speed, default to ",Object(b.b)("inlineCode",{parentName:"td"},"19200")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dataBits"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data bits (5, 6, 7 or 8), default to ",Object(b.b)("inlineCode",{parentName:"td"},"0")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"parity"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N - None, E - Even, O - Odd (default E) (The use of no parity requires 2 stop bits.)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"stopBits"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Stop bits: 1 or 2 (default 1)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))),Object(b.b)("h4",{id:"modbusconfigtcp"},"ModbusConfigTCP"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ip"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IP address of the device"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"port"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TCP port of the device"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"slaveId"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Slave id of the device"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")))),Object(b.b)("h4",{id:"deviceproperty"},"DeviceProperty"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Property name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"description"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Property description"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"readOnly"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Check if the device property is readonly, default to false"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dataType"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Property data type, options are ",Object(b.b)("inlineCode",{parentName:"td"},"int, string, float, boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"visitor"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Property visitor config"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#propertyvisitor"}),"PropertyVisitor")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"value"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set desired value of the property"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))),Object(b.b)("h4",{id:"propertyvisitor"},"PropertyVisitor"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"register"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CoilRegister, DiscreteInputRegister, HoldingRegister, or InputRegister"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"offset"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Offset indicates the starting register number to read/write data"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"quantity"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Limit number of registers to read/write"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"orderOfOperations"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The quantity of registers"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"*",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#modbusoperations"}),"ModbusOperations")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))),Object(b.b)("h4",{id:"modbusoperations"},"ModbusOperations"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scheme"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"operationType"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Arithmetic operation type(",Object(b.b)("inlineCode",{parentName:"td"},"Add, Subtract, Multiply, Divide"),")"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"operationValue"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Arithmetic operation value"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))),Object(b.b)("h4",{id:"deviceextension"},"DeviceExtension"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"reference the ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#modbus-devicelink-yaml"}),"example YAML")," of modbus device for MQTT integration."),Object(b.b)("li",{parentName:"ul"},"check ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"./mqtt-extension"}),"Integrate with MQTT Documentation")," for more details.")))}o.isMDXComponent=!0},186:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var O=r.a.createContext({}),o=function(e){var t=r.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p=function(e){var t=o(e.components);return r.a.createElement(O.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),p=o(a),j=n,m=p["".concat(l,".").concat(j)]||p[j]||d[j]||b;return a?r.a.createElement(m,c({ref:t},O,{components:a})):r.a.createElement(m,c({ref:t},O))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=j;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var O=2;O<b;O++)l[O]=a[O];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);