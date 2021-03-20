package enlog

import (
	"bufio"
	"errors"
	"fmt"
	"os"
	"reflect"
	"strings"
	"testing"

	"bou.ke/monkey"
)

func TestNew(t *testing.T) {
	var l Enlogger = New()

	lType := reflect.TypeOf(l)

	if fmt.Sprintf("%T", l) != "*enlog.Enlog" {
		t.Fatal("Expected", "*enlog.Enlog", "Got", lType)
	}
}

func TestFiles(t *testing.T) {
	l := New()

	l.InfoLog.SetUseFile(true)
	l.DebugLog.SetUseFile(true)
	l.TraceLog.SetUseFile(true)
	l.ErrorLog.SetUseFile(true)

	l.Info("info")
	l.Debug("debug")
	l.Trace("trace")
	l.Error("error")

	if l == nil {
		t.Fatal("Error opening file")
	}

	testRemoveFiles(t, []string{"info", "debug", "error", "trace"})
}

func TestEmptyAfterLogEvent(t *testing.T) {
	l := New()

	if l.AfterLog == nil {
		t.Fatal("AfterLog is nil")
	}
	l.Info("AfterLog works as expected")
}

func TestNewError(t *testing.T) {
	// force an error
	// var guard *monkey.PatchGuard
	// note that during test there must be flag -gcflags=-l
	patch := monkey.Patch(os.OpenFile, func(name string, flag int, perm os.FileMode) (*os.File, error) {
		return nil, errors.New("Forced error")
	})
	defer patch.Unpatch()
	en := New()

	en.InfoLog.SetUseFile(true)
	en.DebugLog.SetUseFile(true)
	en.TraceLog.SetUseFile(true)
	en.ErrorLog.SetUseFile(true)

	if en.InfoLog.useFile != false {
		t.Error("InfoLog.useFile should be false here")
	}
	if en.DebugLog.useFile != false {
		t.Error("DebugLog.useFile should be false here")
	}
	if en.ErrorLog.useFile != false {
		t.Error("ErrorLog.useFile should be false here")
	}
	if en.TraceLog.useFile != false {
		t.Error("TraceLog.useFile should be false here")
	}
	// forced error should reset
	// useFile later on to false
	en.InfoLog.SetUseFile(true)
	if en.InfoLog.useFile != false {
		t.Error("InfoLog.useFile should be false here")
	}
}

// TestOneFileLog tests if all
// log types can write to single file
func TestOneFileLog(t *testing.T) {
	var l *Enlog = New()

	newFilePath := "test.log"
	l.InfoLog.SetFilePath(newFilePath)
	l.DebugLog.SetFilePath(newFilePath)
	l.TraceLog.SetFilePath(newFilePath)
	l.ErrorLog.SetFilePath(newFilePath)
	l.InfoLog.SetUseFile(true)
	l.DebugLog.SetUseFile(true)
	l.TraceLog.SetUseFile(true)
	l.ErrorLog.SetUseFile(true)

	l.Info("info")
	l.Trace("trace")
	l.Error("error")
	l.Trace("trace2")
	l.Info("info2")
	l.Debug("debug")
	l.Trace("trace2")

	file, err := os.Open(newFilePath)
	if err != nil {
		t.Errorf("%s file does not exist", newFilePath)
	}

	var lines []string
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		lines = append(lines, scanner.Text())
	}

	if len(lines) != 7 {
		t.Error("Expected", 7, "got", len(lines))
	}

	// expected lines in log order
	var expected []string = []string{
		0: "INFO",
		1: "TRACE",
		2: "ERROR",
		3: "TRACE",
		4: "INFO",
		5: "DEBUG",
		6: "TRACE",
	}

	for key, substring := range expected {
		if !strings.Contains(lines[key], substring) {
			t.Errorf("Expected line `%s` to contain substring %s", lines[key], substring)
		}
	}

	file.Close()

	testRemoveFiles(t, []string{"test"})
}

func testFile(t *testing.T, path string) {
	f, err := os.Stat(fmt.Sprintf("%s.log", path))
	if err != nil {
		t.Fatalf("%s.log file does not exists", path)
	}
	if 0 >= f.Size() {
		t.Fatalf("%s.log file is empty", path)
	}
}

func testRemoveFiles(t *testing.T, files []string) {
	for i := len(files) - 1; i >= 0; i-- {
		err := os.Remove(fmt.Sprintf("%s.log", files[i]))
		if err != nil {
			t.Fatalf("%s.log could not be deleted", files[i])
		}
	}
}
