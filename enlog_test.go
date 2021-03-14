package enlog

import (
	"errors"
	"fmt"
	"os"
	"reflect"
	"testing"

	"bou.ke/monkey"
)

func TestNew(t *testing.T) {
	var l Enlogger
	l = New()

	if l == nil {
		t.Fatal("Error opening file")
	}

	lType := reflect.TypeOf(l)

	if fmt.Sprintf("%T", l) != "*enlog.Enlog" {
		t.Fatal("Expected", "*enlog.Enlog", "Got", lType)
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
	if en.InfoLog != nil {
		t.Error("InfoLog should be nil here")
	}
	if en.DebugLog != nil {
		t.Error("DebugLog should be nil here")
	}
	if en.ErrorLog != nil {
		t.Error("ErrorLog should be nil here")
	}
	if en.TraceLog != nil {
		t.Error("TraceLog should be nil here")
	}
}

func testFile(t *testing.T, category string) {
	f, err := os.Stat(fmt.Sprintf("%s.log", category))
	if err != nil {
		t.Fatalf("%s.log file does not exists", category)
	}
	if 0 >= f.Size() {
		t.Fatalf("%s.log file is empty", category)
	}
}

func testRemoveFiles(t *testing.T, categories []string) {
	for i := len(logTypes) - 1; i >= 0; i-- {
		err := os.Remove(fmt.Sprintf("%s.log", categories[i]))
		if err != nil {
			t.Fatalf("%s.log could not be deleted", categories[i])
		}
	}
}
