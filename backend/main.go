package main

import (
	"TongTiew/controllers"
	"TongTiew/db"

	"github.com/gin-gonic/gin"
)

func main() {
	db.ConnectDB()

	r := gin.Default()

	// Route สำหรับ signup
	r.POST("/signup", controllers.SignUpHandler)

	r.Run(":8080")
}
