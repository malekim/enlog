package enlog

import (
	"fmt"
	"io"
	"log"
	"os"
)

var ColorRed uint8 = 31
var ColorGreen uint8 = 32
var ColorYellow uint8 = 33
var ColorBlue uint8 = 34
var ColorMagenta uint8 = 35
var ColorCyan uint8 = 36
var ColorWhite uint8 = 37

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

type AfterLogEvent func(logType string, message string)

// Enlog struct
type Enlog struct {
	InfoLog    *log.Logger
	InfoColor  uint8
	DebugLog   *log.Logger
	DebugColor uint8
	ErrorLog   *log.Logger
	ErrorColor uint8
	TraceLog   *log.Logger
	TraceColor uint8
	AfterLog   AfterLogEvent
}

type logType struct {
	file         string
	prefix       string
	defaultColor uint8
}

var logTypes map[string]logType = map[string]logType{
	"info": {
		file:         "info.log",
		prefix:       "INFO",
		defaultColor: ColorGreen,
	},
	"debug": {
		file:         "debug.log",
		prefix:       "DEBUG",
		defaultColor: ColorCyan,
	},
	"error": {
		file:         "error.log",
		prefix:       "ERROR",
		defaultColor: ColorRed,
	},
	"trace": {
		file:         "trace.log",
		prefix:       "TRACE",
		defaultColor: ColorMagenta,
	},
}

func NewLog(ltype string) *log.Logger {
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
	logger.InfoLog = NewLog("info")
	logger.DebugLog = NewLog("debug")
	logger.ErrorLog = NewLog("error")
	logger.TraceLog = NewLog("trace")

	// default colors
	// green
	logger.InfoColor = logTypes["info"].defaultColor
	// cyan
	logger.DebugColor = logTypes["debug"].defaultColor
	// red
	logger.ErrorColor = logTypes["error"].defaultColor
	// magenta
	logger.TraceColor = logTypes["trace"].defaultColor

	// default event
	logger.SetAfterLogEvent(func(logType string, message string) {
		return
	})

	return logger
}

// SetAfterLog event
func (l *Enlog) SetAfterLogEvent(afterLog AfterLogEvent) {
	l.AfterLog = afterLog
}
