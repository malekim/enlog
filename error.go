package enlog

import "fmt"

// Error is a method that logs messages
// to ErrorLog. By default messages are shown
// in red color.
func (l *Enlog) Error(log string) {
	// turn on color
	fmt.Printf("\033[1;%dm", l.ErrorLog.color)
	l.ErrorLog.handler.Output(2, log)
	// turn off color
	fmt.Print("\033[0m")
	l.AfterLog("error", log)
}

// Errorf is a method that logs messages
// to ErrorLog. By default messages are shown
// in red color.
func (l *Enlog) Errorf(log string, args ...interface{}) {
	l.Error(fmt.Sprintf(log, args...))
}
