package enlog

import (
	"testing"
)

func TestGetPrefix(t *testing.T) {
	var l *Enlog = New()

	prefix := l.InfoLog.GetPrefix()

	if prefix != "INFO" {
		t.Error("Expected", "INFO", "got", prefix)
	}
}

func TestSetPrefix(t *testing.T) {
	var l *Enlog = New()

	newPrefix := "TEST"
	l.InfoLog.SetPrefix(newPrefix)
	prefix := l.InfoLog.GetPrefix()

	if prefix != newPrefix {
		t.Error("Expected", newPrefix, "got", prefix)
	}
}

func TestGetUseFile(t *testing.T) {
	var l *Enlog = New()

	useFile := l.InfoLog.GetUseFile()

	if useFile != false {
		t.Error("Expected", false, "got", useFile)
	}
}

func TestSetUseFile(t *testing.T) {
	var l *Enlog = New()

	newUseFile := false
	l.InfoLog.SetUseFile(newUseFile)
	useFile := l.InfoLog.GetUseFile()

	if useFile != newUseFile {
		t.Error("Expected", newUseFile, "got", useFile)
	}
}

func TestGetFilePath(t *testing.T) {
	var l *Enlog = New()

	filePath := l.InfoLog.GetFilePath()

	if filePath != "info.log" {
		t.Error("Expected", "info.log", "got", filePath)
	}
}

func TestSetFilePath(t *testing.T) {
	var l *Enlog = New()

	newFilePath := "test.log"
	l.InfoLog.SetFilePath(newFilePath)
	filePath := l.InfoLog.GetFilePath()

	if filePath != newFilePath {
		t.Error("Expected", newFilePath, "got", filePath)
	}
}

func TestGetColor(t *testing.T) {
	var l *Enlog = New()

	color := l.InfoLog.GetColor()

	if color != ColorGreen {
		t.Error("Expected", ColorGreen, "got", color)
	}
}

func TestSetColor(t *testing.T) {
	var l *Enlog = New()

	newColor := ColorWhite
	l.InfoLog.SetColor(newColor)
	color := l.InfoLog.GetColor()

	if color != newColor {
		t.Error("Expected", newColor, "got", color)
	}
}
