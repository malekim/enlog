# Enlog [![codecov](https://codecov.io/gh/malekim/enlog/branch/master/graph/badge.svg)](https://codecov.io/gh/malekim/enlog)

An enchanted logging library for GO. It supports colored output and creating .log files.

## Install

Simple go get it to your project:
```bash
go get github.com/malekim/enlog
```

## Log types

### Info

Info log shows messages in green color. In future version it will be customizable. The log is saved to info.log file.

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

Debug log shows messages in cyan color. In future version it will be customizable. The log is saved to debug.log file.

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

Error log shows messages in red color. In future version it will be customizable. The log is saved to error.log file.

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

Trace log shows messages in magenta color. In future version it will be customizable. The log is saved to trace.log file.

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

## Running tests

Ensure that you have working mongo database and pass to test MONGO_HOST and MONGO_PORT:
```bash
go test -gcflags=-l -coverprofile=coverage.txt -covermode=atomic ./... &&  go tool cover -html=coverage.txt
```

Note that flag -gcflags=-l is necessary for bou.ke/monkey library.