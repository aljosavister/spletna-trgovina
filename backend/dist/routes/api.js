import Express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
export default class Api {
    router;
    upload;
    constructor() {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const tmp = path.join(__dirname, "/tmp");
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, "tmp/");
            },
            filename: function (req, file, cb) {
                const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
                cb(null, file.fieldname + "-" + uniqueSuffix + ".jpg");
            },
        });
        this.upload = multer({ storage: storage });
        this.router = Express.Router();
        this.router.use((req, res, next) => {
            console.log("Time: ", Date.now());
            next();
        });
        this.router.post("/call", async function (req, res) {
            try {
                const appContext = req.appContext;
                res.send("OK");
            }
            catch (error) {
                res.status(400).send("Error");
            }
        });
        this.router.post("/upload", this.upload.single("file"), function (req, res) {
            const appContext = req.appContext;
            console.log(req.file);
            res.send("Successfully uploaded files");
        });
        this.router.post("/contact", async function (req, res) {
            try {
                console.log('Prejeto sporočilo:', req.body);
                res.status(200).json({ message: 'OK' });
            }
            catch (error) {
                res.status(400).send("Error");
            }
        });
    }
}
//# sourceMappingURL=api.js.map