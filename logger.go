package enlog

import (
	"fmt"
	"io"
	"log"
	"os"
)

type logger struct {
	handler  *log.Logger
	prefix   string
	useFile  bool
	filePath string
	color    uint8
}

// NewHandler returns *log.Logger as a log handler
func (lg *logger) NewHandler() *log.Logger {
	mws := []io.Writer{os.Stdout}
	if lg.useFile {
		file, err := os.OpenFile(lg.filePath, os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
		if err != nil {
			fmt.Printf("Error opening file: %v", err)
			lg.useFile = false
		} else {
			mws = append(mws, file)
		}
	}

	// defer infoFile.Close()
	out := io.MultiWriter(mws...)
	return log.New(out, fmt.Sprintf("%s: ", lg.prefix), log.Ldate|log.LstdFlags|log.Lshortfile)
}

// GetPrefix returns prefix of specified logger type
func (lg *logger) GetPrefix() string {
	return lg.prefix
}

// SetPrefix sets prefix of specified logger type
func (lg *logger) SetPrefix(prefix string) {
	lg.prefix = prefix
	lg.handler = lg.NewHandler()
}

// GetUseFile returns information
// if file is used to save log
func (lg *logger) GetUseFile() bool {
	return lg.useFile
}

// SetUseFile sets information
// if file is used to save log
func (lg *logger) SetUseFile(useFile bool) {
	lg.useFile = useFile
	lg.handler = lg.NewHandler()
}

// GetFilePath returns filepath of specified logger type
func (lg *logger) GetFilePath() string {
	return lg.filePath
}

// SetFilePath sets filepath of specified logger type
func (lg *logger) SetFilePath(filePath string) {
	lg.filePath = filePath
	lg.handler = lg.NewHandler()
}

// GetColor returns color of specified logger type
func (lg *logger) GetColor() uint8 {
	return lg.color
}

// SetColor sets color of specified logger type
func (lg *logger) SetColor(color uint8) {
	lg.color = color
	lg.handler = lg.NewHandler()
}
