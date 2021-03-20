package enlog

import "fmt"

// Info is a method that logs messages
// to InfoLog. By default messages are shown
// in green color.
func (l *Enlog) Info(log string) {
	// Output helps to save information about line and source file
	fmt.Printf("\033[1;%dm", l.InfoLog.color)
	l.InfoLog.handler.Output(2, log)
	fmt.Print("\033[0m")
	l.AfterLog("info", log)
}

// Infof is a method that logs messages
// to InfoLog. By default messages are shown
// in green color.
func (l *Enlog) Infof(log string, args ...interface{}) {
	l.Info(fmt.Sprintf(log, args...))
}
