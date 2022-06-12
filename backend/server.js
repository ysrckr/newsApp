const express = require('express')
const request = require('request')

const app = express()

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	next()
})

app.get('/sozcu', (req, res) => {
	request(
		{
			url: 'https://www.sozcu.com.tr/rss/tum-haberler.xml',
		},
		(error, response, body) => {
			if (error || response.statusCode !== 200) {
				return res.status(500).json({
					type: 'error',
					message: 'Something went wrong',
				})
			}
			res.set('Content-Type', 'application/rss+xml')
			res.send(Buffer.from(body))
		}
	)
})

const PORT = process.env.PORT || 4050
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
