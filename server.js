const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/main.html');
});

app.get('/analytics', (req, res) => {
    res.sendFile(__dirname + '/public/analytics.html');
});

app.get('/download-pdf', (req, res) => {
    const filePath = 'C:/Users/rodio/OneDrive/Рабочий стол/FRONTEND_DEVELOPER/ГОТОВЫЕ ПРОЕКТЫ/Тестовые задания/Task-test-in-BIOCAD/card-data.pdf';
    res.download(filePath, 'card-data.pdf', function(err){
        if (err) {
            console.log(err);
            res.status(500).send("Ошибка при скачивании файла.");
        }
    });
});

app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/public/error.html');
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});