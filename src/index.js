import { parse } from 'rss-to-json'

const getNews = async () => {
	const feed = 'http://localhost:4050/sozcu'
	try {
		const news = await parse(feed)
		return news.items
	} catch (error) {
		console.log(error)
	}
}
const newsFeed = async () => {
	const container = document.querySelector('.container')
	const newsList = await getNews()
	newsList.map(news => {
        console.log(news.title, news.description)
        container.innerHTML +=   `
        <div class="news-item">
            <h3><a href="${news.link}">${news.title}</a></h3>
            <p>${news.description}</p>
        </div>
       `
    })
   
}
newsFeed()
