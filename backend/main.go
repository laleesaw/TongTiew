package main

import (
	"TongTiew/db"
	"TongTiew/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// เชื่อมต่อฐานข้อมูล
	db.ConnectDB()

	// สร้าง router
	r := gin.Default()

	// ตั้งค่า CORS สำหรับ frontend (localhost:3000)
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	// เรียก routes ทั้งหมด
	routes.UserRoutes(r)

	// รัน server
	r.Run(":8080")
}
