import React from 'react'
import Authenticated from '@/Layouts/Authenticated/Index'
import Flickity from 'react-flickity-component'
import { Head } from '@inertiajs/inertia-react'
import FeaturedMovie from '@/Components/FeaturedMovie'
import MovieCard from '@/Components/MovieCard'

const Dashboard = ({ auth, featuredMovies, latestMovies }) => {
  const flickityOptions = {
    "cellAlign": "left",
    "contain": true,
    "groupCells": 1,
    "wrapAround": false,
    "pageDots": false,
    "prevNextButtons": false,
    "draggable": ">1"
  }
  return <Authenticated auth={auth}>
    <Head title='Dashboard'>
      <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
    </Head>
    <div>
      <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
      <Flickity className="gap-[30px]" options={flickityOptions}>
        {
          featuredMovies.map(featuredMovie => (
            <FeaturedMovie
              key={featuredMovie.id}
              slug={featuredMovie.slug}
              name={featuredMovie.name}
              category={featuredMovie.category}
              thumbnail={featuredMovie.thumbnail}
              rating={featuredMovie.rating}
            />
          ))
        }
      </Flickity>
    </div >
    <div className='mt-[50px]'>
      <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
      <Flickity className="gap-[30px]" options={flickityOptions}>
        {latestMovies.map((latestMovie) => (
          <MovieCard
            key={latestMovie.id}
            slug={latestMovie.slug}
            name={latestMovie.name}
            category={latestMovie.category}
            thumbnail={latestMovie.thumbnail}
          />
        ))}
      </Flickity>
    </div>
  </Authenticated >
}

export default Dashboard