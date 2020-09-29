package common

import (
	"fmt"
	"github.com/QXQZX/go-exam/pkg/app"
	"github.com/QXQZX/go-exam/pkg/e"
	"github.com/QXQZX/go-exam/pkg/qrcode"
	"github.com/boombuler/barcode/qr"
	"github.com/gin-gonic/gin"
	"net/http"
)

const (
	QRCODE_URL = "https://blog.ihui.ink/"
)

func GenerateArticlePoster(c *gin.Context) {
	fmt.Println(c.Query("url"))

	appG := app.Gin{c}
	qrc := qrcode.NewQrCode(c.Query("url"), 500, 500, qr.M, qr.Auto)
	path := qrcode.GetQrCodeFullPath()
	_, _, err := qrc.Encode(path)
	if err != nil {
		appG.Response(http.StatusOK, e.ERROR, nil)
		return
	}

	appG.Response(http.StatusOK, e.SUCCESS, nil)
}