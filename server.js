import express from 'express';
import fs from 'fs';

const app = express();

app.use(express.json());

app.post('/submit', (req, res) => {
  const formData = req.body;

  if (!formData) {
    return res.status(400).send('Fill feilds');
  }

  const dataFilePath = 'data.json';
  let existingData = [];

  if (fs.existsSync(dataFilePath)) {
    const fileContent = fs.readFileSync(dataFilePath, 'utf-8');
    existingData = JSON.parse(fileContent) || [];
  }

  existingData.push(formData);

  fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2));

  res.status(200).send('Data saved successfully!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
