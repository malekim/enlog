package enlog

import (
	"fmt"
	"testing"
)

func TestError(t *testing.T) {
	var l Enlogger = New()
	var msg string
	var ltype string
	l.SetAfterLogEvent(func(logType string, message string) {
		ltype = logType
		msg = message
	})
	testMsg := "error1"
	l.Error(testMsg)
	if msg != testMsg {
		t.Error("Expected", msg, "got", testMsg)
	}
	if ltype != "error" {
		t.Error("Expected", "error", "got", ltype)
	}
}

func TestErrorf(t *testing.T) {
	var l Enlogger = New()
	var msg string
	var ltype string
	l.SetAfterLogEvent(func(logType string, message string) {
		ltype = logType
		msg = message
	})
	testMsg := "error"
	l.Errorf(testMsg)
	if msg != testMsg {
		t.Error("Expected", msg, "got", testMsg)
	}
	if ltype != "error" {
		t.Error("Expected", "error", "got", ltype)
	}
	argf1 := 15
	argf2 := "train"
	testMsg = "error %d error %s"
	testMsgf := fmt.Sprintf(testMsg, argf1, argf2)
	l.Errorf(testMsg, argf1, argf2)
	if testMsgf != msg {
		t.Error("Expected", msg, "got", testMsgf)
	}
	if ltype != "error" {
		t.Error("Expected", "error", "got", ltype)
	}
}

func TestErrorFile(t *testing.T) {
	l := New()
	l.ErrorLog.SetUseFile(true)
	l.Error("test")

	testFile(t, "error")
	testRemoveFiles(t, []string{"error"})
}
