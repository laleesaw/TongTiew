package main

import (
	"TongTiew/db"
	"TongTiew/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	db.ConnectDB()

	r := gin.Default()

	routes.UserRoutes(r)

	r.Run(":8080")
}
