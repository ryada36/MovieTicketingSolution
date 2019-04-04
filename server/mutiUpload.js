const multer = require('multer');

let storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, './public')
    },
    filename: function(req, file, cb){
        let fullName = file.originalname.split('.')

        cb(null, fullName[0] + '-'+ Date.now() + '.' + fullName[1]);
    }
});

var upload = multer({storage: storage, limits: { fileSize: 5*1000*1000 }, 
    fileFilter: function(req, file, cb){
        if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
            console.log('mime type ',file.mimetype);
            req.fileValidationError = 'goes wrong on the mimetype';
            return cb(null, false, new Error('goes wrong on the mimetype'));
        }
        cb(null, true);
    }})
module.exports = { upload: upload.single('poster') };