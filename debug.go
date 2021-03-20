package enlog

import "fmt"

// Debug log
func (l *Enlog) Debug(log string) {
	// turn on color
	fmt.Printf("\033[1;%dm", l.DebugLog.color)
	l.DebugLog.handler.Output(2, log)
	// turn off color
	fmt.Print("\033[0m")
	l.AfterLog("debug", log)
}

// Debugf log
func (l *Enlog) Debugf(log string, args ...interface{}) {
	l.Debug(fmt.Sprintf(log, args...))
}
