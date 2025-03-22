export default async function handler(req, res) {
    const apiKey = process.env.NEWS_API_KEY; // Store API key in environment variables
    const url = "https://api.cricapi.com/v1/series_squad?apikey=639a1488-2bf6-4838-affa-3144ff6ccef7&id=d5a498c8-7596-4b93-8ab0-e0efc3345312"
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data); // Send JSON response to frontend
    } catch (error) {
      res.status(500).json({ error: "Error fetching news" });
    }
  }