package models

type Hotel struct {
	Id      int    `gorm:"primaryKey;column:id" json:"id"`
	Name    string `gorm:"column:name" json:"name"`
	Rating  string `gorm:"column:rating" json:"rating"`
	ImgPath string `gorm:"column:img_path" json:"img_path"`
}

func (Hotel) TableName() string {
	return "hotel"
}
