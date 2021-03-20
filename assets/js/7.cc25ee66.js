(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{362:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"enlog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enlog"}},[t._v("#")]),t._v(" Enlog")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://codecov.io/gh/malekim/enlog",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://codecov.io/gh/malekim/enlog/branch/master/graph/badge.svg",alt:"codecov"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("An enchanted logging library for GO. It supports colored output and writing to .log files.")]),t._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("p",[t._v("Simple go get it into your project:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("go get github.com/malekim/enlog\n")])])]),a("h2",{attrs:{id:"log-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-types"}},[t._v("#")]),t._v(" Log types")]),t._v(" "),a("h3",{attrs:{id:"info"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#info"}},[t._v("#")]),t._v(" Info")]),t._v(" "),a("p",[t._v('Info log shows messages in green color by default.\nPrefix is set to "INFO" by default.\nUseFile is set to false by default.\nFilePath is set to "info.log" by default.')]),t._v(" "),a("h4",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[t._v("You can use methods: Info() and Infof()")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" enlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test info"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmsg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test message"')]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Infof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test message: %s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"example-of-info-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-of-info-log"}},[t._v("#")]),t._v(" Example of info log")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("INFO: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("/06/17 09:15:55 info.go:16: info\n")])])]),a("h3",{attrs:{id:"debug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debug"}},[t._v("#")]),t._v(" Debug")]),t._v(" "),a("p",[t._v('Debug log shows messages in cyan color by default.\nPrefix is set to "DEBUG" by default.\nUseFile is set to false by default.\nFilePath is set to "debug.log" by default.')]),t._v(" "),a("h4",{attrs:{id:"usage-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-2"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[t._v("You can use methods: Debug() and Debugf()")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" enlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Debug")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test debug"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmsg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test message"')]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Debugf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test message: %s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"example-of-debug-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-of-debug-log"}},[t._v("#")]),t._v(" Example of debug log")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("DEBUG: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("/06/17 09:15:55 debug.go:17: debug\n")])])]),a("h3",{attrs:{id:"error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error"}},[t._v("#")]),t._v(" Error")]),t._v(" "),a("p",[t._v('Error log shows messages in red color by default.\nPrefix is set to "ERROR" by default.\nUseFile is set to false by default.\nFilePath is set to "error.log" by default.')]),t._v(" "),a("h4",{attrs:{id:"usage-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-3"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" enlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmsg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test message"')]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Errorf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test message: %s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"example-of-error-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-of-error-log"}},[t._v("#")]),t._v(" Example of error log")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("ERROR: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("/06/17 09:15:55 error.go:17: error\n")])])]),a("h3",{attrs:{id:"trace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trace"}},[t._v("#")]),t._v(" Trace")]),t._v(" "),a("p",[t._v('Trace log shows messages in magenta color by default.\nPrefix is set to "TRACE" by default.\nUseFile is set to false by default.\nFilePath is set to "trace.log" by default.')]),t._v(" "),a("h4",{attrs:{id:"usage-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-4"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" enlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Trace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test trace"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmsg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test message"')]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Tracef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test message: %s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"example-of-trace-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-of-trace-log"}},[t._v("#")]),t._v(" Example of trace log")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("TRACE: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("/06/17 09:15:55 trace.go:17: trace\n")])])]),a("h2",{attrs:{id:"event-after-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-after-log"}},[t._v("#")]),t._v(" Event after log")]),t._v(" "),a("p",[t._v("The event is called after every log. You can set it up like this:")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" enlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetAfterLogEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("logType "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Type: %s, message %s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" logType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"customization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customization"}},[t._v("#")]),t._v(" Customization")]),t._v(" "),a("p",[t._v("Fields of enlog which contains settings of particular log types are:")]),t._v(" "),a("ul",[a("li",[t._v("InfoLog for log type info")]),t._v(" "),a("li",[t._v("DebugLog for log type debug")]),t._v(" "),a("li",[t._v("ErrorLog for log type error")]),t._v(" "),a("li",[t._v("TraceLog for log type trace")])]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" enlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ninfoLog "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InfoLog\ndebugLog "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DebugLog\nerrorLog "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ErrorLog\ntraceLog "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TraceLog\n")])])]),a("p",[t._v("Examples use InfoLog, but each of those log types are customizable in the same way.")]),t._v(" "),a("h3",{attrs:{id:"prefix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prefix"}},[t._v("#")]),t._v(" Prefix")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" enlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InfoLog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetPrefix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NEW"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InfoLog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetPrefx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// returns string NEW")]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Example:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("NEW: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("/06/17 09:15:55 info.go:16: Test message\n")])])]),a("h3",{attrs:{id:"file-logs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-logs"}},[t._v("#")]),t._v(" File logs")]),t._v(" "),a("p",[t._v('By default logs are not saved to files. To change it you need to switch "useFile" parameter.\nIf error occurs during creating or opening the file, "useFile" automatically switches back to false.')]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" enlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InfoLog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetUseFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// returns false")]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InfoLog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetUseFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InfoLog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetUseFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// returns true")]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// log shown in terminal and saved to info.log")]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InfoLog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetFilePath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// returns "info.log"')]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InfoLog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetFilePath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"new.log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InfoLog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetFilePath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// returns "new.log"')]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// log shown in terminal and saved to new.log")]),t._v("\n")])])]),a("h4",{attrs:{id:"single-file-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#single-file-log"}},[t._v("#")]),t._v(" Single file log")]),t._v(" "),a("p",[t._v("Sometimes it is necessary to save all log messages to single file.\nIt is possible to set one file log for all log types.")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Enlog "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnewFilePath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"single.log"')]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InfoLog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetFilePath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newFilePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DebugLog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetFilePath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newFilePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TraceLog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetFilePath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newFilePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ErrorLog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetFilePath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newFilePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InfoLog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetUseFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DebugLog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetUseFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TraceLog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetUseFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ErrorLog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetUseFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Info log is saved to single.log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Debug")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Debug log is saved to single.log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Error log is saved to single.log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Trace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Trace log is saved to single.log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Setting filePath before useFile prevents enlog from creating default .log files.")]),t._v(" "),a("h3",{attrs:{id:"colors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#colors"}},[t._v("#")]),t._v(" Colors")]),t._v(" "),a("p",[t._v('To change default color you need to modify "color" parameter (uint8).')]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" enlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InfoLog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// returns 32")]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InfoLog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("enlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ColorRed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InfoLog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// returns 31")]),t._v("\n")])])]),a("h2",{attrs:{id:"road-map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#road-map"}},[t._v("#")]),t._v(" Road map")]),t._v(" "),a("p",[t._v("Road map for future releases:")]),t._v(" "),a("ul",[a("li",[t._v("custom date and time format of logs")]),t._v(" "),a("li",[t._v("chunk log files")])]),t._v(" "),a("h2",{attrs:{id:"running-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-tests"}},[t._v("#")]),t._v(" Running tests")]),t._v(" "),a("p",[t._v("Ensure that you have working mongo database and pass to test MONGO_HOST and MONGO_PORT:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("go "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" -gcflags"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("-l -coverprofile"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("coverage.txt -covermode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("atomic ./"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("  go tool cover -html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("coverage.txt\n")])])]),a("p",[t._v("Note that flag -gcflags=-l is necessary for bou.ke/monkey library.")])])}),[],!1,null,null,null);s.default=e.exports}}]);