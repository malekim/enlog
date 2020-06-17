package enlog

import (
	"fmt"
	"testing"
)

func TestDebug(t *testing.T) {
	var l Enlogger = New()
	var msg string
	var ltype string
	l.SetAfterLogEvent(func(logType string, message string) {
		ltype = logType
		msg = message
	})
	testMsg := "debug1"
	l.Debug(testMsg)
	if msg != testMsg {
		t.Error("Expected", msg, "got", testMsg)
	}
	if ltype != "debug" {
		t.Error("Expected", "debug", "got", ltype)
	}

	testFile(t, "debug")
	testRemoveFiles(t, []string{"info", "debug", "error", "trace"})
}

func TestDebugf(t *testing.T) {
	var l Enlogger = New()
	var msg string
	var ltype string
	l.SetAfterLogEvent(func(logType string, message string) {
		ltype = logType
		msg = message
	})
	testMsg := "debug"
	l.Debugf(testMsg)
	if msg != testMsg {
		t.Error("Expected", msg, "got", testMsg)
	}
	if ltype != "debug" {
		t.Error("Expected", "debug", "got", ltype)
	}
	argf1 := 15
	argf2 := "train"
	testMsg = "info %d info %s"
	testMsgf := fmt.Sprintf(testMsg, argf1, argf2)
	l.Debugf(testMsg, argf1, argf2)
	if testMsgf != msg {
		t.Error("Expected", msg, "got", testMsgf)
	}
	if ltype != "debug" {
		t.Error("Expected", "debug", "got", ltype)
	}

	testFile(t, "debug")
	testRemoveFiles(t, []string{"info", "debug", "error", "trace"})
}
