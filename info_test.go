package enlog

import (
	"fmt"
	"testing"
)

func TestInfo(t *testing.T) {
	var l Enlogger = New()
	var msg string
	var ltype string
	l.SetAfterLogEvent(func(logType string, message string) {
		ltype = logType
		msg = message
	})
	testMsg := "info1"
	l.Info(testMsg)
	if msg != testMsg {
		t.Error("Expected", msg, "got", testMsg)
	}
	if ltype != "info" {
		t.Error("Expected", "info", "got", ltype)
	}
}

func TestInfof(t *testing.T) {
	var l Enlogger = New()
	var msg string
	var ltype string
	l.SetAfterLogEvent(func(logType string, message string) {
		ltype = logType
		msg = message
	})
	testMsg := "info"
	l.Infof(testMsg)
	if msg != testMsg {
		t.Error("Expected", msg, "got", testMsg)
	}
	if ltype != "info" {
		t.Error("Expected", "info", "got", ltype)
	}
	argf1 := 15
	argf2 := "train"
	testMsg = "info %d info %s"
	testMsgf := fmt.Sprintf(testMsg, argf1, argf2)
	l.Infof(testMsg, argf1, argf2)
	if testMsgf != msg {
		t.Error("Expected", msg, "got", testMsgf)
	}
	if ltype != "info" {
		t.Error("Expected", "info", "got", ltype)
	}
}

func TestInfoFile(t *testing.T) {
	l := New()
	l.InfoLog.SetUseFile(true)
	l.Info("test")

	testFile(t, "info")
	testRemoveFiles(t, []string{"info"})
}
