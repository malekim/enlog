package enlog

import "fmt"

// Trace log
func (l *Enlog) Trace(log string) {
	// turn on color
	fmt.Printf("\033[1;%dm", l.TraceColor)
	l.TraceLog.Output(2, log)
	// turn off color
	fmt.Print("\033[0m")
	l.AfterLog("trace", log)
}

// Tracef log
func (l *Enlog) Tracef(log string, args ...interface{}) {
	l.Trace(fmt.Sprintf(log, args...))
}
