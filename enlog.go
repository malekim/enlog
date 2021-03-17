package enlog

import (
	"fmt"
	"io"
	"log"
	"os"
)

// Colors used to color the terminal output
const (
	ColorRed     uint8 = 31
	ColorGreen   uint8 = 32
	ColorYellow  uint8 = 33
	ColorBlue    uint8 = 34
	ColorMagenta uint8 = 35
	ColorCyan    uint8 = 36
	ColorWhite   uint8 = 37
)

// Types of logs
const (
	TypeInfo  string = "info"
	TypeDebug string = "debug"
	TypeError string = "error"
	TypeTrace string = "trace"
)

// An Enlogger containns all methods
// that may be called to log something
type Enlogger interface {
	Info(string)
	Infof(log string, args ...interface{})
	Debug(string)
	Debugf(log string, args ...interface{})
	Error(string)
	Errorf(log string, args ...interface{})
	Trace(string)
	Tracef(log string, args ...interface{})
	SetAfterLogEvent(AfterLogEvent)
}

// AfterLogEvent is a method called
// after every log event
type AfterLogEvent func(logType string, message string)

// Enlog struct
type Enlog struct {
	InfoLog     *log.Logger
	InfoLogType logType
	InfoColor   uint8
	DebugLog    *log.Logger
	DebugColor  uint8
	ErrorLog    *log.Logger
	ErrorColor  uint8
	TraceLog    *log.Logger
	TraceColor  uint8
	AfterLog    AfterLogEvent
}

type logType struct {
	file         string
	prefix       string
	defaultColor uint8
}

var (
	logTypeInfo = logType{
		file:         "info.log",
		prefix:       "INFO",
		defaultColor: ColorGreen,
	}
	logTypeDebug = logType{
		file:         "debug.log",
		prefix:       "DEBUG",
		defaultColor: ColorCyan,
	}
	logTypeError = logType{
		file:         "error.log",
		prefix:       "ERROR",
		defaultColor: ColorRed,
	}
	logTypeTrace = logType{
		file:         "trace.log",
		prefix:       "TRACE",
		defaultColor: ColorMagenta,
	}
)

var logTypes map[string]logType = map[string]logType{
	TypeInfo:  logTypeInfo,
	TypeDebug: logTypeDebug,
	TypeError: logTypeError,
	TypeTrace: logTypeTrace,
}

func newLog(ltype string) *log.Logger {
	lt := logTypes[ltype]
	file, err := os.OpenFile(lt.file, os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
	if err != nil {
		fmt.Printf("Error opening file: %v", err)
		return nil
	}
	// defer infoFile.Close()
	mw := io.MultiWriter(os.Stdout, file)
	return log.New(mw, fmt.Sprintf("%s: ", lt.prefix), log.Ldate|log.LstdFlags|log.Lshortfile)
}

// New enlog
func New() *Enlog {
	logger := &Enlog{}
	logger.InfoLog = newLog(TypeInfo)
	logger.DebugLog = newLog(TypeDebug)
	logger.ErrorLog = newLog(TypeError)
	logger.TraceLog = newLog(TypeTrace)

	// default colors
	// green
	logger.InfoColor = logTypes[TypeInfo].defaultColor
	// cyan
	logger.DebugColor = logTypes[TypeDebug].defaultColor
	// red
	logger.ErrorColor = logTypes[TypeError].defaultColor
	// magenta
	logger.TraceColor = logTypes[TypeTrace].defaultColor

	// default event
	logger.SetAfterLogEvent(func(logType string, message string) {
		return
	})

	return logger
}

// SetAfterLogEvent is a method to set AfterLogEvent
func (l *Enlog) SetAfterLogEvent(afterLog AfterLogEvent) {
	l.AfterLog = afterLog
}
