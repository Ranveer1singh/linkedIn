import multer from "multer"
import path from "path"
import fs from "fs/promises"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = "company-image"
    const uploadDir = path.join(__dirname, "../../../uplaods", uploadPath)
    cb(null, uploadDir)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + file.originalname)
  }
})

export async function deleteImage(imageUrl : string){
  const uploadPath = "company-image"
    const uploadDir = path.join(__dirname, "../../../uplaods", uploadPath)

    await fs.unlink(uploadDir)

}
export const uploadCompanyImage = multer({ storage: storage })