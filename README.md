# Enlog 
[![codecov](https://codecov.io/gh/malekim/enlog/branch/master/graph/badge.svg)](https://codecov.io/gh/malekim/enlog)

An enchanted logging library for GO. It supports colored output and writing to .log files.

## Install

Simple go get it into your project:
```bash
go get github.com/malekim/enlog
```

## Log types

### Info

Info log shows messages in green color by default.
Prefix is set to "INFO" by default.
UseFile is set to false by default.
FilePath is set to "info.log" by default.

#### Usage

You can use methods: Info() and Infof()
```go
l := enlog.New()
l.Info("Test info")
msg := "Test message"
l.Infof("Test message: %s", message)
```

#### Example of info log

```bash
INFO: 2020/06/17 09:15:55 info.go:16: info
```

### Debug

Debug log shows messages in cyan color by default.
Prefix is set to "DEBUG" by default.
UseFile is set to false by default.
FilePath is set to "debug.log" by default.

#### Usage

You can use methods: Debug() and Debugf()
```go
l := enlog.New()
l.Debug("Test debug")
msg := "Test message"
l.Debugf("Test message: %s", message)
```

#### Example of debug log

```bash
DEBUG: 2020/06/17 09:15:55 debug.go:17: debug
```

### Error

Error log shows messages in red color by default.
Prefix is set to "ERROR" by default.
UseFile is set to false by default.
FilePath is set to "error.log" by default.

#### Usage

```go
l := enlog.New()
l.Error("Test error")
msg := "Test message"
l.Errorf("Test message: %s", message)
```

#### Example of error log

```bash
ERROR: 2020/06/17 09:15:55 error.go:17: error
```

### Trace

Trace log shows messages in magenta color by default.
Prefix is set to "TRACE" by default.
UseFile is set to false by default.
FilePath is set to "trace.log" by default.

#### Usage

```go
l := enlog.New()
l.Trace("Test trace")
msg := "Test message"
l.Tracef("Test message: %s", message)
```

#### Example of trace log

```bash
TRACE: 2020/06/17 09:15:55 trace.go:17: trace
```

## Event after log

The event is called after every log. You can set it up like this:

```go
l := enlog.New()
l.SetAfterLogEvent(func(logType string, message string) {
  fmt.Printf("Type: %s, message %s", logType, message)
})
```

## Customization

Fields of enlog which contains settings of particular log types are:
- InfoLog for log type info
- DebugLog for log type debug
- ErrorLog for log type error
- TraceLog for log type trace

```go
l := enlog.New()
infoLog := l.InfoLog
debugLog := l.DebugLog
errorLog := l.ErrorLog
traceLog := l.TraceLog
```

Examples use InfoLog, but each of those log types are customizable in the same way.

### Prefix

```go
l := enlog.New()
l.InfoLog.SetPrefix("NEW")
l.InfoLog.GetPrefx() // returns string NEW
l.Info("Test message")
```

Example:
```bash
NEW: 2020/06/17 09:15:55 info.go:16: Test message
```

### File logs

By default logs are not saved to files. To change it you need to switch "useFile" parameter. 
If error occurs during creating or opening the file, "useFile" automatically switches back to false.

```go
l := enlog.New()
l.InfoLog.GetUseFile() // returns false
l.InfoLog.SetUseFile(true)
l.InfoLog.GetUseFile() // returns true
l.Info("Test message") // log shown in terminal and saved to info.log
l.InfoLog.GetFilePath() // returns "info.log"
l.InfoLog.SetFilePath("new.log")
l.InfoLog.GetFilePath() // returns "new.log"
l.Info("Test message") // log shown in terminal and saved to new.log
```

#### Single file log

Sometimes it is necessary to save all log messages to single file.
It is possible to set one file log for all log types.

```go
var l *Enlog = New()
newFilePath := "single.log"
l.InfoLog.SetFilePath(newFilePath)
l.DebugLog.SetFilePath(newFilePath)
l.TraceLog.SetFilePath(newFilePath)
l.ErrorLog.SetFilePath(newFilePath)
l.InfoLog.SetUseFile(true)
l.DebugLog.SetUseFile(true)
l.TraceLog.SetUseFile(true)
l.ErrorLog.SetUseFile(true)

l.Info("Info log is saved to single.log")
l.Debug("Debug log is saved to single.log")
l.Error("Error log is saved to single.log")
l.Trace("Trace log is saved to single.log")
```

Setting filePath before useFile prevents enlog from creating default .log files.

### Colors

To change default color you need to modify "color" parameter (uint8).

```go
l := enlog.New()
l.InfoLog.GetColor() // returns 32
l.InfoLog.SetColor(enlog.ColorRed)
l.InfoLog.GetColor() // returns 31
```

## Road map

Road map for future releases:
- custom date and time format of logs
- chunk log files

## Running tests

Ensure that you have working mongo database and pass to test MONGO_HOST and MONGO_PORT:
```bash
go test -gcflags=-l -coverprofile=coverage.txt -covermode=atomic ./... &&  go tool cover -html=coverage.txt
```

Note that flag -gcflags=-l is necessary for bou.ke/monkey library.