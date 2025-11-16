package models

type Attraction struct {
	Id       int    `gorm:"primaryKey;column:id" json:"id"`
	Name     string `gorm:"column:name" json:"name"`
	Location string `gorm:"column:location" json:"location"`
	Detail   string `gorm:"column:detail" json:"detail"`
	Rating   string `gorm:"column:rating" json:"rating"`
	ImgPath  string `gorm:"column:img_path" json:"img_path"`
}

func (Attraction) TableName() string {
	return "attraction"
}
