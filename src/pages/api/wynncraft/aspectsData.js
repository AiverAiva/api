export default async function status(req, res) {
    try {
        const response = await fetch('/assets/aspects_data.json');
        const result = await response.json();

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}