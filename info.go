package enlog

import "fmt"

// Info log
func (l *Enlog) Info(log string) {
	// Output helps to save information about line and source file
	fmt.Printf("\033[1;%dm", l.InfoColor)
	l.InfoLog.Output(2, log)
	fmt.Print("\033[0m")
	l.AfterLog("info", log)
}

// Infof log
func (l *Enlog) Infof(log string, args ...interface{}) {
	l.Info(fmt.Sprintf(log, args...))
}
