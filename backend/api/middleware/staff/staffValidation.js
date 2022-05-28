exports.fileUploadValidation = (req, res, next) => {
    if (req.files.profilePhotoUrl == undefined || req.files.KYCpdfURL == undefined) {
        return res.json({ success: 0, msg: 'Image is require' })
    }
    const expectedFileType = ['png', 'jpg', 'jpeg']
    const expectedFileType2 = ['pdf']
    const fileExtension = req.files.profilePhotoUrl[0].mimetype.split('/')[1]
    fileExtension2 = req.files.KYCpdfURL[0].mimetype.split('/')[1]
    if (!expectedFileType.includes(fileExtension)) {
        return res.json({ success: 0, msg: "only jpeg|png|jpg extension image you can upload" })
    }
    if (!expectedFileType2.includes(fileExtension2)) {
        return res.json({ success: 0, msg: "only pdf extension , you can upload" })
    }
    next();
}