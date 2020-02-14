
const express = require('express')
const cors = require('cors')
const MOVIE_LIST = require('./movie_list.json')

const app = express()

app.use(cors())

app.get('/movie', (req, res) => {
    if (req.query.genre) {
        const foundMovieArray = MOVIE_LIST.filter(movie => movie.genre.toLowerCase() === req.query.genre.toLowerCase());
        res.send(foundMovieArray)
        return
    }
    if(req.query.country){
        const foundCountry = MOVIE_LIST.filter(movie => movie.country.toLowerCase() === req.query.country.toLowerCase())
        res.send(foundCountry)
        return
    }
    if(req.query.avg_vote){
        const foundVote = MOVIE_LIST.filter(movie => movie.avg_vote >= parseInt(req.query.avg_vote))
        res.send(foundVote)
        return
    }
    res.status(200).send({message: `we couldn't find the movie you're looking for. Please try again` })
})



const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})