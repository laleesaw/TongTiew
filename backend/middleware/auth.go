package middleware

import (
	"strings"

	"TongTiew/utils"

	"github.com/gin-gonic/gin"
)

func AuthMiddleware() gin.HandlerFunc { //check token ว่า ถูกต้องมั้ย
	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization") //รับ header มาอยู่ในตัวแปรชื่อ authHeader
		if authHeader == "" {                      //ถ้า authHeader ว่าง แสดงว่า Missing token
			c.JSON(401, gin.H{"error": "Missing token"})
			c.Abort()
			return
		}

		//ปกติ token จะส่งมาเป็น "Bearer ldsfjlsfjlsdfjkl...""
		tokenString := strings.TrimPrefix(authHeader, "Bearer ") //ใช้ TrimPrefix เพื่อลบ Bearer ออก
		token, err := utils.ValidateToken(tokenString)           //ถ้ามี err คือ หมดเวลาแล้ว
		if err != nil || !token.Valid {
			c.JSON(401, gin.H{"error": "Invalid or expired token"})
			c.Abort()
			return
		}

		c.Next()
	}
}
