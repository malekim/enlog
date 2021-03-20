package enlog

import "fmt"

// Trace is a method that logs messages
// to TraceLog. By default messages are shown
// in magenta color.
func (l *Enlog) Trace(log string) {
	// turn on color
	fmt.Printf("\033[1;%dm", l.TraceLog.color)
	l.TraceLog.handler.Output(2, log)
	// turn off color
	fmt.Print("\033[0m")
	l.AfterLog("trace", log)
}

// Tracef is a method that logs messages
// to TraceLog. By default messages are shown
// in magenta color.
func (l *Enlog) Tracef(log string, args ...interface{}) {
	l.Trace(fmt.Sprintf(log, args...))
}
