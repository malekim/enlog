package enlog

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
	InfoLog  *logger
	DebugLog *logger
	ErrorLog *logger
	TraceLog *logger
	AfterLog AfterLogEvent
}

func newLog(prefix string, useFile bool, filePath string, color uint8) *logger {
	l := &logger{
		handler:  nil,
		prefix:   prefix,
		useFile:  useFile,
		filePath: filePath,
		color:    color,
	}

	l.handler = l.NewHandler()
	return l
}

// New enlog
func New() *Enlog {
	l := &Enlog{}
	l.InfoLog = newLog("INFO", false, "info.log", ColorGreen)
	l.DebugLog = newLog("DEBUG", false, "debug.log", ColorCyan)
	l.ErrorLog = newLog("ERROR", false, "error.log", ColorRed)
	l.TraceLog = newLog("TRACE", false, "trace.log", ColorMagenta)

	// default event
	l.SetAfterLogEvent(func(logType string, message string) {
		return
	})

	return l
}

// SetAfterLogEvent is a method to set AfterLogEvent
func (l *Enlog) SetAfterLogEvent(afterLog AfterLogEvent) {
	l.AfterLog = afterLog
}
