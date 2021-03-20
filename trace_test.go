package enlog

import (
	"fmt"
	"testing"
)

func TestTrace(t *testing.T) {
	var l Enlogger = New()
	var msg string
	var ltype string
	l.SetAfterLogEvent(func(logType string, message string) {
		ltype = logType
		msg = message
	})
	testMsg := "trace1"
	l.Trace(testMsg)
	if msg != testMsg {
		t.Error("Expected", msg, "got", testMsg)
	}
	if ltype != "trace" {
		t.Error("Expected", "trace", "got", ltype)
	}
}

func TestTracef(t *testing.T) {
	var l Enlogger = New()
	var msg string
	var ltype string
	l.SetAfterLogEvent(func(logType string, message string) {
		ltype = logType
		msg = message
	})
	testMsg := "trace"
	l.Tracef(testMsg)
	if msg != testMsg {
		t.Error("Expected", msg, "got", testMsg)
	}
	if ltype != "trace" {
		t.Error("Expected", "trace", "got", ltype)
	}
	argf1 := 15
	argf2 := "train"
	testMsg = "trace %d trace %s"
	testMsgf := fmt.Sprintf(testMsg, argf1, argf2)
	l.Tracef(testMsg, argf1, argf2)
	if testMsgf != msg {
		t.Error("Expected", msg, "got", testMsgf)
	}
	if ltype != "trace" {
		t.Error("Expected", "trace", "got", ltype)
	}
}

func TestTraceFile(t *testing.T) {
	l := New()
	l.TraceLog.SetUseFile(true)
	l.Trace("test")

	testFile(t, "trace")
	testRemoveFiles(t, []string{"trace"})
}
